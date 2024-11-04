import React, {useState} from 'react'
import { styled, Paper, Box,TextField } from '@mui/material';
import { useNavigate } from 'react-router'


const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1), 
  backgroundColor: theme.palette.background.paper, 
  boxShadow: theme.shadows[3], 
}));

function NewSubscription() {
  const [serviceName, setServiceName] = useState('');
  const [amount, setAmount] = useState('');
  const [startDate, setStartDate] = useState('');
  const [status, setStatus] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
         onSubmit({ serviceName, amount, startDate, status, cardNumber});
      
         setServiceName('');
         setAmount('');
         setStartDate('');
         setStatus('');
         setCardNumber(''); 
  };
  const handleCancel = (e) => {
    e.preventDefault();
       onSubmit({ serviceName, amount, startDate, status, cardNumber});
    
       setServiceName('');
       setAmount('');
       setStartDate('');
       setStatus('');
       setCardNumber(''); 
};

    const navigate = useNavigate();

  return (
    <div>
       <div style={{padding:'60px'}}>
        <StyledPaper sx={{width: '60%', margin: '0 auto'}} >
            <form>
                <Box paddingBottom={3}>
                <div style={{paddingBottom:'10px', fontWeight:'bolder'}}> Service</div> 
                    <TextField 
                        fullWidth 
                        placeholder='Enter service name'
                        variant="outlined" 
                        value={serviceName} 
                        onChange={(e) => setServiceName(e.target.value)} 
                    />

                </Box>
                <Box marginBottom={3}>
                <div style={{paddingBottom:'10px', fontWeight:'bolder'}}> Amount</div> 
                    <TextField 
                        fullWidth 
                        placeholder='$0.00'
                        variant="outlined" 
                        value={setAmount} 
                        onChange={(e) => setAmount(e.target.value)} 
                    />
                </Box>
                <Box marginBottom={3}>
                <div style={{paddingBottom:'10px', fontWeight:'bolder'}}>Start Date</div> 
                    <TextField 
                        fullWidth 
                        placeholder='mm/dd/yy'
                        variant="outlined" 
                        type="email"
                        value={startDate} 
                        onChange={(e) => setStartDate(e.target.value)} 
                    />
                </Box>
                <Box marginBottom={3}>
                <div style={{paddingBottom:'10px', fontWeight:'bolder'}}> Status</div> 
                    <TextField 
                        fullWidth 
                        placeholder='Active'
                        variant="outlined" 
                        type="status"
                        value={status} 
                        onChange={(e) => setStatus(e.target.value)} 
                    />
                </Box>
                <Box marginBottom={3}>
                <div style={{paddingBottom:'10px', fontWeight:'bolder'}}> Last 4 Digits</div> 
                    <TextField 
                        fullWidth 
                        placeholder='Enter last 4 digits'
                        variant="outlined" 
                        type="cardNumber"
                        value={cardNumber} 
                        onChange={(e) => setCardNumber(e.target.value)} 
                    />
                </Box>
                <div style={{display:'flex', gap:'30px'}}> 
                   <button onClick={handleSubmit} style={{ background:'#1BE619', width:'100%', height:'45px', fontWeight:'bolder', border:'none', borderRadius:'8px', cursor:'pointer'}}  type="submit" >Add Subscription</button>
                   <button onClick={handleCancel} style={{ background:'#1BE619', width:'100%', height:'45px', fontWeight:'bolder', border:'none', borderRadius:'8px', cursor:'pointer'}}  type="submit" >Cancel</button>
                </div>
            </form>
        </StyledPaper>
        </div> 
    </div>
  )
  
}

export default NewSubscription;
