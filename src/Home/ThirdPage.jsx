import React from 'react'
import '../App.css'
import {Container, Typography, Box, styled, Paper} from '@mui/material'
import StarIcon from '@mui/icons-material/Star';

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

function ThirdPage() {
  return (
    <div>
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
  )
}

export default ThirdPage
