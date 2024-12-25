import React from 'react'
import './rechargebanners.css'

const RechargeBanners = () => {
  return (
    <div className='recharge-banners'>
         <ul>
            <li className='rechargebanners-list1'>
                <p className='rechargebanners-highlitedtext'>Get 15% off on <span className='rechargebanners-text-1'>FASTag recharge</span></p>
                
                <p className='rechargebanners-text-2'>Pay using Axis Bank Credit & Debit Cards</p>
                <div>
                    <button>Recharge Now</button>
                    <img className="rechargebanners-icon1" src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1729684002/Group_1_fifgxp.svg" alt="fastag"/>
                </div>
            </li>
            <li className='rechargebanners-list2'>
                <p className='rechargebanners-highlitedtext'>Get 15% off on <span className='rechargebanners-text-1'>FASTag recharge</span></p>
                
                <p className='rechargebanners-text-2'>Pay using Axis Bank Credit & Debit Cards</p>
                <div>
                    <button>Recharge Now</button>
                    <img className="rechargebanners-icon1" src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1729684002/Group_1_fifgxp.svg" alt="fastag"/>
                </div>
            </li>
         </ul>
    </div>
  )
}

export default RechargeBanners