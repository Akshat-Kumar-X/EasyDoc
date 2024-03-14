import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Diagnosis from './pages/Diagnosis'
import Appointment from './pages/Appointment'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Blogs from './pages/Blogs'
import AddBlog from './pages/AddBlog'
import AuthProvider from './contexts/auth-provider'
import Doctor from './pages/Doctor'
import Blogs from './pages/Blogs'

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-blog' element={<AddBlog />} />
          <Route path='/diagnosis' element={<Diagnosis />} />
          <Route path='/appointment' element={<Appointment />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/doctor'       element={ <Doctor/> } />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App