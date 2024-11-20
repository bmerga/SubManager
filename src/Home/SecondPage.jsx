import React from 'react'
import '../App.css'
import {Container, Typography, Box, styled, Paper} from '@mui/material'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';


const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '10px',
    boxShadow: theme.shadows[3],
}));


function SecondPage() {
  return (
    <div>
       <p className='wcop'>Why Choose Our Platform</p> 
            <p className='eyn'>Everything you need to manage subscriptions effectively</p>
          
           
           <Container>
            <div style={{display:"flex", gap:"4%", padding:"5% 1%", }}>
            <StyledPaper>
               <Box>
                    <button style={{border:'none', borderRadius:'10px'}}><SignalCellularAltOutlinedIcon style={{fontSize:40, cursor: "hand", color: '#1BE619'}} /></button> 
                     <Typography variant="h5" fontWeight='bolder'>Analytics Dashboard</Typography>
                     <Typography variant="h6" color='#85B786'> Get detailed insights into your 
                     spending patterns and subscription usage.</Typography>     
              </Box>
            </StyledPaper> 
            <StyledPaper>
               <Box  >
                   <button style={{border:'none', borderRadius:'10px'}}><NotificationsOutlinedIcon style={{fontSize:40, cursor: "hand", color: '#1BE619'}} /></button>
                  <Typography variant="h5" fontWeight='bolder'>Smart Reminders</Typography>
                  <Typography variant="h6" color='#85B786'>Never miss a payment with  
                   automated notifications and renewal reminders.</Typography>
              </Box>
            </StyledPaper>
            <StyledPaper>
               <Box  >
                  <button style={{border:'none', borderRadius:'10px'}}><MonetizationOnOutlinedIcon style={{fontSize:40, cursor: "hand", color: '#1BE619'}} /> </button>
                  <Typography variant="h5" fontWeight='bolder'>Cost Optimazation</Typography>
                  <Typography variant="h6" color='#85B786'>Get recomendations to reduce costs  
                   and identify unused subscriptions.</Typography>
              </Box>
            </StyledPaper>
            </div>  
      </Container>
    </div>
  )
}

export default SecondPage
