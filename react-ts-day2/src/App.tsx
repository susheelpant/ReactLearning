import { type JSX } from 'react'
import TestEffects from './Components/TestEffects'
import TestEffects2 from './Components/TestEffects2'
import './App.css'

function App() : JSX.Element {
  return (
    <>
      <TestEffects />
      <br />
      <TestEffects2 />
      <br />
     </>
  )
}

export default App
