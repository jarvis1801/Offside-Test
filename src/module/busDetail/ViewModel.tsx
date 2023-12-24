import { useState } from "react"
import BusRepository from "../../data/bus/BusRepository"

export default function BusDetailViewModel(
  param: Object,
  Repository = BusRepository()
) {
  
  const stopName = param['stopName']
  const stopId = param['stopId']
  const route = param['route']
  const direction = param['direction']
  const serviceType = param['serviceType']
  const latitude = Number(param['latitude'])
  const longitude = Number(param['longitude'])

  const [loading, setLoading] = useState(true)
  const [etaList, setEtaList] = useState<EtaStop[]>([])

  const getEtaList = async() => {
    const etaList: EtaStopResponse = await Repository.getStopEtaByRouteId(stopId)
    const filteredEtaList = etaList.data.filter(etaStop => 
      etaStop.route == route &&
      etaStop.dir == direction &&
      etaStop.service_type == serviceType
    ).sort((a, b) => (a?.eta_seq ?? -1) - (b?.eta_seq ?? -1))
    
    console.log(filteredEtaList)
    setEtaList(filteredEtaList)
    setLoading(false)
  }

  return {
    loading,
    etaList,
    latitude,
    longitude,
    stopName,
    setEtaList,
    setLoading,
    getEtaList
  }
}