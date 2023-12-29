import './App.css'
import MainLayout from './Layout/MainLayout/MainLayout'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <MainLayout>
        <Outlet></Outlet>
      </MainLayout>
    </>
  )
}

export default App
