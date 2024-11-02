import React, {useState} from 'react';
import { Paper, Box, styled, TextField} from '@mui/material';
const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1), 
    backgroundColor: theme.palette.background.paper, 
    boxShadow: theme.shadows[3], 
 }));

function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
           if (password.length < 8) {
            setError('Password must be at least 8 characters long.');
            return;
        }
        // Call the onSubmit prop with form data
        onSubmit({ firstName, lastName, email, password });
        
        // Reset form fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setError(''); // Clear any previous error messages 
    };
    
  return (
    <div>
       <div>
           <div style={{display:'flex', justifyContent:'flex-end', padding:'15px', gap:'20px'}}>
              <button style={{ border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder'}}> Sign In</button>
              <button style={{ borderRadius:'8px', background: '#1BE619', width: '95px', height: '45px', border: 'none', cursor:'pointer', fontWeight:'bolder'}}> Sign Up</button>
          </div>
        </div> 
        <div>
        <StyledPaper style={{ padding: '20px', width: '30%', margin: 'auto' }}>
            <form onSubmit={handleSubmit} >
                <Box paddingBottom={2}>
                <div style={{paddingBottom:'10px', fontWeight:'bolder', borderRadius:'50'}}> First Name</div> 
                    <TextField 
                        fullWidth 
                        placeholder='Enter your first name'
                        variant="outlined" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} 
                    />
                </Box>
                <Box marginBottom={2}>
                <div style={{paddingBottom:'10px', fontWeight:'bolder'}}> Last Name</div> 
                    <TextField 
                        fullWidth 
                        placeholder='Enter your last name'
                        variant="outlined" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                    />
                </Box>
                <Box marginBottom={2}>
                <div style={{paddingBottom:'10px', fontWeight:'bolder'}}> Email</div> 
                    <TextField 
                        fullWidth 
                        placeholder='Enter your email'
                        variant="outlined" 
                        type="email"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </Box>
                <Box marginBottom={2}>
                <div style={{paddingBottom:'10px', fontWeight:'bolder'}}> Password</div> 
                    <TextField 
                        fullWidth 
                        placeholder='Create a password'
                        variant="outlined" 
                        type="password"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </Box>
                <button style={{ background:'#1BE619', width:'100%', height:'45px', fontWeight:'bolder', border:'none', borderRadius:'8px', cursor:'pointer'}}  type="submit" >Create Account</button>
            </form>
            <div style={{ marginTop: '10px', textAlign:'center' }}>
                Already have an account? <button style={{border:'none', cursor:'pointer', fontWeight:'bolder'}}>Sign In</button>
            </div>
        </StyledPaper>
        </div> 
    </div>
  )
}

export default SignUp
