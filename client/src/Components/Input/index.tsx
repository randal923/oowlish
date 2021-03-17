import React, { ChangeEvent } from 'react'

interface InputProps {
  name: string
  value: string
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ handleOnChange, name, value }: InputProps): React.ReactElement => (
  <input type="time" name={name} onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChange(e)} value={value} />
)

export default Input
