import { UrlBuilder } from '../../Data/urlBuilder'
import { Http } from '../../Data/http'
import { StoreScheduleInterface } from '../../Data/types/schedule.interface'

export const storeSchedule = async (schedule: StoreScheduleInterface): Promise<{}> => {
  return await Http.post(UrlBuilder.storeSchedule(), schedule)
}

export const getSchedules = async (): Promise<StoreScheduleInterface[]> => {
  return await Http.get(UrlBuilder.getSchedules())
}
