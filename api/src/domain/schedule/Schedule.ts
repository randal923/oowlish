import mongoose, { Schema } from 'mongoose'
import { ScheduleInterface } from './schedule.interface'

const ScheduleSchema: Schema = new Schema({
  arrived: { type: String, required: true },
  exited: { type: String, required: true },
  lunchBreakStart: { type: String, required: true },
  lunchBreakEnd: { type: String, required: true },
  hoursWorked: { type: Number, required: true },
  minutesWorked: { type: Number, required: true }
})

export default mongoose.model<ScheduleInterface>('Schedule', ScheduleSchema)
