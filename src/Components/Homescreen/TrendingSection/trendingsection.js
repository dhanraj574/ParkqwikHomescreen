import React from 'react'
import './trendingsection.css'

const  TrendingSection= () => {
  return (
    <div className='trendingsection-cont'>
       <h2>Trending</h2>
       <div className='trendingsection-card'>
            <div className='trendingsectioncard-1'>
                <p className='trendingsectioncard-text1'>Save <img src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1729778462/rupee-sign_svgrepo.com_m2anc1.svg" alt="rupee icon" />500</p>
                <p className='trendingsectioncard-text2'>On Your First EV Parking</p>
                <p className='trendingsectioncard-text3'>We provide dedicated monthly <br/> parking with surveillance</p>
            </div>
            <div className='trendingsectioncard-2' >
                <img src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1729778419/Group_489_bzqojz.svg" alt="avatar"/>
                <p><span>100+</span> <br/> Happy Customers </p>
            </div>
            <img src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1729778429/Group_488_nikmhf.svg" />
       </div>
    </div>
  )
}

export default TrendingSection
