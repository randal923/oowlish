import { Document } from 'mongoose'

export interface ScheduleInterface extends Document {
  arrived: string
  exited: string
  lunchBreakStart: string
  lunchBreakEnd: string
  hoursWorked: number
  minutesWorked: number
}
