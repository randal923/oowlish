// Interfaces
import { ScheduleInterface, HoursWorkedInterface, StoreScheduleInterface } from '../Data/types/schedule.interface'

// Functions
import { calculateHoursWorked } from '../Data/calculateHoursWorked'

import { storeSchedule, getSchedules } from '../Domain/schedule'

export const types = {
  CALCULATE_HOURS_WORKED: 'CALCULATE_HOURS_WORKED',
  STORE_SCHEDULE: 'STORE_SCHEDULE',
  GET_SCHEDULE: 'GET_SCHEDULE',
  CLEAN_STORE_SCHEDULE: 'CLEAN_STORE_SCHEDULE'
}

export const hoursWorkedAction = (schedule: ScheduleInterface): { type: string, payload: HoursWorkedInterface } => {
  const response = calculateHoursWorked(schedule)
  return {
    type: types.CALCULATE_HOURS_WORKED,
    payload: response
  }
}

export const storeScheduleAction = (schedule: StoreScheduleInterface) => async (dispatch: any): Promise<void> => {
  const response = await storeSchedule(schedule)
  return dispatch({
    type: types.STORE_SCHEDULE,
    payload: response
  })
}

export const getSchedulesAction = () => async (dispatch: any): Promise<void> => {
  const reponse = await getSchedules()
  return dispatch({
    type: types.GET_SCHEDULE,
    payload: reponse
  })
}

const scheduleReducer = (state = {}, { type, payload }: any): any => {
  switch (type) {
    case types.CALCULATE_HOURS_WORKED:
      return {
        ...state,
        hoursWorked: payload
      }
    case types.STORE_SCHEDULE:
      return {
        ...state,
        storeSchedule: payload
      }
    case types.GET_SCHEDULE:
      return {
        ...state,
        schedules: payload
      }
    default:
      return state
  }
}

export default scheduleReducer
