import React from 'react'
 

const Button = ({primary,label,onClick}) => {
  return (
     <button onClick={onClick} className={`${primary?'primary':'secondary'} button`}>
        {label}
     </button>
  )
}

export default Button