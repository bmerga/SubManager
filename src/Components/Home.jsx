import React from 'react'
import '../App.css'
function Home() {
  return (
    <div className='container'>
        <div className='home-first-page'>
           <div className='TCYDS'>
              <h1 className='Take-control'> Take Control of Your Digital Subscriptions</h1>
              <p> Track, manage, and optimize all your Subscriptions in one place. 
                Save money and never miss a payment again</p>
              <button className='get-started'> Get Started Free</button>
              <button className='learn-more'>Learn More</button>
              <p className='no-credit-card'> No credit card required. Free 14-day trial</p>
           </div>
           <div className='active-subscrption'>
              <h6> Active subscrption</h6> <span> <h6>$84.00/month</h6></span>
              <div className='Netflix'> <button className='Netflix-button'>Netflix Monthly</button>$12.00</div>
              <div className='Spotify'> <button className='Spotify-button'>Spotify Monthly</button>$9.99</div>
              <div className='Amazon-prime'> <button className='Amazon-prime-button'>Amazon Prime Monthly</button>$139</div>
           </div>
        </div>
            
    </div>
  )
}
    


export default Home
