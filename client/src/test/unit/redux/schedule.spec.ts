import scheduleReducer, { getSchedulesAction, storeScheduleAction, hoursWorkedAction, types } from '../../../redux/schedule'
import * as calculateHoursWorked from '../../../Data/calculateHoursWorked'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

jest.mock('axios')
const axiosMock = axios as jest.Mocked<typeof axios>

describe('Redux schedule test suit', () => {
  const scheduleMock = {
    arrived: 'any_arrived_time',
    exited: 'any_exited_time',
    lunchBreakStart: 'any_lunchBreakStart_time',
    lunchBreakEnd: 'any_lunchBreakEnd_time',
    hoursWorked: 'any_hours_worked',
    minutesWorked: 'any_minutes_worked'
  }

  test('Should create CALCULATE_HOURS_WORKED action', () => {
    const spy = jest.spyOn(calculateHoursWorked, 'calculateHoursWorked')
    spy.mockReturnValue({
      hours: 10,
      minutes: 0
    })
    expect(hoursWorkedAction(scheduleMock)).toEqual({ type: types.CALCULATE_HOURS_WORKED, payload: { hours: 10, minutes: 0 } })
  })
  test('Should create STORE_SCHEDULE action', () => {
    const response = 'Schedule saved successfully.'
    axiosMock.post.mockResolvedValueOnce({
      data: response
    })
    const expectedAction = { type: types.STORE_SCHEDULE, payload: response }
    const store = mockStore({})

    return store.dispatch(storeScheduleAction(scheduleMock as any) as any).then(() => {
      expect(store.getActions()).toEqual([expectedAction])
    })
  })

  test('should create GET_SCHEDULE action', () => {
    axiosMock.get.mockResolvedValueOnce({
      data: [scheduleMock]
    })
    const expectedAction = { type: types.GET_SCHEDULE, payload: [scheduleMock] }
    const store = mockStore({})

    return store.dispatch(getSchedulesAction() as any).then(() => {
      expect(store.getActions()).toEqual([expectedAction])
    })
  })
})

describe('Schedule Reducer', () => {
  const scheduleMock = {
    arrived: 'any_arrived_time',
    exited: 'any_exited_time',
    lunchBreakStart: 'any_lunchBreakStart_time',
    lunchBreakEnd: 'any_lunchBreakEnd_time',
    hoursWorked: 'any_hours_worked',
    minutesWorked: 'any_minutes_worked'
  }
  test('should return initial state', () => {
    expect(scheduleReducer({}, {})).toEqual({})
  })
  test('should handle CALCULATE_HOURS_WORKED', () => {
    expect(scheduleReducer({},
      {
        type: types.CALCULATE_HOURS_WORKED,
        payload: { hours: 10, minutes: 0 }
      })
    ).toEqual(
      {
        hoursWorked: { hours: 10, minutes: 0 }
      }
    )
  })
  test('should handle STORE_SCHEDULE', () => {
    const response = 'Schedule saved successfully.'
    expect(scheduleReducer({},
      {
        type: types.STORE_SCHEDULE,
        payload: response
      })
    ).toEqual(
      {
        storeSchedule: response
      }
    )
  })
  test('should handle GET_SCHEDULE', () => {
    expect(scheduleReducer({},
      {
        type: types.GET_SCHEDULE,
        payload: [scheduleMock]
      })
    ).toEqual(
      {
        schedules: [scheduleMock]
      }
    )
  })
})
