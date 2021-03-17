import * as express from 'express'
import { Inject } from 'typescript-ioc'
import asyncErrorHandler from 'express-async-handler'

import ScheduleRepository from './ScheduleRepository'

class ScheduleController {
  @Inject
  private readonly ScheduleRepository!: ScheduleRepository

  private readonly _router = express.Router()

  constructor () {
    this.initializeRoutes()
  }

  initializeRoutes (): void {
    this._router.post('/create', asyncErrorHandler(this.createSchedule.bind(this)))
    this._router.get('/', asyncErrorHandler(this.getSchedules.bind(this)))
  }

  async createSchedule (req: express.Request, res: express.Response): Promise<express.Response<{}>> {
    await this.ScheduleRepository.create(req.body)

    return res.send({ message: 'Successfully stored schedule.' })
  }

  async getSchedules (req: express.Request, res: express.Response): Promise<express.Response<{}>> {
    const schedules = await this.ScheduleRepository.findAll()

    return res.send(schedules)
  }

  get router (): express.Router {
    return this._router
  }
}

export default ScheduleController
