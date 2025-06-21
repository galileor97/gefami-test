import React from 'react'
import AppBar from '../components/app-bar'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppBar />
      {children}
    </>
  )
}
