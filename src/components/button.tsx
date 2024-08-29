import React from 'react'
type ButtonProps = {
    onClick: () => void
    children: string
}

export const Button: React.FC<ButtonProps> = ({children, onClick}) => {
  return (
    <button onClick={onClick}>{children}</button>
  )
}
