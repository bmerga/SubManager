import React from 'react'
import '../App.css'
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import { useNavigate } from 'react-router'; 


function Home() {

  return (
   <div>
       <FirstPage />
       <SecondPage />
       <ThirdPage />
    </div>
  )
}
    


export default Home
