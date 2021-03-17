import React from 'react'
import styled from 'styled-components'

interface ButtonInterface {
  text: string
  onClick: () => void
}
const Button = ({ text, onClick }: ButtonInterface): React.ReactElement => (
  <Container onClick={onClick}>
    {text}
  </Container>
)

export default Button

const Container = styled.button`
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    line-height: 1.2;
    padding: 10px 25px;
    width: 220px;
    color: white;
    text-transform: uppercase;
    border: 1px solid var(--button__border-color);
    border-radius: 20px;
    font-weight: 500;
    background: none;
    letter-spacing: 2px;
    transition: all 0.3s ease 0s;
    background-color: var(--button__background-color);
    box-shadow: 0px 8px 15px var(--button__box-shadow--color);
    :hover {
      background-color: var(--button__hover-color);
      cursor: pointer;
      box-shadow: rgb(0 0 0 / 10%) 0px 8px 15px;
      transform: translateY(-3px);
    }
    :focus {
      outline: 0;
    }
`
