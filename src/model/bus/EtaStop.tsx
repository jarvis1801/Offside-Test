type EtaStopResponse = {
  type: string | undefined,
  version: string | undefined,
  generated_timestamp: string | undefined,
  data: EtaStop[],
}

type EtaStop = {
  co: string | undefined,
  route: string | undefined,
  dir: string | undefined,
  service_type: number | undefined,
  seq: number | undefined,
  dest_tc: string | undefined,
  dest_sc: string | undefined,
  dest_en: string | undefined,
  eta_seq: number | undefined,
  eta: string | undefined,
  rmk_tc: string | undefined,
  rmk_sc: string | undefined,
  rmk_en: string | undefined,
  data_timestamp: string | undefined,
}