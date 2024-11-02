import React from 'react'
import  '../About.css'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';;
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Box } from '@mui/material';
function Aboutus() {
  return (
    
        <div>
           <div className='simplify-wehelp'>
              <p className='simplify'> Simplify Your Digital Life </p>
              <p className='wehelp' > We help you take control of your subscriptions, save money, and never miss payment</p>
            </div>
            <div className='save-money-container'>
               
               <div>
                  <div style={{display:'flex', justifyContent:'center'}}>
                     <Box sx={{borderRadius:'50%', width: 50, height:50, backgroundColor: '#E7F3E7', display:'flex', alignItems:'center', justifyContent:'center'}}>
                     <AddOutlinedIcon sx={{fontSize:40, color: '#1BE619'}} />
                     </Box>
                  </div>
                  <div className='track-everything'>Track Everything</div>
                  <div className='monitor-all'>Monitor all your subscriptions in one place. Never lose track of what you're paying for.</div>
               </div>  
              
               <div>
                  <div style={{display:'flex', justifyContent:'center'}}>
                     <Box sx={{borderRadius:'50%', width: 50, height:50, backgroundColor: '#E7F3E7', display:'flex', alignItems:'center', justifyContent:'center'}}>
                     <MonetizationOnOutlinedIcon sx={{fontSize:40, color: '#1BE619'}} />
                     </Box>
                 </div>
                 <div className='save-money'>Save Money</div>
                 <div className='identify-unused'>Identify unused subscriptions and optimize your spending with smart recomendations.</div>
               </div>
               
               <div>
                  <div style={{display:'flex', justifyContent:'center'}}>
                     <Box sx={{borderRadius:'50%', width: 50, height:50, backgroundColor: '#E7F3E7', display:'flex', alignItems:'center', justifyContent:'center'}}>
                     <NotificationsOutlinedIcon sx={{fontSize:40, color: '#1BE619'}} />
                     </Box>
                 </div>
                 <div className='never-miss'>Never Miss a Payment</div>
                 <div className='get-timely'>Get timely reminders before payments are due and track renewal dates efforlessley.</div>
               </div>
           
            </div>
            <div>
               <div className='numbers'>
                  <div className='fifty-aactive-users'>
                     <div className='fifty'> 50K+ </div>
                     <p className='active-users'>Active Users</p>
                  </div>
                  <div className='two-saved'>
                     <div className='two'> $2M+ </div>
                     <p className='saved-users'>Saved by Users</p>
                  </div>
                     <div className='hundred-subscription'>
                     <div className='hundred'> 100K+ </div>
                     <p className='subscription-managed'>Subscriptions Managed</p>
                  </div>
                  
             </div>
             <div>
               <div>Meet Our Team</div>
             </div>
            </div>
        </div>
       
    
  );
}

export default Aboutus
