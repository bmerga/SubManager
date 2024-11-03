import React from 'react'
import  '../About.css'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';;
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

function Aboutus() {
   const navigate = useNavigate();
   const handleHomeInClick = () => {
      navigate('/')
   }
   const handleSignInClick = () => {
      navigate('/signin')
   }
   const handleSignUpClick = () => {
      navigate('/signup')
   }
  return (
    
        <div>
            <div style={{display:'flex', flexDirection:'row', gap:'68%'}}>
              <p><button onClick={handleHomeInClick} style={{paddingLeft:'45px', border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder'}}> Acme Subscription Manager</button></p>
              <div style={{display:'flex', gap:'20px'}}>
              <button onClick={handleSignInClick} style={{ border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder'}}> Sign In</button>
              <button onClick={handleSignUpClick} style={{ borderRadius:'8px', background: '#1BE619', width: '95px', height: '45px', border: 'none', cursor:'pointer', fontWeight:'bolder'}}> Sign Up</button>
              </div>
            </div>
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
            <div style={{padding:'70px'}}>
                <div style={{textAlign:'center', fontSize:'28px', fontWeight:'bolder'}}>Meet Our Team</div>
               
               <div style={{ padding:'40px', display:'flex', alignItems:'center',  justifyContent:'center', gap:'33%'}}>
                  <div>
                     <Box sx={{ color:'#1BE619', fontSize:'20px', borderRadius:'50%', width: 80, height:80, 
                     backgroundColor: '#E7F3E7', display:'flex', alignItems:'center', justifyContent:'center'}}>JS</Box>
                     <div style={{fontSize:'20px', fontWeight:'bolder'}}>John Smith</div>
                     <div style={{color:'#91BC8F'}}>CEO & Founder</div>
                 </div>
                 <div>
                    <Box sx={{ color:'#1BE619', fontSize:'20px', borderRadius:'50%', width: 80, height:80, 
                     backgroundColor: '#E7F3E7', display:'flex', alignItems:'center', justifyContent:'center'}}>SD</Box>
                    <div style={{fontSize:'20px', fontWeight:'bolder'}}>Sarah Davis</div>
                    <div style={{color:'#91BC8F'}}>Head of Product</div>
                 </div>
                 <div>
                   <Box sx={{ color:'#1BE619', fontSize:'20px', borderRadius:'50%', width: 80, height:80, backgroundColor: '#E7F3E7', 
                     display:'flex', alignItems:'center', justifyContent:'center'}}>MR</Box>
                   <div style={{fontSize:'20px', fontWeight:'bolder'}}>Mike Roberts</div>
                   <div style={{color:'#91BC8F'}}>Lead Developer</div>
                 </div>
                 </div>

              </div>
               <div style={{ display: 'flex',padding:'40px' ,flexDirection:'column',  backgroundColor: '#E7F3E7', textAlign:'center'}}>
                  <div style={{display:'flex',justifyContent:'center' ,fontWeight: 'bolder', fontSize: '30px'}}> Ready to Take Control? </div>
               <div style={{display:'flex' ,paddingLeft:'25%', width:'45%'}}> Join thousands of users who have simplified their subscription management and saved money</div>
               <div style={{display:'flex', paddingTop:'20px', paddingLeft:'42%'}}><button onClick={handleSignUpClick} style={{padding:'13px', borderRadius:'8px',cursor:'pointer', fontSize:'16px', backgroundColor:'#1BE619',border:'none'}}>Get Started for Free</button></div>
            </div>
            </div>

            
            {/* Footer */}
            <Box sx={{padding: '40px', textAlign: 'center'}}>
               <div style={{display:'flex',gap:'22%'}}> 
                  <div style={{textAlign:'justify'}}>
                     <div style={{fontWeight:'bolder'}}> Company</div> 
                        <div style={{color:'#91BC8F'}}>
                           <p>About Us</p>
                           <p>Careers</p>
                           <p>Press</p>
                        </div>
                  </div>
                  <div style={{textAlign:'justify'}}>
                     <div style={{fontWeight:'bolder'}}> Product</div> 
                        <div style={{color:'#91BC8F'}}>
                           <p>Features</p>
                           <p>Pricing</p>
                           <p>Security</p>
                        </div>
                  </div>
                  <div style={{textAlign:'justify'}}>
                     <div style={{fontWeight:'bolder'}}> Resources</div> 
                        <div style={{color:'#91BC8F'}}>
                           <p>Blog</p>
                           <p>Help Center</p>
                           <p>Contact</p>
                        </div>
                  </div>
                  <div style={{textAlign:'justify'}}>
                     <div style={{fontWeight:'bolder'}}> Legal</div> 
                        <div style={{color:'#91BC8F'}}>
                           <p>Privacy</p>
                           <p>Terms</p>
                           <p>Cookie Policy</p>
                        </div>
                  </div>
               </div>                 
               <Typography variant="body2" color="text.secondary">
                    &copy; {new Date().getFullYear()} Acme Subscription Manager. All rights reserved.
                </Typography>
                
            </Box>
        
        </div>
       
    
  );
}

export default Aboutus
