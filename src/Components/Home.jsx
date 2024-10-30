import React from 'react'
import '../App.css'
function Home() {
  return (
    <div className='container'>
        <div className='home-first-page'>
           <div className='TCYDS'>
              <h1 className='Take-control'> Take Control of Your Digital Subscriptions</h1>
              <p className='Track'> Track, manage, and optimize all your Subscriptions in one place. 
                Save money and never miss a payment again</p>
              <div className='get-learn-button-container'>
                 <button className='get-started'> Get Started Free</button>
                 <button className='learn-more'>Learn More</button>
              </div>
             
              <p className='no-credit-card'> No credit card required. Free 14-day trial</p>
           </div>
           <div className='active-subscrption'>
              <div className='active-subscription-month'> <p>Active subscrption</p> <p>$84.00/month</p></div> 
              <div className='Netflix'> <button className='Netflix-button'>Netflix Monthly</button>$12.00</div>
              <div className='Spotify'> <button className='Spotify-button'>Spotify Monthly</button>$9.99</div>
              <div className='Amazon-prime'> <button className='Amazon-prime-button'>Amazon Prime Monthly</button>$139</div>
           </div>
        </div>
            
    </div>
  )
}
    


export default Home
