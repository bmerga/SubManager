import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { authApi } from './api/authApi';
import CONSTANTS from '../constants';
import { toast } from 'react-toastify';


function Subscription() {
   const [activeSubscriptions, setActiveSubscriptions] = useState([]);
   const [inActiveSubscriptions, setInActiveSubscriptions] = useState([]);
      
   const navigate = useNavigate();

   useEffect(() => {      
      fetchSubscriptions();
         }, []);
   const fetchSubscriptions = async () => {
      try { 
         const response = await authApi.get(CONSTANTS.SUBSCRIPTIONS_PATH); 
         const subscriptions = response.data.data.map((item) => ({ ...item.attributes, id: item.id }))
         // .map((data) => ({...data, nextBilling: calculateNextBillingDate(
         //     data.start_date, data.period, "'ll'" ),
         // })) 
         const active =subscriptions.filter(data => data.status ==='active'); 
         const inactive = subscriptions.filter(data => data.status ==='inactive');
         setActiveSubscriptions(active);
         setInActiveSubscriptions(inactive);
            }
         catch (error) {
            toast(error.message);
               }
            }
         

   const handleHomeInClick = () => {navigate('/')};
   const handleSubscriptionsClick = () => {navigate('/form')}
   const handleAboutUsClick = () => {navigate('/aboutus')}
   const handleSignOutClick = () => {navigate('/signin')}
   const handleNewSubscription = () => {navigate('/form')} 
   const handleProfileClick = () => {navigate('/profile')}     

   const handleEditSubscription = async(id) => {
      try {
         const response = await authApi.put(`${CONSTANTS.SUBSCRIPTIONS_PATH}/${id}`)
         navigate('/form', {state: {subscription: response.data}})
      } catch (error) {
         toast("error.message")
         }
            }
   const handleDeleteSubscription = async(id) => {
      try {
         await authApi.delete(`${CONSTANTS.SUBSCRIPTIONS_PATH}/${id}`)
         const updatedActiveSubscription = activeSubscriptions.filter(sub => sub.id !==id);
         setActiveSubscriptions(updatedActiveSubscription);
      } catch (error) {
         toast("error.message")
         }
      };
  

  return (
    <div>
      <nav 
         style={{display:'flex', flexDirection:'row', gap:'55%'}}>
            <button onClick={handleHomeInClick} 
            style={{paddingLeft:'4%', border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder'}}>
            Acme Subscription Manager
            </button>
         <div style={{display:'flex',marginRight:'3%'}}>
            <button onClick={handleSubscriptionsClick} 
            style={{border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder' }}>
            Subscriptions
            </button>
            <button onClick={handleSignOutClick} 
            style={{border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder' }}>
            Sign Out
            </button>
            <button onClick={handleAboutUsClick} 
            style={{border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder'}}> 
            About Us
            </button>
            <button style={{border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder' }}>
           <SearchOutlinedIcon/>
            </button>
            <button onClick={handleProfileClick} 
            style={{border: 'none', background: 'transparent' ,cursor:'pointer', fontWeight:'bolder'}}> 
            <AccountCircleRoundedIcon/>
            </button>
         </div>
      </nav>
      
      <div>
         <h3 style={{paddingLeft:'7%', paddingTop:'3%'}}>Active subscriptions</h3>
         <table  style={{ width: '80%', margin: '0 5%' }}> 
            <thead>
               <tr >
                  <th style={{width:'5%'}}>#</th>
                  <th style={{width:'15%'}}>Service</th>
                  <th style={{width:'10%'}}>Amount</th>
                  <th style={{width:'10%'}}>Period</th>
                  <th style={{width:'10%'}}>Next Billing</th>
                  <th style={{width:'10%'}}> Status</th>
                  <th style={{width:'10%'}}> Payment</th>
                  <th style={{width:'10%'}}>Actions</th>           
               </tr>
            </thead>
            <tbody >
               {activeSubscriptions.map((subscription, index) => (
                  <tr key={subscription.id} >
                     <td style={{textAlign:'center', paddingBottom:'2%'}}>{index + 1}</td>
                     <td style={{textAlign:'center'}}>{subscription.service}</td>
                     <td style={{textAlign:'center'}}>${subscription.amount}</td>
                     <td style={{textAlign:'center'}}>{subscription.period}</td>
                     <td style={{textAlign:'center'}}>{subscription.nextBilling}</td>
                     <td style={{textAlign:'center'}}>{subscription.status}</td>
                     <td style={{textAlign:'center'}}>{subscription.last_four_digits}</td>
                     <td style={{textAlign:'center'}}> 
                        <button onClick={()=> handleEditSubscription(subscription.id)}> Edit</button>
                        <button onClick={()=> handleDeleteSubscription(subscription.id)}>Delete</button>
                     </td>
                     
                  </tr>
               ))}
            </tbody>
         </table>
         <h3 style={{paddingLeft:'7%', paddingTop:'3%'}}>Inactive subscriptions</h3>
         <table  style={{paddingLeft:'4%', width:'90%'}}> 
            <thead>
               <tr>
                  <th style={{width:'5%'}}>#</th>
                  <th style={{width:'15%'}}>Service</th>
                  <th style={{width:'12%'}}>Last amount</th>
                  <th style={{width:'6%'}}>Period</th>
                  <th style={{width:'10%'}}>End Date</th>
                  <th style={{width:'10%'}}> Status</th>
                  <th style={{width:'10%'}}> Payment</th>
                  <th style={{width:'10%'}}>Actions</th>           
               </tr>
            </thead>
            <tbody>
               {inActiveSubscriptions.map((subscription, index) => (
                  <tr key={subscription.id}>
                     <td>{index + 1}</td>
                     <td>{subscription.service}</td>
                     <td>${subscription.amount}</td>
                     <td>{subscription.period}</td>
                     <td>{subscription.nextBilling}</td>
                     <td>{subscription.status}</td>
                     <td>{subscription.last_four_digits}</td>
                     <td> 
                        {/* <button onClick={handleReactivate}> Edit</button> */}
                     </td>
                     
                  </tr>
               ))}
            </tbody>
         </table>
        
                 
      </div>
      <button onClick={handleNewSubscription} style={{
                    background:'#1BE619', 
                    width:'15%', 
                    marginLeft: '75%',
                    height:'45px', 
                    fontWeight:'bolder', 
                    border:'none', 
                    borderRadius:'8px', 
                    cursor:'pointer'}}  
                    >
     + Add Subscription
      </button>
    </div>
  )
}

export default Subscription
