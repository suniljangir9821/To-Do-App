import { useState } from 'react'
import './App.css'
import Navber from './Components/Navber'
import ToDoApp from './Components/ToDoApp'

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      document.body.style.background = '#054662'
      document.body.style.color = '#fff'
      setMode('dark')
    } else {
      document.body.style.background = '#fff'
      document.body.style.color = '#000'
      setMode('light')
    }
  }

  return (
    <>
      <Navber mode={mode} toggleMode={toggleMode} />
      <ToDoApp mode={mode} />
    </>
  )
}

export default App
