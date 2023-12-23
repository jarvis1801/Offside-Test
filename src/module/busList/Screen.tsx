import { FlatList, View, RefreshControl } from 'react-native'
import React, { useEffect } from 'react'
import BusListViewModel from './ViewModel'
import BusListItem from './BusListItem'

export default function BusListScreen() {

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

  return (
    <FlatList
      data={viewModel.busRouteList}
      ItemSeparatorComponent={() => Separator}
      renderItem={({item}) => <BusListItem data={item} />}
      keyExtractor={(item, index) => `${item['route']}-${index}`}
      refreshControl={
        <RefreshControl refreshing={viewModel.loading} onRefresh={onRefresh} />
      }
    />
  )
}