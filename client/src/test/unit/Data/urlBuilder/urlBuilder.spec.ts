import { UrlBuilder } from '../../../../Data/urlBuilder'
describe('UrlBuilder test suite', () => {
  test('should get the correct URL', () => {
    const url = UrlBuilder.storeSchedule()
    expect(url).toBe('http://localhost:5000/schedule/create')
  })

  test('should get the correct URL', () => {
    const url = UrlBuilder.getSchedules()
    expect(url).toBe('http://localhost:5000/schedule')
  })
})
