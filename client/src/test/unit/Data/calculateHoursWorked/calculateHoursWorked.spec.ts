import { calculateHoursWorked } from '../../../../Data/calculateHoursWorked'
describe('Calcute hours worked test suit', () => {
  test('should get the correct amount of hours worked', () => {
    const schedule = {
      arrived: '06:00',
      exited: '17:00',
      lunchBreakStart: '13:00',
      lunchBreakEnd: '14:00'
    }
    const hoursWorked = calculateHoursWorked(schedule)

    expect(hoursWorked).toEqual({ hours: 10, minutes: 0 })
  })
})
