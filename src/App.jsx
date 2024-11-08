import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import Profile from './Components/Profile';
import Subscription from './Components/Subscription';
import NewSubscription from './Components/Newsubscription';
import React from 'react'
import './App.css'
import { FooterProvider } from './Components/FooterContext';
import Footer from './Components/Footer';

function App() {
  

  return (
    <FooterProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/aboutus' element={<Aboutus />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/subscription' element={<Subscription />}/>
        <Route path='/newsubscription' element={<NewSubscription />}/>
      </Routes>
      <Footer/>
    </Router>
    
    </FooterProvider>
    
  )
}

export default App
