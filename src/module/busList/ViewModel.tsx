import { useState } from "react"
import BusRepository from "../../data/bus/BusRepository"

const stopIdList = ['BFA3460955AC820C', '5FB1FCAF80F3D97D']

export default function BusListViewModel(Repository = BusRepository()) {

  const [loading, setLoading] = useState(true)
  const [busRouteList, setBusRouteList] = useState<EtaStop[]>([])

  async function getRouteEtaList() {
    const nestedStopEtaList = await Promise.all(stopIdList.map(async id => {
      const etaList = await Repository.getStopEtaByRouteId(id)
      const stopDetail = await Repository.getStopDetail(id)

      const filteredEtaList = uniqueRouteList(etaList)
      injectStopDetailIntoEtaList(filteredEtaList, stopDetail)

      return filteredEtaList
    }))

    const stopEtaList = getBusCombineList(nestedStopEtaList)

    setBusRouteList(stopEtaList)
    setLoading(false)
  }

  const injectStopDetailIntoEtaList = (filteredEtaList: EtaStopResponse, stopDetail: StopDetailResponse) => {
    filteredEtaList.data.map(item => {
      item['origin_stop'] = stopDetail.data
      item
    })
  }

  const uniqueRouteList = (etaList: EtaStopResponse) => {
    etaList['data'] = etaList.data.reduce((unique: EtaStop[], item) => {
      const found = unique.find(i => i.route === item.route)
      if (!found) {
        unique.push(item)
      }
      return unique
    }, [])
    return etaList
  }

  const getBusCombineList = (nestedStopEtaList: EtaStopResponse[]): EtaStop[] => {
    return ([] as any[]).concat(...nestedStopEtaList.map(item => item.data))
      .sort((a, b) => (a['route'] > b['route']) ? 1 : ((b['route'] > a['route']) ? -1 : 0))
  }

  return {
    loading,
    busRouteList,
    getRouteEtaList,
    setBusRouteList,
    setLoading
  }
}