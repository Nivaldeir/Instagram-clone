import React, { useState } from 'react'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Profile from '../Pages/Profile'
import Feed from '../Pages/Feed'
import Post from '../Pages/Post'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginAuth, RequireAuth } from '../Utils/Login'


export default function Router() {
  const [userId, setUserId] = useState(localStorage.getItem('InstagramUserId'))

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LoginAuth>
              <Login />
            </LoginAuth>
          }
        />
        <Route path='/register' element={<Register />} />
        <Route
          path="/feed"
          element={
            <RequireAuth>
              <Feed />
            </RequireAuth>
          }
        />

        <Route path='/post' element={<Post />} />

        {/* <Route path='/profile' element={<Profile />} /> */}

        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
