import { StyleSheet, View, Text, FlatList, RefreshControl } from 'react-native'
import React, { useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps'

import EtaListViewModel from './ViewModel'
import EtaListItem from './EtaListItem'

export default function BusDetailScreen({ route, navigation }) {

  const viewModel = EtaListViewModel(route.params)

  useEffect(() => {
    viewModel.getEtaList()
  }, [])

  const onRefresh = React.useCallback(() => {
    viewModel.setLoading(true)
    viewModel.getEtaList()
  }, [])

  const Separator = <View style={{ backgroundColor: "gray", height: 1 }} />

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        initialRegion={{
          latitude: viewModel.latitude,
          longitude: viewModel.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}>
        
        <Marker
          key="stop"
          coordinate={{ latitude: viewModel.latitude, longitude: viewModel.longitude }}
        />

      </MapView>
      <View style={styles.separator} />
      <Text style={styles.stop_name}>{viewModel.stopName}</Text>
      <FlatList
        data={viewModel.etaList}
        renderItem={({item}) => <EtaListItem data={item} />}
        keyExtractor={(item, index) => `${item['route']}-${index}`}
        refreshControl={
          <RefreshControl refreshing={viewModel.loading} onRefresh={onRefresh} />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '69.5%',
  },
  separator: {
    width: '100%',
    height: '0.5%',
    backgroundColor: 'red',
  },
  stop_name: {
    fontSize: 22,
    padding: 16,
    marginHorizontal: 10,
  }
})