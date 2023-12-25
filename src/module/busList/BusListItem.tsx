import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { getEtaMinuteByDate } from '../../util/DateUtil'

import { getCurrentLocale, t } from '../../util/LanguageUtil'

import { useTheme } from 'react-native-paper'

const BusListItem = ({data, onItemClick}) => {

  const theme = useTheme()
  
  const originStop = getCurrentLocale() == "en" ? data['origin_stop']['name_en'] : data['origin_stop']['name_tc']
  const dest_tc = getCurrentLocale() == "en" ? data['dest_en'] : data['dest_tc']

  return(
    <TouchableOpacity style={{ flex: 1 }} onPress={() => onItemClick(data)}>
      <View style={styles.container}>
        <Text style={{color: theme.colors.onBackground, ...styles.route}}>{data['route']}</Text>
        <View style={[styles.column_container, styles.destination_container]}>
          <View style={[styles.row_container]}>
            <Text style={{color: theme.colors.onBackground, ...styles.destination_label}}>{t('destination_label')}</Text>
            <Text style={{color: theme.colors.onBackground, ...styles.destination}}>{dest_tc}</Text>
          </View>
          <Text style={{color: theme.colors.onBackground, ...styles.origin_stop}}>{originStop}</Text>
        </View>
        <View style={[styles.column_container, styles.minute_container]}>
          <Text style={{color: theme.colors.primary, ...styles.minute}}>{getEtaMinuteByDate(data['eta'])}</Text>
          <Text style={{color: theme.colors.onBackground, ...styles.minute_label}}>{t('minute_label')}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    maxWidth: '100%',
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
    flexWrap: 'wrap'
  },
  route: {
    fontSize: 28,
    fontWeight: 'bold',
    width: 90,
  },
  destination_container: {
    flexGrow: 1,
    flexShrink: 1,
    width: '100%'
  },
  destination: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingHorizontal: 4
  },
  destination_label: {
    fontSize: 12,
    alignSelf: 'flex-end',
  },
  origin_stop: {
    fontSize: 16,
    width: '100%'
  },
  minute_container: {
    width: 50,
    alignItems: 'flex-end',
    alignContent: 'flex-end',
  },
  minute: {
    fontSize: 40,
  },
  minute_label: {
    fontSize: 12,
  }
});


export default BusListItem