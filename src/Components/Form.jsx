import React, {useState} from 'react'
import {styled, Paper, Box,TextField, MenuItem } from '@mui/material';
import {useNavigate } from 'react-router'
import axios from 'axios';


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
  const [serviceName, setServiceName] = useState('');
  const [amount, setAmount] = useState('');
  const [period, setPeriod] = useState('');
  const [startDate, setStartDate] = useState('');
  const [status, setStatus] = useState('active');
  const [payment, setPayment] = useState('');
  const [error, setError] = useState('')
  
  const navigate = useNavigate();
  const handleHomeInClick = () => {navigate('/')}

  const handleNewSubscription = async (e) => {
    e.preventDefault();
     
    try {        
        const response = await axios.post('https://zafrino-5e5b8bdb623d.herokuapp.com/api/subscription', {
           serviceName, amount, period, startDate, status, payment           
                });
        console.log('New subscription successful!', response.data);
        navigate('/subscription');
        setServiceName('');
        setAmount('');
        setPeriod('');
        setStartDate('');
        setStatus('Inactive');
        setPayment('');
        } catch (error) {
        console.error('Error creating new subscription:', error.response ? error.response.data: error.message);
            setError('Error! Please try again.');
        }
    };

   const handleCancel = (e) => {
    e.preventDefault();
        
    setServiceName('');
    setAmount('');
    setPeriod('');
    setStartDate('');
    setStatus('Inactive');
    setPayment('');
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
                        placeholder='Enter service name'
                        variant="outlined" 
                        value={serviceName} 
                        onChange={(e) => setServiceName(e.target.value)} 
                        required
                    />

                </Box>
                <Box marginBottom={3}>
                <div style={{paddingBottom:'10px', fontWeight:'bolder'}}> Amount</div> 
                    <TextField 
                        fullWidth 
                        placeholder= '$0.00'
                        variant="outlined" 
                        type="number"
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)} 
                        required
                    />
                </Box>
                <Box marginBottom={3}>
                <div style={{paddingBottom:'10px', fontWeight:'bolder'}}>Period</div> 
                    <TextField select
                        fullWidth 
                        variant="outlined" 
                        value={period} 
                        onChange={(e) => setPeriod(e.target.value)} 
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
                        placeholder='mm/dd/yy'
                        variant="outlined" 
                        type="date"
                        value={startDate} 
                        onChange={(e) => setStartDate(e.target.value)} 
                        required
                    />
                </Box>
                <Box marginBottom={3}>
                <div style={{paddingBottom:'10px', fontWeight:'bolder'}}> Status</div> 
                    <TextField 
                    select
                        fullWidth 
                        variant="outlined" 
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        required
                    >
                        <MenuItem value='active'>Active</MenuItem>
                        <MenuItem value='inactive'>Inactive</MenuItem>
                        </TextField>    
                </Box>
                <Box marginBottom={3}>
                <div style={{paddingBottom:'10px', fontWeight:'bolder'}}> Last 4 Digits</div> 
                    <TextField 
                        fullWidth 
                        placeholder='Enter last 4 digits'
                        variant="outlined" 
                        type="number"
                        value={payment} 
                        onChange={(e) => setPayment(e.target.value)} 
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
