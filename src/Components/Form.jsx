import React, {useEffect, useState} from 'react'
import {styled, Paper, Box,TextField, MenuItem } from '@mui/material';
import {useLocation, useNavigate} from 'react-router'
import { authApi } from './api/authApi';
import CONSTANTS from '../constants';
import { toast } from 'react-toastify';


const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: theme.shadows[3],
}));

function Form() {
    const initData = {
        service: "",
        period: "",
        amount: "",
        status: "",
        userEmail: "",
        last_four_digits: "",
        start_date: ""
            }; 
const [subscriptionData, setSubscriptionData] = useState(initData);
    
const navigate = useNavigate();
const location = useLocation();

useEffect(() => {
    if (location.state && location.state.subscription) {
        setSubscriptionData(location.state.subscription);
    }
}, [location.state]);

const handleChange = (e) => {
setSubscriptionData({...subscriptionData, [e.target.name]: e.target.value})
}; 

const handleHomeInClick = () => {navigate('/')}

const handleNewSubscription = async (e) => {
    e.preventDefault();
    try {   
        if (subscriptionData.id) {
            const response = await authApi.put(`${CONSTANTS.SUBSCRIPTIONS_PATH}/${subscriptionData.id}`, 
                { data: subscriptionData });
                toast("Updated")
        }   else {
            const response = await authApi.post(CONSTANTS.SUBSCRIPTIONS_PATH, {data: subscriptionData});
        toast("Sucessfull!")
        }        
        navigate('/subscription');
        setSubscriptionData(initData);
        } catch (error) {
        toast(error.message)
        }
    };

   const handleCancel = (e) => {
    e.preventDefault();
    setSubscriptionData(initData);
};

return (
    <div>
        <nav style={{display:'flex', flexDirection:'row', gap:'62%'}}>
          <button onClick={handleHomeInClick} 
          style={{paddingLeft:'45px', border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder'}}> 
          Acme Subscription Manager</button>
        </nav>
       <div style={{padding:'10px'}}>
        <StyledPaper sx={{width: '60%', margin: '0 auto', borderRadius:'15px'}} >
            <form onSubmit={handleNewSubscription} style={{width: '90%', textAlign:'left'}}>
                <Box paddingBottom={3} >
                <div style={{paddingBottom:'10px', fontWeight:'bolder'}}> Service</div> 
                    <TextField      
                    sx={{borderRadius:'15px'}}                                    
                        fullWidth 
                        name='service'
                        placeholder='Enter service name'
                        variant="outlined" 
                        value={subscriptionData.service} //For unidirectional data flow
                        onChange={handleChange} 
                        required
                    />

                </Box>
                <Box marginBottom={3}>
                <div style={{paddingBottom:'10px', fontWeight:'bolder'}}> Amount</div> 
                    <TextField 
                        fullWidth 
                        name='amount'
                        placeholder= '$0.00'
                        variant="outlined" 
                        type="number"
                        value={subscriptionData.amount} 
                        onChange={handleChange} 
                        required
                    />
                </Box>
                <Box marginBottom={3}>
                <div style={{paddingBottom:'10px', fontWeight:'bolder'}}>Period</div> 
                    <TextField select
                        fullWidth 
                        name='period'
                        variant="outlined" 
                        value={subscriptionData.period} 
                        onChange={handleChange} 
                        required
                        >
                        <MenuItem value='monthly'>Monthly</MenuItem>
                        <MenuItem value='yearly'>Yearly</MenuItem>
                    </TextField>
                
                </Box>
                <Box marginBottom={3}>
                <div style={{paddingBottom:'10px', fontWeight:'bolder'}}>Start date</div> 
                    <TextField 
                        fullWidth 
                        name='start_date'
                        placeholder='mm/dd/yy'
                        variant="outlined" 
                        type="date"
                        value={subscriptionData.start_date} 
                        onChange={handleChange} 
                        required
                    />
                </Box>
                <Box marginBottom={3}>
                <div style={{paddingBottom:'10px', fontWeight:'bolder'}}> Status</div> 
                    <TextField 
                    select
                        fullWidth 
                        name='status'
                        variant="outlined" 
                        value={subscriptionData.status}
                        onChange={handleChange}
                        required
                    >
                        <MenuItem value='active'>Active</MenuItem>
                        <MenuItem value='inactive'>Inactive</MenuItem>
                        </TextField>    
                </Box>
                <Box marginBottom={3}>
                <div style={{paddingBottom:'10px', fontWeight:'bolder'}}> Email</div> 
                    <TextField 
                        fullWidth 
                        name='userEmail'
                        placeholder= 'Enter your Email'
                        variant="outlined" 
                        type="email"
                        value={subscriptionData.userEmail} 
                        onChange={handleChange} 
                        required
                    />
                </Box>
                <Box marginBottom={3}>
                <div style={{paddingBottom:'10px', fontWeight:'bolder'}}> Last 4 Digits</div> 
                    <TextField 
                        fullWidth 
                        name='last_four_digits'
                        placeholder='Enter last 4 digits'
                        variant="outlined" 
                        type="number"
                        value={subscriptionData.last_four_digits} 
                        onChange={handleChange} 
                        required
                    />
                </Box>
                <div style={{display:'flex', gap:'30px'}}> 
                   <button style={{ background:'#1BE619', width:'100%', height:'45px', fontWeight:'bolder', border:'none', borderRadius:'8px', cursor:'pointer'}}  type="submit" >Add Subscription</button>
                   <button onClick={handleCancel} style={{ background:'#1BE619', width:'100%', height:'45px', fontWeight:'bolder', border:'none', borderRadius:'8px', cursor:'pointer'}}  type="button" >Cancel</button>
                </div>
            </form>
        </StyledPaper>
        </div> 
    </div>
  )
  
}

export default Form;
