import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { getEtaMinuteByDate } from '../../util/DateUtil'

const BusListItem = ({data}) => (
  <TouchableOpacity style={{ flex: 1 }}>
    <View style={styles.container}>
      <Text style={styles.route}>{data['route']}</Text>
      <View style={[styles.column_container, styles.destination_container]}>
        <View style={[styles.column_container, styles.row_container]}>
          <Text style={styles.destination_label}>往</Text>
          <Text style={styles.destination}>{data['dest_tc']}</Text>
        </View>
        <Text style={styles.origin_stop}>{data['originStop']['name_tc']}</Text>
      </View>
      <View style={[styles.column_container, styles.minute_container]}>
        <Text style={styles.minute}>{getEtaMinuteByDate(data['eta'])}</Text>
        <Text style={styles.minute_label}>分鐘</Text>
      </View>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  row_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  column_container: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  route: {
    fontSize: 28,
    fontWeight: 'bold',
    width: 120,
  },
  destination_container: {
    flex: 1,
  },
  destination: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingHorizontal: 4,
  },
  destination_label: {
    fontSize: 12,
    alignSelf: 'flex-end',
  },
  origin_stop: {
    fontSize: 16,
  },
  minute_container: {
    width: 50,
    alignItems: 'flex-end',
    alignContent: 'flex-end',
  },
  minute: {
    fontSize: 40,
    color: "#375EAC",
  },
  minute_label: {
    fontSize: 12,
  }
});


export default BusListItem