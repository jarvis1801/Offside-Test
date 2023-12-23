type StopDetailResponse = {
  type: string | undefined,
  version: string | undefined,
  generated_timestamp: string | undefined,
  data: StopDetail,
}

type StopDetail = {
  stop: string | undefined,
  name_en: string | undefined,
  name_tc: string | undefined,
  name_sc: string | undefined,
  lat: string | undefined,
  long: string | undefined,
}