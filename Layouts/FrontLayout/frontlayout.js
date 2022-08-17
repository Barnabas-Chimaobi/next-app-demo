import React from 'react'
import { Navbar } from "../../components/nav"

export default function frontlayout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}
