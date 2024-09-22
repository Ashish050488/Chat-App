import React from 'react'

const Button = ({
    label='',
    type='button', //  Default type is button but it can be chnaged
    className='',
    disabled=false,
    onClick = ()=>{}
}) => {
  return (
        <button   onClick={disabled ? null : onClick} type={type} className={`p-2 text-xl font-bold  rounded-sm w-2/3 text-gray-700 border-2 focus:outline-none border-gray-800 focus:border-x-gray-800 hover:bg-gray-700 hover:text-gray-100 ${className}`} disabled={disabled}>
            {label} 
        </button>
  )
}

export default Button
