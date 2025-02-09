import React from 'react'

const AlertMassage = ({className, children }) => {
  return (
    <div className={`absolute top-full translate-y-1 text-sm text-white bg-red-600 px-2 rounded-sm ${className}`}>
        {children}
    </div>
  )
}

export default AlertMassage