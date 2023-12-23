import BusDataSource from "./BusDataSource"

export default function BusRepository(DataSource = BusDataSource()) {
  return {
    async getStopEtaByRouteId(id: string) {
      const result = await DataSource.getStopEtaByRouteId(id)
      return result
    },

    async getStopDetail(id: string) {
      const result = await DataSource.getStopDetail(id)
      return result
    }
  }
}
