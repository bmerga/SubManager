import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios';

function Subscription() {
   const [activeSubscriptions, setActiveSubscriptions] = useState([]);
   const [inActiveSubscriptions, setInActiveSubscriptions] = useState([]);
   const [error, setError] = useState('');
   
   const navigate = useNavigate();

   useEffect(() => {
      const fetchSubscriptions = async () => {
         try { 
            const response = await axios.get('https://zafrino-5e5b8bdb623d.herokuapp.com/api/subscriptions');
            console.log('Response data:', response.data)
            const subscriptions = response.data.data;
            const active =subscriptions.filter(sub => sub.attributes.status.toLowerCase() ==='active');
            const inactive = subscriptions.filter(sub => sub.attributes.status.toLowerCase() ==='inactive');
            setActiveSubscriptions(active);
            setInActiveSubscriptions(inactive);
            }
         catch (error) {
            console.error('Error fetching active subscription:', error.response ? error.response.data : error.message);
            setError('Error! Please try again.');
               }
      };
         fetchSubscriptions();
         }, []);

   const handleHomeInClick = () => {navigate('/')};
   const handleSubscriptionsClick = () => {navigate('/form')}
   const handleAboutUsClick = () => {navigate('/aboutus')}
   const handleSignOutClick = () => {navigate('/signin')}
   const handleNewSubscription = () => {navigate('/form')}      

   const handleEditSubscription = async(id) => {
      try {
         const response = await axios.get(`https://zafrino-5e5b8bdb623d.herokuapp.com/api/subscriptions/${id}`)
         navigate('/form', {state: {subscription: response.data}})
      } catch (error) {
         console.error ('Error fetching edit form:', error.response? error.response.data: error.message)
         setError('Error! Please try again!')
         }
            }
   const handleDeleteSubscription = async(id) => {
      try {
         await axios.delete(`https://zafrino-5e5b8bdb623d.herokuapp.com/api/subscriptions/${id}`)
         const updatedActiveSubscription = activeSubscriptions.filter(sub => sub.id !==id);
         setActiveSubscriptions(updatedActiveSubscription);
      } catch (error) {
         console.error('Error deleting subscription:', error.response ? error.response.data : error.message);
         setError('Error! Please try again.');
         }
             
  
};
  return (
    <div>
      <nav 
         style={{display:'flex', flexDirection:'row', gap:'59%'}}>
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
         </div>
      </nav>
      
      <div>
         <h3 style={{paddingLeft:'7%', paddingTop:'3%'}}>Active subscriptions</h3>
         <table  style={{paddingLeft:'4%', width:'90%'}}> 
            <thead>
               <tr>
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
            <tbody>
               {activeSubscriptions.map((subscription, index) => (
                  <tr key={subscription.id}>
                     <td>{index + 1}</td>
                     <td>{subscription.serviceName}</td>
                     <td>${subscription.amount}</td>
                     <td>{subscription.period}</td>
                     <td>{subscription.nextBilling}</td>
                     <td>{subscription.status}</td>
                     <td>{subscription.payment}</td>
                     <td> 
                        <button onClick={()=> handleEditSubscription(subscription.id)}> Edit</button>
                        <button onClick={()=>handleDeleteSubscription(subscription.id)}>Delete</button>
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
                     <td>{subscription.serviceName}</td>
                     <td>${subscription.amount}</td>
                     <td>{subscription.period}</td>
                     <td>{subscription.nextBilling}</td>
                     <td>{subscription.status}</td>
                     <td>{subscription.payment}</td>
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
