import React, { useState, ChangeEvent, ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

// Components
import Input from '../../Components/Input'
import ScheduleTable from '../../Components/ScheduleTable'
import Button from '../../Components/Button'

// Interfaces
import { ScheduleInterface, StoreScheduleInterface } from '../../Data/types/schedule.interface'

// Actions
import { hoursWorkedAction, storeScheduleAction, getSchedulesAction } from '../../redux/schedule'

function App (): ReactElement {
  const dispatch = useDispatch()
  const hoursWorked = useSelector<any, {hours: number, minutes: number}>(state => state.hoursWorked)
  const storeSchedule = useSelector<any, {message: string}>(state => state.storeSchedule)
  const getSchedules = useSelector<any, StoreScheduleInterface[]>(state => state.schedules)
  const [schedule, setSchedule] = useState<ScheduleInterface>({
    arrived: '',
    exited: '',
    lunchBreakStart: '',
    lunchBreakEnd: ''
  })

  useEffect(() => {
    storeSchedule && alert(storeSchedule.message)
  }, [storeSchedule])

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSchedule({
      ...schedule,
      [e.target.name]: e.target.value
    })
  }

  const handleCalculate = (): void => {
    dispatch(hoursWorkedAction(schedule))
  }

  const handleStoreSchedule = (): void => {
    if (hoursWorked) {
      const mergedSchedule = { ...schedule, hoursWorked: hoursWorked.hours, minutesWorked: hoursWorked.minutes }
      // tslint:disable-next-line
      dispatch(storeScheduleAction(mergedSchedule))
    } else {
      alert('No schedule found. Please, fill out the schedule fields and hit CALCULATE.')
    }
  }

  const handleGetAllSchedules = (): void => {
    dispatch(getSchedulesAction())
  }

  return (
    <Container>
      <Time>
        <h2>Starting Time:</h2>
        <Input handleOnChange={handleOnChange} name='arrived' value={schedule.arrived} />
      </Time>
      <Time>
        <h2>Ending Time:</h2>
        <Input handleOnChange={handleOnChange} name='exited' value={schedule.exited}/>
      </Time>
      <Time>
        <h2>Lunch break:</h2>
        <StartEnd>
          <h3>Start:</h3>
          <Input handleOnChange={handleOnChange} name='lunchBreakStart' value={schedule.lunchBreakStart}/>
          <h3>End:</h3>
          <Input handleOnChange={handleOnChange} name='lunchBreakEnd' value={schedule.lunchBreakEnd}/>
        </StartEnd>
      </Time>
      <Button onClick={handleCalculate} text='Calculate Hours'/>
      <Button onClick={handleStoreSchedule} text='Store Schedule'/>
      <Button onClick={handleGetAllSchedules} text='Get All Schedules' />
      {hoursWorked && (
        <Hours>The employee worked {hoursWorked?.hours} hours and {hoursWorked?.minutes} minutes</Hours>
      )}
      {getSchedules && (
        <ScheduleTable headers={['Starting Time', 'Ending Time', 'Lunch Break Start', 'Lunch Break End', 'Hours Worked', 'Minutes Worked']} schedules={getSchedules}/>
      )}
    </Container>
  )
}

export default App

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Hours = styled.h2`
  margin: 20px;
`
const Time = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  
  h2 {
    margin-right: 20px;
  }
`
const StartEnd = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin: 5px 0;
  }
`
