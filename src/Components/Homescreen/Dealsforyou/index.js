
import './index.css'

const Dealsforyou = () => {
  return (
    <div className='dealsforyou-cont'>
        <h2>Deals For You</h2>
        <ul>
            <li>
                <img className="dealsforyou-card" src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1728471997/Group_541_2_kmybmy.png" alt="deals card"/>
            </li>
            <li className='dealsforyou-li'>
                <img className="acko-img" src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1728472472/acko-general-insurance-limited-logo-vector_1_nlmkun.png" alt="acko logo"/>
                <p className='dealsforyou-text'>Car Insurance</p>
                <div className='dealsforyou-pricecont'>
                  <p className='dealsforyou-pricetext'>Starting at </p>
                  <img className="dealsforyou-pricetag" src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1728724550/Group_456_ybaqdc.png" alt="Rs 2999"/>
                </div>
                <div className='dealsforyou-btncont'>
                    <button>View Details</button>
                    <img className="dealsforyoubtnarrow" src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1728969414/arrow_right_alt_gpet0p.png" alt="arrow" />
                </div>
            </li>
            <li>
                <img className="dealsforyou-card" src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1728471997/Group_541_2_kmybmy.png" alt="deals card"/>
            </li>
        </ul>
    </div>
  )
}

export default Dealsforyou