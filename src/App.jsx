import { Outlet } from 'react-router-dom'

import './App.css'
import Header from './component/Header'
import Main from './component/Main'
import TopSlider from './component/TopSlider'

function App() {

  

  return (
    <div>
      <Header/>
      <Main/>
      <TopSlider/>
      <Outlet/>

    </div>
  )
}

export default App
