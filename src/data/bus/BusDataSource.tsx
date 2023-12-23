import { getRequest } from './DataSource'

export default function BusDataSource() {

  const host = 'https://data.etabus.gov.hk/v1/transport/kmb'
  const etaByStopPath = `${host}/stop-eta/{stopId}`
  const stopDetailPath = `${host}/stop/{stopId}`

  async function getStopEtaByRouteId(id: string) {
    const url = etaByStopPath.replace('{stopId}', id)
    return await getRequest(url)
  }

  async function getStopDetail(id: string) {
    const url = stopDetailPath.replace('{stopId}', id)
    return await getRequest(url)
  }

  return {
    getStopEtaByRouteId,
    getStopDetail
  }
} 
