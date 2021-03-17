import { StoreScheduleInterface } from '../Data/types/schedule.interface'

interface FormatSchedulesInterface{
  id?: string
  arrived: string
  exited: string
  lunchBreakStart: string
  lunchBreakEnd: string
  hours?: number
}

const formatSchedules = (schedules: StoreScheduleInterface[]): FormatSchedulesInterface[] => {
  const formattedSchedule = schedules.map(schedule => {
    delete schedule._id
    delete schedule.__v

    return schedule
  })

  return formattedSchedule
}

export default formatSchedules
