import Schedule from './Schedule'
import { ScheduleInterface } from './schedule.interface'

class ScheduleRepository {
  async create (body: ScheduleInterface): Promise<ScheduleInterface> {
    try {
      return await Schedule.create(body)
    } catch (error) {
      console.log('Error when creating entity: ', error)
    }
  }

  async findAll (): Promise<ScheduleInterface[]> {
    try {
      return await Schedule.find()
    } catch (error) {
      console.log('Error when creating entity: ', error)
    }
  }
}

export default ScheduleRepository
