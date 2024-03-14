import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Diagnosis from './pages/Diagnosis'
import Appointment from './pages/Appointment'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/'             element={ <Home        /> } />
          <Route path='/diagnosis'    element={ <Diagnosis   /> } />
          <Route path='/appointment'  element={ <Appointment /> } />
          <Route path='/about'        element={ <About       /> } />
          <Route path='/contact'      element={ <Contact     /> } />
          <Route path='/login'        element={ <Login       /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App