import { FlatList, View, RefreshControl } from 'react-native'
import React, { useEffect } from 'react'
import BusListViewModel from './ViewModel'
import BusListItem from './BusListItem'

import { getCurrentLocale } from '../../util/LanguageUtil'

export default function BusListScreen({ navigation }) {

  const viewModel = BusListViewModel()

  useEffect(() => {
    viewModel.getRouteEtaList()
  }, [])

  const onRefresh = React.useCallback(() => {
    viewModel.setBusRouteList([])
    viewModel.setLoading(true)
    viewModel.getRouteEtaList()
  }, [])

  const Separator = <View style={{ backgroundColor: "gray", height: 1 }} />

  const goToDetailPage = (data: EtaStop) => {
    const stopDetail = data['origin_stop']
    const stopName = getCurrentLocale() == 'en' ? stopDetail?.name_en : stopDetail?.name_tc

    navigation.navigate('BusDetail', {
      stopName: stopName,
      stopId: stopDetail?.stop,
      route: data['route'],
      direction: data['dir'],
      serviceType: data['service_type'],
      latitude: stopDetail?.lat,
      longitude: stopDetail?.long
    });
  }

  return (
    <FlatList
      data={viewModel.busRouteList}
      ItemSeparatorComponent={() => Separator}
      renderItem={({item}) => <BusListItem data={item} onItemClick={(data) => goToDetailPage(data)} />}
      keyExtractor={(item, index) => `${item['route']}-${index}`}
      refreshControl={
        <RefreshControl refreshing={viewModel.loading} onRefresh={onRefresh} />
      }
    />
  )
}