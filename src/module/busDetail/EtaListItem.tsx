import { View, Text, StyleSheet } from 'react-native'

import { getEtaMinuteByDate } from '../../util/DateUtil'

import { getCurrentLocale, t } from '../../util/LanguageUtil'
import { useTheme } from 'react-native-paper'
  
const EtaListItem = ({data}) => {
  const theme = useTheme()

  const remark = getCurrentLocale() == 'en' ? data['rmk_en'] : data['rmk_tc']
  return(
    <View style={styles.container}>
      <Text style={{ color: theme.colors.primary, ...styles.minute }}>{getEtaMinuteByDate(data['eta'])}</Text>
      <Text style={{ color: theme.colors.onBackground, ...styles.minute_label }}>{t('minute_label')}</Text>
      {
        remark != null && remark != '' && (
          <Text style={{ color: theme.colors.outline, ...styles.remark }}>{remark}</Text>
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
    textAlign: 'right'
  },
  minute_label: {
    fontSize: 11,
    paddingHorizontal: 3
  },
  remark: {
    fontSize: 19,
    marginVertical: -1,
  }
})


export default EtaListItem