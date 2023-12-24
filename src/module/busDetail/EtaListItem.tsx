import { View, Text, StyleSheet } from 'react-native'

import { getEtaMinuteByDate } from '../../util/DateUtil'

const EtaListItem = ({data}) => (
  <View style={styles.container}>
    <Text style={styles.minute}>{getEtaMinuteByDate(data['eta'])}</Text>
    <Text style={styles.minute_label}>分鐘</Text>
    {
      data['rmk_tc'] != null && data['rmk_tc'] != '' && (
        <Text style={styles.remark}>{data['rmk_tc']}</Text>
      )
    }
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 4,
    paddingHorizontal: 40,
    alignItems:'flex-end',
  },
  minute: {
    width: 25,
    fontSize: 20,
    marginVertical: -5,
    color: "#375EAC",
    textAlign: 'right'
  },
  minute_label: {
    fontSize: 11,
    paddingHorizontal: 3
  },
  remark: {
    fontSize: 19,
    color: '#888888',
    marginVertical: -1,
  }
})


export default EtaListItem