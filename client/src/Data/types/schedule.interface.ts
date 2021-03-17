export interface ScheduleInterface {
    _id?: string
    arrived: string
    exited: string
    lunchBreakStart: string
    lunchBreakEnd: string
    __v?: number
}

export interface StoreScheduleInterface extends ScheduleInterface{
    hoursWorked?: number
    minutesWorked?: number
}

export interface HoursWorkedInterface {
    hours: number
    minutes: number
}