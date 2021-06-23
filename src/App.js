import React from 'react'
import FunctionalComponent from './components/FunctionalComponent'
import {ThemeProvider} from './ThemeContext'

function App() {
  return (
    <ThemeProvider>
       <FunctionalComponent/>
    </ThemeProvider>
  )
}

export default App
