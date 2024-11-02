import React from 'react'
import  '../About.css'
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
function Aboutus() {
  return (
    
        <div>
           <div className='simplify-wehelp'>
              <p className='simplify'> Simplify Your Digital Life </p>
              <p className='wehelp' > We help you take control of your subscriptions, save money, and never miss payment</p>
            </div>
            <div className='save-money-container'>
               <div>
                  <AddCircleOutlineSharpIcon style={{fontSize:40, color: '#85B786', paddingLeft:'45%', paddingBlock:'10px'}} />
                  <div className='track-everything'>Track Everything</div>
                  <div className='monitor-all'>Monitor all your subscriptions in one place. Never lose track of what you're paying for.</div>
               </div>  
               <div>
                  <MonetizationOnOutlinedIcon style={{fontSize:40, color: '#85B786', paddingLeft:'42%',paddingBlock:'10px'}}  />
                  <div className='save-money'>Save Money</div>
                  <div className='identify-unused'>Identify unused subscriptions and optimize your spending with smart recomendations.</div>
               </div>
               <div>
                  <NotificationsOutlinedIcon style={{fontSize:40, color: '#85B786', paddingLeft:'42%', paddingBlock:'10px'}}  />
                  <div className='never-miss'>Never Miss a Payment</div>
                  <div className='get-timely'>Get timely reminders before payments are due and track renewal dates efforlessley.</div>
               </div>
            </div>
            <div>
               <div className='numbers'>
                  <div className='fifty-aactive-users'>
                     <p className='fifty'> 50K+ </p>
                     <p className='active-users'>Active Users</p>
                  </div>
                  <div className='two-saved'>
                     <p className='two'> $2M+ </p>
                     <p className='saved-users'>Saved by Users</p>
                  </div>
                     <div className='hundred-subscription'>
                     <p className='hundred'> 100K+ </p>
                     <p className='subscription-managed'>Subscriptions Managed</p>
                  </div>
                  
             </div>
            </div>
        </div>
       
    
  );
}

export default Aboutus
