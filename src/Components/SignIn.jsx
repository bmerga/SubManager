import React, {useState} from 'react';
import { Paper, Box, styled, TextField} from '@mui/material';
import { useNavigate } from 'react-router';
import { publicApi } from './api/publicApi';
import CONSTANTS from '../constants';
import { toast } from 'react-toastify';

const StyledPaper = styled(Paper)(({ theme }) => ({
   
 }));

function SignIn() {
    const initData = {
        identifier: "",
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
          navigate("/subscription")
          
        } catch (error) {
            toast(error.message);
        }
    };
            
    
  return (
    <div>
       <nav>
       <div style={{display:'flex', flexDirection:'row', gap:'62%'}}>
       <p><button onClick={handleHomeInClick} style={{paddingLeft:'45px', border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder'}}> Acme Subscription Manager</button></p>
       <div style={{display:'flex', justifyContent:'flex-end', gap:'10px'}}>
          <button onClick={handleAboutUsClick} style={{  border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder'}}> About Us</button>
          <button onClick={handleSignInClick} style={{  border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder' }}> Sign In</button>
          <button onClick={handleSignUpClick} style={{ borderRadius:'8px', background: '#1BE619', width: '95px', height: '45px', border: 'none', cursor:'pointer', fontWeight:'bolder'}}> Start Free</button>
      </div>
      </div>
        </nav> 
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
                        placeholder='Enter your Email'
                        type="email"
                        name='identifier'
                        variant="outlined" 
                        value={signInData.identifier} 
                        onChange={handleChange} 
                    />
                </Box>
                <Box marginBottom={2}>
                <div style={{display:'flex', gap:'50%'}}>
                    <div style={{paddingBottom:'10px', fontWeight:'bolder'}}> Password</div> 
                    <button style={{paddingBottom:'10px', fontWeight:'bolder', color: '#85B786', border:'none', cursor:'pointer'}}> Forgot Password?</button> 
                </div>
                
                    <TextField 
                        fullWidth 
                        placeholder='Enter your password'
                        variant="outlined" 
                        type="password"
                        name='password'
                        value={signInData.password} 
                        onChange={handleChange} 
                    />
                </Box>
                {/* <div style={{display:'flex', alignItems:'center'}}> 
                <input
                    type='checkbox'
                    checked ={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}/>
                    Remember me
                    </div> */}
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

