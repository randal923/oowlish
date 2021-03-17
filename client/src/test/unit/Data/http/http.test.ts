import { Http } from '../../../../Data/http'
import faker from 'faker'
import axios from 'axios'

jest.mock('axios')
const axiosMock = axios as jest.Mocked<typeof axios>

describe('Http test suite', () => {
  const dataMock = {
    _id: 'any_id',
    arrived: 'any_arrived_time',
    exited: 'any_exited_time',
    lunchBreakStart: 'any_lunchBreakStart_time',
    lunchBreakEnd: 'any_lunchBreakEnd_time',
    hoursWorked: 'any_hours_worked',
    minutesWorked: 'any_minutes_worked'
  }
  const url = faker.internet.url()

  afterEach(() => {
    jest.clearAllMocks()
  })
  test('should get correct response from GET request', async () => {
    axiosMock.get.mockResolvedValue({
      data: [dataMock]
    })

    const response = await Http.get(url)
    expect(response).toEqual([dataMock])
  })
  test('should get correct response from POST request', async () => {
    axiosMock.post.mockResolvedValue({
      data: 'Successfully created schedule'
    })

    const response = await Http.post(url, dataMock)
    expect(response).toBe('Successfully created schedule')
  })
})
