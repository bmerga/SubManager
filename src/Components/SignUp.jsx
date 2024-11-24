import React, {useState} from 'react';
import { Paper, Box, styled, TextField} from '@mui/material';
import { useNavigate } from 'react-router';
import { publicApi } from './api/publicApi';
import CONSTANTS from '../constants';
import { toast } from 'react-toastify';

const StyledPaper = styled(Paper)(({ theme }) => ({
    
 }));

function SignUp() {
    const initData = {
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
    };

    const [signUpData, setSignUpData] = useState(initData);
    
    const navigate = useNavigate();

    const handleHomeInClick = () => {navigate('/')}
    const handleAboutUsClick = () => {navigate('/aboutus')}
    const handleSignInClick = () => {navigate('/signin')}
    const handleSignUpClick = () => {navigate('/signup')}

    const handleChange = (e) => {
        setSignUpData({...signUpData, [e.target.name]: e.target.value})
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {        
           await publicApi.post(CONSTANTS.SIGN_UP_PATH, signUpData);
           toast('Succesfull!')
           setSignUpData(initData);
           navigate("/signin")
            } catch (error) {
           toast(error.message);
            }
        };
    
     
  return (
    <div>
       <nav style={{display:'flex', flexDirection:'row', gap:'60%'}}>
          <p><button onClick={handleHomeInClick} style={{paddingLeft:'45px', border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder'}}> Acme Subscription Manager</button></p>
          <div style={{display:'flex', justifyContent:'flex-end',  gap:'20px'}}>
             <button onClick={handleAboutUsClick} style={{  border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder'}}> About Us</button>
             <button onClick={handleSignInClick} style={{ border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder'}}> Sign In</button>
             <button onClick={handleSignUpClick} style={{ borderRadius:'8px', background: '#1BE619', width: '95px', height: '45px', border: 'none', cursor:'pointer', fontWeight:'bolder'}}> Start Free</button>
          </div>
       </nav> 
       <div>
          <StyledPaper style={{ padding: '20px', width: '30%', margin: 'auto' }}>
             <form onSubmit={handleSubmit} >
                <Box paddingBottom={2}>
                <div style={{paddingBottom:'10px', fontWeight:'bolder', borderRadius:'50'}}> First Name</div> 
                   <TextField 
                      fullWidth 
                      id='firstname'
                      name='firstname'
                      placeholder='Enter your first name'
                      value={signUpData.firstname} 
                      onChange={handleChange}
                      required 
                    />
                </Box>
                <Box marginBottom={2}>
                <div style={{paddingBottom:'10px', fontWeight:'bolder'}}> Last Name</div> 
                    <TextField 
                        fullWidth 
                        id='lastname'
                        name='lastname'
                        placeholder='Enter your last name'
                        value={signUpData.lastname} 
                        onChange={handleChange} 
                        required
                    />
                </Box>
                <Box marginBottom={2}>
                <div style={{paddingBottom:'10px', fontWeight:'bolder'}}> Email</div> 
                    <TextField 
                        fullWidth 
                        id='email'
                        name='email'
                        type="email"
                        placeholder='Enter your email'
                        value={signUpData.email} 
                        onChange={handleChange} 
                        required
                    />
                </Box>
                <Box marginBottom={2}>
                <div style={{paddingBottom:'10px', fontWeight:'bolder'}}> Username</div> 
                    <TextField 
                        fullWidth 
                        id='username'
                        name='username'
                        placeholder='Enter your username'
                        value={signUpData.username} 
                        onChange={handleChange} 
                        required
                    />
                </Box>
                <Box marginBottom={2}>
                <div style={{paddingBottom:'10px', fontWeight:'bolder'}}> Password</div> 
                    <TextField 
                        fullWidth 
                        id='password'
                        name='password'
                        type="password"
                        // inputProps={{ minLength: 8 }}
                        placeholder='Create a password'
                        value={signUpData.password} 
                        onChange={handleChange} 
                        required
                    />
                    <p> Password must be at least 8 characters</p>
                </Box>
                <button style={{ background:'#1BE619', width:'100%', height:'45px', fontWeight:'bolder', border:'none', borderRadius:'8px', cursor:'pointer'}}  type="submit" >Create Account</button>
            </form>
            <div style={{ marginTop: '10px', textAlign:'center' }}>
                Already have an account? <button onClick={handleSignInClick} style={{border:'none', cursor:'pointer', fontWeight:'bolder'}}>Sign In</button>
            </div>
        </StyledPaper>
        </div> 
    </div>
  )
}

export default SignUp
