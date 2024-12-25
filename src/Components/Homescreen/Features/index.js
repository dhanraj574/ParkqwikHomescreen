import React from 'react'
import './index.css'

const Features = (props) => {
  return (
    <ul className={props.padding === "33" ? "featureslist-exclusiveoffers" : "features-list"}>
        {props.data.map(each => (
             <li>
             <span className={props.bgcolor === "#F0FFFA" ? 'fastag-features-icon-green' : 'fastag-features-icon'}>
                 <img src={each.iconUrl} alt={`${each.text} Logo`} />
             </span>
             <p className='fastag-features-text'>
                 {each.text}
             </p>
         </li>
         
        ))}
    </ul>
  )
}

export default Features