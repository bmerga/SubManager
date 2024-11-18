import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router'

function Profile() {
    const navigate = useNavigate();
    
    const handleProfileClick = () => {
        navigate('/profile')
     }
    const handleSubscriptionClick = () => {
       navigate('/subscription')
    }
    const handleSignOutClick = () => {
       navigate('/signin')
       }
       
  return (
    <div>
        <nav style={{display:'flex', flexDirection:'row', gap:'78%'}}>
           <p><button onClick={handleProfileClick} style={{paddingLeft:'45px', border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder'}}> Profile</button></p>
        <div style={{display:'flex', justifyContent:'flex-end', gap:'10px'}}>
            <button onClick={handleSubscriptionClick} style={{  border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder'}}> Subscription</button>
            <button onClick={handleSignOutClick} style={{  border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder' }}> Sign Out</button>
       </div>
       </nav>
      
   </div>
  )
}

export default Profile
