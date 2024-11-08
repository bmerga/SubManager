import React, {useState} from 'react';
import { Paper, Box, styled, TextField} from '@mui/material';
import { useNavigate } from 'react-router';
import axios from 'axios';

const StyledPaper = styled(Paper)(({ theme }) => ({
    
 }));

function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleHomeInClick = () => {navigate('/')}
    const handleAboutUsClick = () => {navigate('/aboutus')}
    const handleSignInClick = () => {navigate('/signin')}
    const handleSignUpClick = () => {navigate('/signup')}

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (password.length < 8) {
            setError('Password must be at least 8 characters long.');
            return;
        }
        try {        
            const response = await axios.post('https://zafrino-5e5b8bdb623d.herokuapp.com/api/auth/local/register', {
                firstName,
                lastName,
                email,
                username,
                password
               });
            console.log('Registration successful!', response.data);
            navigate('/signin');
            setFirstName('');
            setLastName('');
            setEmail('');
            setUsername('');
            setPassword('');
            } catch (error) {
            console.error('Error signing up:', error.response ? error.response.data: error.message);
                setError('Error! Please try again.');
            }
        };
    
     
  return (
    <div>
       <div style={{display:'flex', flexDirection:'row', gap:'60%'}}>
          <p><button onClick={handleHomeInClick} style={{paddingLeft:'45px', border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder'}}> Acme Subscription Manager</button></p>
          <div style={{display:'flex', justifyContent:'flex-end',  gap:'20px'}}>
             <button onClick={handleAboutUsClick} style={{  border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder'}}> About Us</button>
             <button onClick={handleSignInClick} style={{ border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder'}}> Sign In</button>
             <button onClick={handleSignUpClick} style={{ borderRadius:'8px', background: '#1BE619', width: '95px', height: '45px', border: 'none', cursor:'pointer', fontWeight:'bolder'}}> Sign Up</button>
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
                      value={firstName} 
                      onChange={(e) => setFirstName(e.target.value)}
                      required 
                    />
                </Box>
                <Box marginBottom={2}>
                <div style={{paddingBottom:'10px', fontWeight:'bolder'}}> Last Name</div> 
                    <TextField 
                        fullWidth 
                        placeholder='Enter your last name'
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                        required
                    />
                </Box>
                <Box marginBottom={2}>
                <div style={{paddingBottom:'10px', fontWeight:'bolder'}}> Email</div> 
                    <TextField 
                        fullWidth 
                        placeholder='Enter your email'
                        type="email"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                    />
                </Box>
                <Box marginBottom={2}>
                <div style={{paddingBottom:'10px', fontWeight:'bolder'}}> Username</div> 
                    <TextField 
                        fullWidth 
                        placeholder='Enter your username'
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required
                    />
                </Box>
                <Box marginBottom={2}>
                <div style={{paddingBottom:'10px', fontWeight:'bolder'}}> Password</div> 
                    <TextField 
                        fullWidth 
                        placeholder='Create a password'
                        type="password"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required
                    />
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
