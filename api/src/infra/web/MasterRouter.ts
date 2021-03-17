import { Router } from 'express'
import ScheduleController from '@/domain/schedule/ScheduleController'

const masterRouter = Router()

masterRouter.use('/schedule', new ScheduleController().router)

export default masterRouter
