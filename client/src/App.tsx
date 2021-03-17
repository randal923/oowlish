import React from 'react'
import styled from 'styled-components'
import GlobalStyle from './Presentation/Global/styles'

// Components
import TimePicker from './Containers/TimePicker'

function App (): React.ReactElement {
  return (
    <>
      <Container>
        <TimePicker />
      </Container>
      <GlobalStyle />
    </>
  )
}

export default App

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`
