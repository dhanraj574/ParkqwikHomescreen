import React from 'react'

import Navbar from '../Navbar'
import ServiceCard from '../ServicesCard'
import FastagRecharge from '../FastagRecharge'
import Banner from '../Banner'
import Features from '../Features'
import Dealsforyou from '../Dealsforyou'
import PremiumPlans from '../PremiumPlans'
import  RechargeSection  from '../RechargeSection'
import RechargeBanners from '../RechargeBannners/rechargebanners'
import TrendingSection from '../TrendingSection/trendingsection'
import VideoSection from '../VideoSection/videosection'


import './index.css'


const HomePage = () => {
  let othersList = [{text:"Rentout Helmet",iconUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1728367049/Group_470_1_rk4zqg.png"},
  {text:"Fuel Price",iconUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1728367071/Group_471_nfusxv.png"},
  {text:"Shop",iconUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1728367072/shop-bag_svgrepo.com_rbw1vr.png"},
  {text:"My Vehicles",iconUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1728367048/car_svgrepo.com_thaftb.png"}]

  let gonnaTravelList = [{text:"Car Wash",iconUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1729085112/Group_3_qjtgz5.png"},
  {text:"Estimate Toll",iconUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1729085340/Group_464_iqpja2.png"},
  {text:"Shop",iconUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1729085341/shop-bag_svgrepo.com_1_yoswkf.png"},
  {text:"Protocols",iconUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1729085341/traffic-light_svgrepo.com_tuv9fx.png"}]

  let carcenterDetails = [{text:"Pay Challans",iconUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1729770904/ticket_svgrepo.com_dh7ptl.svg"},{text:"Crime Reporter",iconUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1729770933/public-security-svgrepo-com_1_srhv96.svg"},{text:"RTO Center",iconUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1729770904/building-svgrepo-com_1_1_b7addb.svg"},{text:"PUCC Center",iconUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1729770904/exhaust-svgrepo-com_1_inin6w.svg"}]
  
  let exclusiveOffers= [{text:"Rewards",iconUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1729852911/redeem_bzwizc.svg"},{text:"Discounts",iconUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1729852916/discount-promo-ecommerce_svgrepo.com_hz6iyz.svg"},{text:"Refer & Win",iconUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1729852922/loudspeaker-6_svgrepo.com_arcgnm.svg"}]

  return (
    <>
        <Navbar/>
        <div className="home-content">
        <ServiceCard/>
        <FastagRecharge/>
        <Banner/>
        <div className='box'>
            <h2>Others</h2>
            <Features  data={othersList} bgcolor="#ffffff"/>
        </div>
        <Dealsforyou/>
        <div className='box'>
             <h2>Gonna Travel ?</h2>
             <Features data={gonnaTravelList} bgcolor="#F0FFFA" />
        </div>
        <PremiumPlans/>
        <RechargeSection/>
        <RechargeBanners/>
        <div className='box carcentercont'>
            <h2>Your Car’s Center</h2>
            <Features data={carcenterDetails} bgcolor="#F0FFFA"/>
        </div>
        <TrendingSection/>
        <div className='box exclusive-offers'>
            <h2>Exclusive Offers</h2>
            <Features data={exclusiveOffers} bgcolor="#F0FFFA" padding="33"/>

        </div>
        <VideoSection/>
        </div>
    </>

  )
}

export default HomePage