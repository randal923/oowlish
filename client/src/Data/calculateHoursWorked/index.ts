// Types
import { ScheduleInterface } from '../../Data/types/schedule.interface'

export const calculateHoursWorked = ({ arrived, exited, lunchBreakStart, lunchBreakEnd }: ScheduleInterface): {hours: number, minutes: number} => {
  const today = Date().slice(4, 15)
  const arrivedTime = new Date(`${today} ${arrived}`).getTime()
  const exitedTime = new Date(`${today} ${exited}`).getTime()
  const lunchBreakStartTime = new Date(`${today} ${lunchBreakStart}`).getTime()
  const lunchBreakEndTime = new Date(`${today} ${lunchBreakEnd}`).getTime()

  const lunchBreakMinutes = Math.floor((lunchBreakEndTime - lunchBreakStartTime) / 1000 / 60)
  const totalMinutesWorked = Math.floor((exitedTime - arrivedTime) / 1000 / 60) - lunchBreakMinutes

  const minutes = (totalMinutesWorked % 60)
  const hours = (totalMinutesWorked - minutes) / 60

  return {
    hours,
    minutes
  }
}
