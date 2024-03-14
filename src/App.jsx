import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Diagnosis from './pages/Diagnosis'
import Appointment from './pages/Appointment'
import Login from './pages/Login'
import Signup from './pages/Signup'
<<<<<<< HEAD
import Blogs from './pages/Blogs'
import AddBlog from './pages/AddBlog'
import AuthProvider from './contexts/auth-provider'
=======
import Doctor from './pages/Doctor'
<<<<<<< HEAD
import Blogs from './pages/Blogs'
=======
>>>>>>> 66dc40e6eddab4788d540675852faa65c95a1988
>>>>>>> e4fdb437857dea8870fc426bccc34ab9d67e7ed3

const App = () => {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-blog' element={<AddBlog />} />
          <Route path='/diagnosis' element={<Diagnosis />} />
          <Route path='/appointment' element={<Appointment />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </AuthProvider>
=======
      <Navbar/>
      <Routes>
          <Route path='/'             element={ <Home/> } />
          <Route path='/diagnosis'    element={ <Diagnosis/> } />
          <Route path='/appointment'  element={ <Appointment/> } />
          <Route path='/doctor'       element={ <Doctor/> } />
          <Route path='/login'        element={ <Login/> } />
          <Route path='/login'        element={ <Login/> } />
          <Route path='/blog'        element={ <Blogs/> } />
          <Route path='/signup'       element={ <Signup/> } />
      </Routes>
>>>>>>> 66dc40e6eddab4788d540675852faa65c95a1988
    </BrowserRouter>
  )
}

export default App