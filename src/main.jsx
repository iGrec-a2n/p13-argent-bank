import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'

import Home from './pages/Home/Home'
import Signin from './pages/Signin/Signin'
import Profile from './pages/Profile/Profile'
import Error from './pages/Error/Error'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/signin' element={<Signin />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='*' element={<Error />}/>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
