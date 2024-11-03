import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
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
       const [searchParams] = useSearchParams();
       const name = searchParams.get('name');
       const email = searchParams.get('email')
  return (
    <div>
        <div style={{display:'flex', flexDirection:'row', gap:'78%'}}>
           <p><button onClick={handleProfileClick} style={{paddingLeft:'45px', border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder'}}> Profile</button></p>
        <div style={{display:'flex', justifyContent:'flex-end', gap:'10px'}}>
            <button onClick={handleSubscriptionClick} style={{  border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder'}}> Subscription</button>
            <button onClick={handleSignOutClick} style={{  border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder' }}> Sign Out</button>
       </div>
       </div>
   </div>
  )
}

export default Profile
