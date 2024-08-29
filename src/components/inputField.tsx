import React, { ChangeEventHandler } from 'react'

type InputFieldProps = {
  type: string
  placeholder?: string
  value?: string
  checked?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
  
}

const InputField : React.FC<InputFieldProps> = ({type, placeholder, value, checked, onChange}) => {
  return (
    <input type={type} placeholder={placeholder} value={value} checked={checked} onChange={onChange} />
  )
}

export default InputField