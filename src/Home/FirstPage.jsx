import React from 'react'
import '../App.css'
import {Container, Paper, styled, Typography, Box, Button} from '@mui/material'
import { useNavigate } from 'react-router'; 


const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '10px',
    boxShadow: theme.shadows[3],
}));

function FirstPage() {
    const navigate = useNavigate();

    const handleHomeInClick = () => {navigate('/')}
    const handleAboutUsClick = () => {navigate('/aboutus')}
    const handleSignInClick = () => {navigate('/signin')}
    const handleSignUpClick = () => {navigate('/signup')}
   
  return (
    <div>
      <nav style={{display:'flex', flexDirection:'row', gap:'62%'}}>
          <p><button onClick={handleHomeInClick} style={{paddingLeft:'45px', border: 'none', background: 'transparent', cursor:'pointer', fontWeight:'bolder'}}> Acme Subscription Manager</button></p>
         <div style={{display:'flex', justifyContent:'flex-end', gap:'10px'}}>
            <button onClick={handleAboutUsClick} style={{  border: 'none', background: 'transparent', cursor:'pointer', fontWeight:'bolder'}}> About Us</button>
            <button onClick={handleSignInClick} style={{  border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder' }}> Sign In</button>
            <button onClick={handleSignUpClick} style={{ width: '95px', height: '45px', borderRadius:'8px',border: 'none', background: '#1BE619', cursor:'pointer', fontSize:'15px', fontWeight:'bolder'}}> Start Free</button>
         </div>
      </nav>
      
    <div className='container'>
        <div className='home-first-page'>
           <div className='TCYDS'>
              <h1 className='Take-control'> Take Control of Your Digital Subscriptions</h1>
              <p className='Track'> Track, manage, and optimize all your Subscriptions in one place. 
                Save money and never miss a payment again</p>
              <div className='get-learn-button-container'>
                 <button onClick={handleSignUpClick} className='get-started'> Get Started Free</button>
                 <button onClick={handleAboutUsClick} className='learn-more'>Learn More</button>
              </div>
             
              <p className='no-credit-card'> No credit card required. Free 14-day trial</p>
           </div>
           <Container >
            
               <Box display="flex" gap={22} >
              <Typography variant="h5" paddingTop={4} paddingBottom={5} fontWeight='bold'>Active Subscrption</Typography>
              <Typography variant="h5" color='#85B786' paddingTop={4}>$84.00/month</Typography>
           </Box>
          
           <StyledPaper>
              <Box>
                 <div style={{ display: 'flex', gap: '300px', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                       <button style={{ width: '45px', height: '45px', borderRadius:'8px',border: 'none', background: '#1BE619' }}></button>
                       <div style={{paddingLeft:'10px'}}>
                          <Typography variant="h5" style={{ marginLeft: '10px' }}>Netflix</Typography>
                          <Typography variant="h5" color='#85B786' style={{ marginLeft: '10px' }}>Monthly</Typography>
                       </div>
                    </div>
                   <div><Typography variant="h5">$12.00</Typography></div>
                </div>
             </Box>
          </StyledPaper> <br></br>
           
          <StyledPaper>
            <Box>
               <div style={{display:'flex', gap:'315px', alignItems:'center'}}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                     <button style={{ width: '45px', height: '45px', borderRadius:'8px',border: 'none', background: '#1BE619' }}></button>
                     <div style={{paddingLeft:'15px'}}>   
                        <Typography variant="h5">Spotify</Typography>
                        <Typography variant="h5" color='#85B786'>Monthly</Typography>
                     </div>   
               </div>
                 <div><Typography variant="h5">$9.99</Typography></div>
              </div>
           </Box>
           </StyledPaper> <br></br>

           <StyledPaper>
            <Box>
               <div style={{display:'flex', gap:'215px', alignItems:'center'}}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                     <button style={{ width: '45px', height: '45px', borderRadius:'8px',border: 'none', background: '#1BE619' }}></button>
                     <div style={{paddingLeft:'15px'}}>   
                        <Typography variant="h5">Amazon Prime </Typography>
                        <Typography variant="h5" color='#85B786'>Annual</Typography>
                    </div> 
                  </div>
                 <div> <Typography variant="h5">$139.00</Typography></div>
               </div>
           </Box>
           </StyledPaper>    
              
         </Container>
        </div>
           
    </div>
</div>    
  )
}

export default FirstPage
