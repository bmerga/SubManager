import React from 'react'
import '../App.css'
import { Container, Grid2, Paper, styled, Typography, Box} from '@mui/material'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
const StyledPaper = styled(Paper)(({ theme }) => ({
   padding: theme.spacing(1), 
   backgroundColor: theme.palette.background.paper, 
   boxShadow: theme.shadows[3], 
}));

function Home() {
  return (
    <div className='container'>
        <div className='home-first-page'>
           <div className='TCYDS'>
              <h1 className='Take-control'> Take Control of Your Digital Subscriptions</h1>
              <p className='Track'> Track, manage, and optimize all your Subscriptions in one place. 
                Save money and never miss a payment again</p>
              <div className='get-learn-button-container'>
                 <button className='get-started'> Get Started Free</button>
                 <button className='learn-more'>Learn More</button>
              </div>
             
              <p className='no-credit-card'> No credit card required. Free 14-day trial</p>
           </div>
           <Container>
            
               <Box display="flex" gap={28} >
              <Typography variant="h5" paddingTop={4} paddingBottom={5}>Active Subscrption</Typography>
              <Typography variant="h5" paddingTop={4}>$84.00/month</Typography>
           </Box>
           <StyledPaper>
            <Box display="flex" gap={33} paddingLeft={10}>
              <Typography variant="h5" >Netflix Monthly</Typography>
              <Typography variant="h5">$12.00</Typography>
           </Box>
           </StyledPaper> <br></br>
           <StyledPaper>
            <Box display="flex" gap={33} paddingLeft={10}>
              <Typography variant="h5">Spotify Monthly</Typography>
              <Typography variant="h5">$9.99</Typography>
           </Box>
           </StyledPaper> <br></br>
           <StyledPaper>
            <Box display="flex" gap={20} paddingLeft={10}>
              <Typography variant="h5">Amazon Prime Annual</Typography>
              <Typography variant="h5">$139.00</Typography>
           </Box>
           </StyledPaper>    
              
         </Container>
        </div>
           
            <p className='wcop'>Why Choose Our Platform</p> 
            <p className='eyn'>Everything you need to manage subscriptions effectively</p>
          
           
           <Container>
            <div style={{display:"flex", gap:"4%", padding:"5% 1%", }}>
            <StyledPaper>
               <Box  >
                     {/* <Button> {<NotificationsOutlinedIcon />}</Button> */}
                     <Typography variant="h4">Analytics Dashboard</Typography>
                     <Typography variant="h5">Get detailed insights into your 
                     spending patterns and subscription usage.</Typography>
                              
              </Box>
            </StyledPaper> 
            <StyledPaper>
               <Box  >
                  <Typography variant="h4">Smart Reminders</Typography>
                  <Typography variant="h5">Never miss a payment with  
                   automated notifications and renewal reminders.</Typography>
              </Box>
            </StyledPaper>
            <StyledPaper>
               <Box  >
                  <Typography variant="h4">Cost Optimazation</Typography>
                  <Typography variant="h5">Get recomendations to reduce costs  
                   and identify unused subscriptions.</Typography>
              </Box>
            </StyledPaper>
            </div>
             
           
      </Container>
    
    </div>
  )
}
    


export default Home
