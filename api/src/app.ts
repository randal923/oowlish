import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import mongoose from 'mongoose'
import config from '@/config/env'

import MasterRouter from '@/infra/web/MasterRouter'

class App {
  private readonly _express: express.Application

  constructor () {
    this._express = express()
  }

  async start (): Promise<express.Application> {
    try {
      this.middlewares()
      this.initializeMasterRouter()
      await this.intializeDatabase()
      return this._express
    } catch (error) {
      console.log(error)
    }
  }

  private middlewares (): void {
    this._express.use(express.json())
    this._express.use(cors())
    this._express.use(morgan('tiny'))
  }

  private initializeMasterRouter (): void {
    this._express.use(MasterRouter)
  }

  private async intializeDatabase (): Promise<void> {
    await mongoose.connect(config.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  }
}

export default App
