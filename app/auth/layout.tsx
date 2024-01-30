import React from 'react'

const AuthLayout = (
    {children}:{
        children:React.ReactNode
    }
) => {
  return (
    <div className=' flex h-full flex-col items-center justify-center p-0 
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 w-full'>
        {children}
        </div>
  )
}

export default AuthLayout