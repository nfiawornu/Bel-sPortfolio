import React from 'react'
import './Button.styles.css'

const Button = ({primary}) => {
  return (
     <button className={primary?'primary-Button':'secondary-Button'}>
        Button
     </button>
  )
}

export default Button