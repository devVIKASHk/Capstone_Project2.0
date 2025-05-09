import React from 'react';
import './App.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './Components/component/Layout'
import Challenges from './Components/Pages/Challenges/Challenges';
import PageNotFound from './Components/Pages/PageNotFound/PageNotFound';
import About from './Components/Pages/About/About';
import LeaderBoard from './Components/Pages/LeaderBoard/LeaderBoard';
import Profile from './Components/Pages/Profile/Profile';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import LoginLayout from './Components/component/LoginLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>

        <Route path='' element={<Home />} />
        <Route path='user'>
          <Route path='/user/challenges' element={<Challenges />} />
          <Route path='/user/leaderboard' element={<LeaderBoard />} />
          <Route path='/user/profile' element={<Profile />} />
          

        </Route>
        <Route path='about' element={<About />} />
        
      </Route>

      <Route path='/' element={<LoginLayout/>}>
            
            
        <Route path='/user/login' element={<Login/>}/>
      
      </Route>


        



      <Route path='*' element={<PageNotFound />} />

    </>


  )
)


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App