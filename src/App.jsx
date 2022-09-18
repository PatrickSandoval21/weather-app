import Navegation from './components/Navegation'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Navegation />
      <Outlet/>
    </> 

  )
}

export default App
