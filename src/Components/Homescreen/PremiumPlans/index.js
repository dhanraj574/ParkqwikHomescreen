import React from 'react'
import './index.css'

const PremiumPlans = () => {
  return (
    <div className='premiumplans-cont'>
        <h2>Premium Plans</h2>
        <ul>
            <li>
                <h3>Monthly Parking</h3>
                <p className='premiumplans-text'>Dedicated parking available near you.</p>
                <div>
                    <p className='premiumplans-btntext'>Explore Now</p>
                    <img className="premiumplans-arrow" src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1729171111/arrow_right_alt_1_mzkxlw.png" alt="arrow" />
                </div>
                <img className="premiumplans-icon-1" src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1729086603/Group_465_rfzvlj.png" alt="parking icon"/>
            </li>
            <li>
                <h3>Elite Car Wash </h3>
                <p className='premiumplans-text'>Elite car grooming at your doorstep.</p>
                <div>
                <p className='premiumplans-btntext'>Explore Now</p>
                <img className="premiumplans-arrow" src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1729171111/arrow_right_alt_1_mzkxlw.png" alt="arrow" />
                </div>
                <img className="premiumplans-icon-2" src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1729086603/Group_466_hxhm4q.png" alt="car wash icon"/>
            </li>
        </ul>
    </div>
  )
}

export default PremiumPlans