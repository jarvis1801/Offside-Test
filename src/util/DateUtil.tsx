export const getEtaMinuteByDate = (etaDatetime: string) => {
  if (etaDatetime == null || etaDatetime == "") return "-"
  const date = new Date()
  const etaDate = new Date(etaDatetime)
  const diffInMin = Math.round((etaDate.getTime() - date.getTime()) / 60000)
  return diffInMin < 0 ? "-" : diffInMin
} 