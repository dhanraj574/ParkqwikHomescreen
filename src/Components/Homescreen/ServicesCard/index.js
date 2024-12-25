import React from 'react'
import './index.css'

const ServiceCard = () => {
    let servicesList = [{name:"Nearby Parking",imgUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1727719464/location-pin-map_svgrepo.com_1_hs2j5v.png"},
    {name:"EV Parking",imgUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1727719565/electric-car-illustration-1_svgrepo.com_1_ie5tq3.png"},
    {name:"Car Wash",imgUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1727719695/Group_2_zmyh3a.png"},
    {name:"Vehicle Insurance",imgUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1727707690/Screenshot_2024-09-30_201251_1_k98sci.png"},
    {name:"Roadside Assistance",imgUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1727719748/crane-truck_svgrepo.com_1_daowjc.png"},
    {name:"Pay Challan",imgUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1727719812/ticket_svgrepo.com_5_suppcv.png"},
    {name:"Toll Estimator",imgUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1727719869/Group_447_1_brbzpn.png"},
    {name:"Valet Parking",imgUrl:"https://res.cloudinary.com/dlb0k0ebr/image/upload/v1727719919/Group_418_1_jglk3c.png"}]

  return (
    
    <div className='services-bg'>
        <div className='services-card'>
            <h1>Services</h1>
            <ul>
                {servicesList.map(each => (
                    <li>
                        <span><img src={each.imgUrl} alt={each.name}/></span>
                        <p>{each.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    
    
    
  )
}

export default ServiceCard