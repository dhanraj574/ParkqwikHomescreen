import React from 'react'
import './index.css'
import Features from '../Features'

const FastagRecharge = () => {
    let myfastag = [{imgUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1727755793/Ellipse_283_botyhb.png",vehicleNumber:"TN48BZ2084"},{imgUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1727755793/Ellipse_274_vtbzvm.png",vehicleNumber:"TN48BN2084"}]
    let fastagFeatures = [{iconUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1727755793/shopping_bag_hiiyaf.png",text:"Buy FASTag"},{iconUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1727755793/published_with_changes_buy6k0.png",text:"Replace FASTag"},{iconUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1727755793/done_all_s8wxqz.png",text:"Active FASTag"},{iconUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1727755792/scan_delete_p7r8yj.png",text:"Close FASTag"}]
    
  return (
    <div className="fastagrecharge-section">
        <div>
            <h1>FASTag Recharge</h1>
            <p>Get upto 100% cashback on first 3 Fastag Recharge</p>
            <div className="fastagrecharge-input">
                <input type="search" placeholder='Add vehicle or chassis number' />
                <button>Recharge</button>
            </div>
            <div className="payment-partner">
                <span>Powered by</span>
                <img className="payment-logo1" src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1727755793/national-electronic-toll-collection-netc-logo-vector_svgrepo.com_qpvgib.png" alt="NETC Logo"/>
                <img className="payment-logo2" src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1727755792/bharat-billpay-seeklogo.com_svgrepo.com_lx3r44.png" alt="BharatBillpay Logo"/>        
            </div>
            <div className="myfastag-cont">
                <h2>My FASTags</h2>
                <ul>
                {myfastag.map(each => (
                    <li>
                        <img src={each.imgUrl} alt="bank logo"/>
                        <span>{each.vehicleNumber}</span>
                    </li>
                ))}
                </ul>
            </div>
            <div className="break-line"></div>
            <div className="fastag-features">
                <h2>Discover</h2>
                <Features data={fastagFeatures} bgcolor="#F0FFFA" />
            </div>
       </div>
        
    </div>
  )
}

export default FastagRecharge