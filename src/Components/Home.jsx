import React from 'react'
import '../App.css'
import { Container, Grid2, Paper, styled, Typography, Box} from '@mui/material'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import StarIcon from '@mui/icons-material/Star';
const StyledPaper = styled(Paper)(({ theme }) => ({
   padding: theme.spacing(1), 
   backgroundColor: theme.palette.background.paper, 
   boxShadow: theme.shadows[3], 
}));

function Home() {
  return (
   <div>
      <div style={{display:'flex', justifyContent:'flex-end', gap:'2%', fontSize:'53px'}}>
          <button> About Us</button>
          <button> Sign In</button>
          <button> Start Free</button>
      </div>
     
    
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
              <Typography variant="h5" paddingTop={4} paddingBottom={5} fontWeight='bold'>Active Subscrption</Typography>
              <Typography variant="h5" paddingTop={4}>$84.00/month</Typography>
           </Box>
           <StyledPaper>
            <Box paddingLeft={10}>
              <div style={{display:'flex', gap:'330px', alignItems:'center'}}>
                <div>
                  <Typography variant="h5">Netflix </Typography>
                  <Typography variant="h5" color='#85B786'>Monthly</Typography>
               </div>
                <div><Typography variant="h5">$12.00</Typography></div>
              </div>
            </Box>
           </StyledPaper> <br></br>
           
           <StyledPaper>
            <Box paddingLeft={10}>
               <div style={{display:'flex', gap:'340px', alignItems:'center'}}>
               <div>
                 <Typography variant="h5">Spotify</Typography>
                 <Typography variant="h5" color='#85B786'>Monthly</Typography>
               </div>
                 <div><Typography variant="h5">$9.99</Typography></div>
              </div>
           </Box>
           </StyledPaper> <br></br>
           <StyledPaper>
            <Box paddingLeft={10}>
               <div style={{display:'flex', gap:'240px', alignItems:'center'}}>
                  <div>
                     <Typography variant="h5">Amazon Prime </Typography>
                     <Typography variant="h5" color='#85B786'>Annual</Typography>
                  </div> 
                 <div> <Typography variant="h5">$139.00</Typography></div>
               </div>
           </Box>
           </StyledPaper>    
              
         </Container>
        </div>
           
            <p className='wcop'>Why Choose Our Platform</p> 
            <p className='eyn'>Everything you need to manage subscriptions effectively</p>
          
           
           <Container>
            <div style={{display:"flex", gap:"4%", padding:"5% 1%", }}>
            <StyledPaper>
               <Box>
                    <button ><SignalCellularAltOutlinedIcon style={{fontSize:40, cursor: "hand", color: '#85B786'}} /></button> 
                     <Typography variant="h4">Analytics Dashboard</Typography>
                     <Typography variant="h5" color='#85B786'>Get detailed insights into your 
                     spending patterns and subscription usage.</Typography>     
              </Box>
            </StyledPaper> 
            <StyledPaper>
               <Box  >
                   <button><NotificationsOutlinedIcon style={{fontSize:40, cursor: "hand", color: '#85B786'}} /></button>
                  <Typography variant="h4">Smart Reminders</Typography>
                  <Typography variant="h5" color='#85B786'>Never miss a payment with  
                   automated notifications and renewal reminders.</Typography>
              </Box>
            </StyledPaper>
            <StyledPaper>
               <Box  >
                  <button><MonetizationOnOutlinedIcon style={{fontSize:40, cursor: "hand", color: '#85B786'}} /> </button>
                  <Typography variant="h4">Cost Optimazation</Typography>
                  <Typography variant="h5" color='#85B786'>Get recomendations to reduce costs  
                   and identify unused subscriptions.</Typography>
              </Box>
            </StyledPaper>
            </div>  
      </Container>
      <Container style={{ backgroundColor: '#E7F3E7'}}>
         <div className='trusted-by-thousands'> Trusted by Thousands</div>
         <p className='join-over'>Join over 50,000 users who have taken control of their subscription</p>
         <div style={{display:"flex", gap:"4%", padding:"5% 1%", }}>
            <StyledPaper>
               <Box>
                  <StarIcon style={{fontSize:30, color:'#85B786'}} /> 
                  <Typography variant="h5">"This app has saved me hundreds of dollars
                     by identifying subscriptions I forgot about. The interface is intuitive
                     and the reminders are super helpful."</Typography>
                  <button style={{color:'#85B786'}}>SJ</button> Sarah Johnson <div style={{color:'#85B786', paddingLeft:'35px'}}>Small Business Owner</div>   
              </Box>
            </StyledPaper> 
            <StyledPaper>
               <Box>                
                  <Typography variant="h5" style={{paddingTop:"30px"}}>"The analytics dashboard is amazing! I can see 
                     exactly where my money is going and make informed decisions
                     about my subscriptions."</Typography>
                     <button style={{color:'#85B786'}}>MR</button> Michael Rodirguez <div style={{color:'#85B786', paddingLeft:'40px'}}> Freelance Designer</div>
              </Box>
            </StyledPaper>
            <StyledPaper>
               <Box  >
                  <Typography variant="h5" style={{paddingTop:"30px"}}>"Perfect for keeping track of all my family's 
                     subscriptions. The cost optimazation features have helped us budget better".</Typography>
                  <button style={{color:'#85B786'}}> EP</button> Emily Parker <div style={{color:'#85B786', paddingLeft:'40px'}}> Family Manager </div>
              </Box>
            </StyledPaper>
            </div>  
      </Container>
    </div>
    </div>
  )
}
    


export default Home
