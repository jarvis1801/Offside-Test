import { FlatList, View, RefreshControl, StyleSheet, TouchableOpacity, Text } from 'react-native'
import React, { useEffect } from 'react'
import BusListViewModel from './ViewModel'
import BusListItem from './BusListItem'

import { Button } from 'react-native-paper'

import { getCurrentLocale, changeLocale } from '../../util/LanguageUtil'

import { useTheme } from 'react-native-paper'

export default function BusListScreen({ navigation }) {
  const theme = useTheme()

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

  const onLangClick = () => {
    changeLocale()
  }

  return (
    <View style={{ backgroundColor: theme.colors.background }}>
      <FlatList
        data={viewModel.busRouteList}
        ItemSeparatorComponent={() => Separator}
        renderItem={({item}) => <BusListItem data={item} onItemClick={(data) => goToDetailPage(data)} />}
        keyExtractor={(item, index) => `${item['route']}-${index}`}
        refreshControl={
          <RefreshControl refreshing={viewModel.loading} onRefresh={onRefresh} />
        }
      />
      <TouchableOpacity onPress={() => onLangClick()}>
        <Button style={{ backgroundColor: theme.colors.secondaryContainer, ...styles.button_lang }}>
          <Text style={{ color: theme.colors.onSecondaryContainer }}>Language</Text>
        </Button>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button_lang: {
    position: 'absolute',
    right: 30,
    bottom: 30,
  }
})