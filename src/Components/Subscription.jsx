import React from 'react'
import { useNavigate } from 'react-router'

function Subscription() {
    const navigate = useNavigate();
    const handleHomeInClick = () => {
        navigate('/')
     }
     const handleSubscriptionsClick = () => {
        navigate('/newSubscription')
        }
     const handleAboutUsClick = () => {
        navigate('/aboutus')
        }
     const handleSignOutClick = () => {
        navigate('/signin')
     }
    
  return (
    <div>
      <div style={{display:'flex', flexDirection:'row', gap:'62%'}}>
          <p><button onClick={handleHomeInClick} style={{paddingLeft:'45px', border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder'}}> Acme Subscription Manager</button></p>
         <div style={{display:'flex', justifyContent:'flex-end', gap:'10px'}}>
            <button onClick={handleSubscriptionsClick} style={{  border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder' }}> Subscriptions</button>
            <button onClick={handleSignOutClick} style={{  border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder' }}> Sign Out</button>
            <button onClick={handleAboutUsClick} style={{  border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder'}}> About Us</button>
            
         </div>
      </div>
    </div>
  )
}

export default Subscription
