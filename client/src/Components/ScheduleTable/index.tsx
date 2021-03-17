import React from 'react'
import styled from 'styled-components'

// types
import { StoreScheduleInterface } from '../../Data/types/schedule.interface'

// Utils
import formatSchedules from '../../Utils/formatSchedules'

interface TableProps {
  headers: string[]
  schedules: StoreScheduleInterface[]
}

const ScheduleTable = ({ headers, schedules }: TableProps): React.ReactElement => {
  console.log(schedules)
  const rows = formatSchedules(schedules ?? [])
  return (
    <Container>
      <table>
        <thead>
          <tr>
            {headers.map(header => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(rowObj => (
            <tr key={Math.random()}>
              {Object.values(rowObj).flatMap((row: any) => (
                <td key={Math.random()}>{row}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default ScheduleTable

const Container = styled.div`
  table, td, th {
      border: 1px solid grey;
  }

  th {
      padding: 10px;
  }

  table {
      border-collapse: collapse;
      width: 100%;
  }

  td {
      text-align: center;
  }
`
