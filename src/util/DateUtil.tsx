export const getEtaMinuteByDate = (etaDatetime: string) => {
  if (etaDatetime == null || etaDatetime == "" || !isDate(etaDatetime)) return "-"
  const date = new Date()
  const etaDate = new Date(etaDatetime)
  const diffInMin = Math.round((etaDate.getTime() - date.getTime()) / 60000)
  return diffInMin < 0 ? "-" : diffInMin
}

export const isDate = (datetime: string) => {
  const parsedDate = Date.parse(datetime)
  return !isNaN(parsedDate)
}