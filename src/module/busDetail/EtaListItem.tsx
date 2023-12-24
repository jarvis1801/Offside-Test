import { View, Text, StyleSheet } from 'react-native'

import { getEtaMinuteByDate } from '../../util/DateUtil'

import { getCurrentLocale, t } from '../../util/LanguageUtil'

const EtaListItem = ({data}) => {
  const remark = getCurrentLocale() == 'en' ? data['rmk_en'] : data['rmk_tc']
  return(
    <View style={styles.container}>
      <Text style={styles.minute}>{getEtaMinuteByDate(data['eta'])}</Text>
      <Text style={styles.minute_label}>{t('minute_label')}</Text>
      {
        remark != null && remark != '' && (
          <Text style={styles.remark}>{remark}</Text>
        )
      }
    </View>
  )
}

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