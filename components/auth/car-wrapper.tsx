"use client"
import React from 'react'

interface CardWrapperProps{
    children:React.ReactNode,
    headerLabel:string,
    backButtonLabel:string,
     backButtonHref:string,
     showSocial?:boolean
}

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
}:CardWrapperProps) => {
  return (
    <div>CardWrapper</div>
  )
}
