import React, {createContext, useState} from 'react'
import { Box, Typography } from '@mui/material';

export const FooterContext = createContext();

export const FooterProvider = ({children}) => {
       const [footerContent] = useState(
        <Box sx={{padding: '40px', textAlign: 'center'}}>
        <div style={{display:'flex',gap:'22%'}}> 
           <div style={{textAlign:'justify'}}>
              <div style={{fontWeight:'bolder'}}> Company</div> 
                 <div style={{color:'#91BC8F'}}>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Press</p>
                 </div>
           </div>
           <div style={{textAlign:'justify'}}>
              <div style={{fontWeight:'bolder'}}> Product</div> 
                 <div style={{color:'#91BC8F'}}>
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Security</p>
                 </div>
           </div>
           <div style={{textAlign:'justify'}}>
              <div style={{fontWeight:'bolder'}}> Resources</div> 
                 <div style={{color:'#91BC8F'}}>
                    <p>Blog</p>
                    <p>Help Center</p>
                    <p>Contact</p>
                 </div>
           </div>
           <div style={{textAlign:'justify'}}>
              <div style={{fontWeight:'bolder'}}> Legal</div> 
                 <div style={{color:'#91BC8F'}}>
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Cookie Policy</p>
                 </div>
           </div>
        </div>                 
        <Typography variant="body2" color="text.secondary">
             &copy; {new Date().getFullYear()} Acme Subscription Manager. All rights reserved.
         </Typography>
         
     </Box>
    )


  return (
    <FooterContext.Provider value={{footerContent}}>
      {children}
    </FooterContext.Provider>
  )
}


