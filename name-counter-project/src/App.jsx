import { useState } from 'react'
import './App.css'
import { NameComp } from './NameComp'

function App() {
  console.log("app render")
  return (
    <>
      <NameComp />
    </>
  )
}

export default App
