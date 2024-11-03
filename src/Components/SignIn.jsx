import React, {useState} from 'react';
import { Paper, Box, styled, TextField} from '@mui/material';
import { Check, CheckBox, CheckBoxOutlineBlank, CheckBoxOutlineBlankOutlined, CheckBoxOutlineBlankSharp, CheckBoxRounded, CheckCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1), 
    backgroundColor: theme.palette.background.paper, 
    boxShadow: theme.shadows[3], 
 }));

function SignIn() {
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
    const navigate = useNavigate();
    const handleHomeInClick = () => {
        navigate('/')
     }
    const handleAboutUsClick = () => {
      navigate('/aboutus')
      }
    const handleSignInClick = () => {
      navigate('/signin')
    }
    const handleSignUpClick = () => {
      navigate('/signup')
   }
  return (
    <div>
       <div>
       <div style={{display:'flex', flexDirection:'row', gap:'62%'}}>
       <p><button onClick={handleHomeInClick} style={{paddingLeft:'45px', border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder'}}> Acme Subscription Manager</button></p>
       <div style={{display:'flex', justifyContent:'flex-end', gap:'10px'}}>
          <button onClick={handleAboutUsClick} style={{  border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder'}}> About Us</button>
          <button onClick={handleSignInClick} style={{  border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder' }}> Sign In</button>
          <button onClick={handleSignUpClick} style={{ width: '95px', height: '45px', borderRadius:'8px',border: 'none', background: '#1BE619', cursor:'pointer', fontSize:'15px', fontWeight:'bolder'}}> Start Free</button>
      </div>
      </div>
        </div> 
        <div style={{textAlign:'center', padding:'19px'}}>
            <div style={{fontSize:'28px', fontWeight:'bolder'}}>Sign in to your account</div>
            <p style={{fontSize:'18px'}}>Manage all your subscriptions in one place</p>
        </div>
        <div>
        <StyledPaper style={{ padding: '20px', width: '30%', margin: 'auto' }}>
            <form onSubmit={handleSubmit} >
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
                        placeholder='Enter your password'
                        variant="outlined" 
                        type="password"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </Box>
                <div> <CheckBoxOutlineBlankSharp/>Remember me</div>
                <button style={{ 
                    background:'#1BE619', 
                    width:'100%', 
                    height:'45px', 
                    fontWeight:'bolder', 
                    border:'none', 
                    borderRadius:'8px', 
                    cursor:'pointer'}}  
                    type="submit" >
                    Sign In
                </button>
            </form>
            <div style={{ 
                marginTop: '10px', 
                textAlign:'center' }}>
                Don't have an account? 
                <button onClick={handleSignUpClick} style={{
                    border:'none', 
                    cursor:'pointer', 
                    fontWeight:'bolder'}}>
                        Sign Up
                </button>
            </div>
        </StyledPaper>
        </div> 
    </div>
  )
}

export default SignIn

