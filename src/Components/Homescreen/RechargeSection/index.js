import React from 'react'
import './recharge.css'

const RechargeSection = () => {

  let rechargeSectionList = [{name:"Fastag Recharge",imgUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1729678482/barrier-and-car-svgrepo-com_6_efojhm.svg"},
  {name:"Mobile Recharge",imgUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1729678482/essential-mobile-smartphone-svgrepo-com_1_nstd8f.svg"},
  {name:"Electricity",imgUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1729678482/electricity-svgrepo-com_1_guhvxu.svg"},
  {name:"Water",imgUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1729678482/water-null-water-tap-water-valve-svgrepo-com_1_hnz9gg.svg"},
  {name:"Gas Cylinder",imgUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1729678482/gas-tank-icon_1_scww23.svg"},
  {name:"Loan Payment",imgUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1729678484/hand-money-svgrepo-com_1_ruwp56.svg"},
  {name:"DTH",imgUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1729678484/ground-satelite-dish-svgrepo-com_1_usyea9.svg"},
  {name:"House Rent",imgUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1729678482/house-rent-svgrepo-com_1_neszlq.svg"}]

  return (
    <div className='recharge-section'>
        <div className='recharge-card'>
            <div className='rechargebill-headcont'>
                <h1>Recharge & Bill Payments</h1>
                <span className='rechargecard-bharathbill'>
                    <img src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1729678597/BharatBillPay_1_oz0mqq.svg" alt="bharathbill"/>
                    <img  className="rechargecard-paybillicon" src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1729678598/Pay_Bills_ymij2g.svg" alt="pay bills"/>
                </span>
            </div>
            <ul>
                {rechargeSectionList.map(each => (
                    <li>
                        <span className='rechargesection-iconcont'><img src={each.imgUrl} alt={each.name}/></span>
                        <p>{each.name}</p>
                    </li>
                ))}
            </ul>
            <button className='rechargesection-btn'>View all</button>
        </div>
    </div>
  )
}


export default RechargeSection
