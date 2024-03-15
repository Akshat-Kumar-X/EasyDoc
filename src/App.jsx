import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Diagnosis from './pages/Diagnosis';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Blogs from './pages/Blogs';
import AddBlog from './pages/AddBlog';
import AuthProvider from './contexts/auth-provider';
import Doctor from './pages/Doctor';
import Doctordetail from './pages/Doctordetail';
import Doctorcard from './pages/Doctocard';
import Doctorpage from './pages/Doctorpage';
import Cartpage from './pages/Cartpage';

const App = () => {
  const [showIframe, setShowIframe] = useState(false);

  const toggleIframe = () => {
    setShowIframe(!showIframe);
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-blog' element={<AddBlog />} />
          <Route path='/cart' element={<Cartpage />} />
          <Route path='/doctorcard' element={<Doctorcard />} />
          <Route path='/doctordetail' element={<Doctordetail />} />
          <Route path='/doctorpage' element={<Doctorpage />} />
          <Route path='/diagnosis' element={<Diagnosis />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/doctor' element={<Doctor />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        {showIframe && (
          <iframe
            height="430"
            width="350"
            src="https://console.dialogflow.com/api-client/demo/embedded/7755ff2c-1f39-40f4-b010-55310bd1d8a7"
            style={{ position: 'fixed', right: 35, bottom: 35, zIndex: 9999 }}
          ></iframe>
        )}

        <div class="relative group cursor-pointer " style={{ position: 'fixed', right: 15, bottom: 15, padding: '10px', zIndex: 9999 }}>
            <div
                class="absolute -inset-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-lg blur opacity-25 group-hover:opacity-70 transition duration-1000 group-hover:duration-200">
            </div>
            <div
                class="relative px-1 py-2 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                <div class="space-y-2">
                    <p class="text-slate-800" onClick={toggleIframe} style={{ padding: '10px 20px', color: 'gray', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>AI Bot</p>
                </div>
            </div>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
