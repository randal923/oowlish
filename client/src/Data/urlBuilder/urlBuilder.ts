import IUrlBuilder from './urlBuilder.interface'

class UrlBuilder implements IUrlBuilder {
  storeSchedule (): string {
    const url = 'http://localhost:5000/schedule/create'
    return url
  }

  getSchedules (): string {
    const url = 'http://localhost:5000/schedule'
    return url
  }
}

export default new UrlBuilder()
