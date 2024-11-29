import React, {useState} from 'react';
import { Paper, Box, styled, TextField, Typography, Container, Checkbox, FormControlLabel} from '@mui/material';
import { useNavigate } from 'react-router';
import { publicApi } from './api/publicApi';
import CONSTANTS from '../constants';
import { toast } from 'react-toastify';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    margin: 'auto',
    width: '40%',
    [theme.breakpoints.down('sm')]: {
        width: '90%',
    },
 }));

function SignIn() {
    const initData = {
        email: "",
        password: ""
    }

    const [signInData, setSignInData] = useState(initData);        
    const navigate = useNavigate();

    const handleChange = (e) => {
        setSignInData({...signInData, [e.target.name]: e.target.value})
    }

    const handleHomeInClick = () => {navigate('/')}
    const handleAboutUsClick = () => {navigate('/aboutus')}
    const handleSignInClick = () => {navigate('/signin')}
    const handleSignUpClick = () => {navigate('/signup')}

    const handleSubmit = async (e) => {
       e.preventDefault();
       try {
          const response = await publicApi.post(CONSTANTS.SIGN_IN_PATH, signInData)
          toast('Succesfull!')
          localStorage.setItem("acme_jwt", response.data.jwt);
          localStorage.setItem("userEmail", response.data.user.email);
          navigate("/form")
          
        } catch (error) {
            toast(error.message);
        }
    };
            
    
  return (
    <Container>
       <nav>
          <div sx={{display:'flex', flexDirection:'row', gap:'62%'}}>
             <Typography><button onClick={handleHomeInClick} style={{paddingLeft:'45px', border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder'}}> Acme Subscription Manager</button></Typography>
             <Typography sx={{display:'flex', justifyContent:'flex-end', gap:'10px'}}>
                <button onClick={handleAboutUsClick} style={{  border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder'}}> About Us</button>
                <button onClick={handleSignInClick} style={{  border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder' }}> Sign In</button>
                <button onClick={handleSignUpClick} style={{ borderRadius:'8px', background: '#1BE619', width: '95px', height: '45px', border: 'none', cursor:'pointer', fontWeight:'bolder'}}> Start Free</button>
            </Typography>
          </div>
       </nav> 
       <Box sx={{marginBottom:'3%'}}>
          <Typography sx={{textAlign:'center', fontSize:'36px', fontWeight:'bolder'}}>Sign in to your account</Typography>
          <Typography sx={{textAlign:'center', fontSize:'16px', color:'#1BE619'}}>Manage all your subscriptions in one place</Typography>
       </Box>
        
        
        <StyledPaper elevation={3} >
            <form onSubmit={handleSubmit} >
                <Box marginBottom={4}>
                   <TextField 
                        label = "Email"
                        fullWidth 
                        placeholder='Enter your Email'
                        type="email"
                        name='email'
                        variant="outlined" 
                        value={signInData.email} 
                        onChange={handleChange} 
                        required
                    />
                </Box>
                <Box marginBottom={4}>
                <Typography sx={{display:'flex', gap:'50%'}}>
                    <button style={{paddingBottom:'10px', fontWeight:'bolder', color: '#85B786', border:'none', cursor:'pointer'}}> Forgot Password?</button> 
                </Typography>
                
                    <TextField 
                        label= "Password"
                        fullWidth 
                        placeholder='Enter your password'
                        variant="outlined" 
                        type="password"
                        name='password'
                        value={signInData.password} 
                        onChange={handleChange} 
                        required
                    />
                </Box>
                <label >
                    <input type="checkbox" style={{marginBottom:'5%'}}/>      
                    Remember Me
                </label>  
                          
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
            <Typography style={{ 
                marginTop: '5%', 
                textAlign:'center' }}>
                Don't have an account? 
                <button onClick={handleSignUpClick} style={{
                    border:'none', 
                    cursor:'pointer', 
                    fontWeight:'bolder'}}>
                        Sign Up
                </button>
            </Typography>
        </StyledPaper>
        </Container> 
    
  )
}

export default SignIn

