import { useState, useEffect, useRef } from 'react'
import './App.less'
import TitleBar from './components/TitleBar/TitleBar'
import MainContainer from './components/MainContainer/MainContainer'




function App() {

  return (
    <div className="App">
		<TitleBar/>
		<MainContainer/>
    </div>
  )
}

export default App
