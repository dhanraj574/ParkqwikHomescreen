
import './index.css'

function Navbar() {
    
    return (
        <div className="navbar-cont">
            <span className="profileimg-cont">
                <img className="profile-img" alt="profile-img" src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1727496653/Ellipse_1_1_m7kvlh.png"/>
                <span><img src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1727496653/Group_bcq4sd.png" alt="hamburger icon"/></span>
            </span>
            <button className="addvehicle-btn">
               <img src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1727496653/renault-svgrepo-com_1_pynbdk.png" alt="vehicle logo"/>
               <span>Triber - 2084</span>
               <img src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1727545232/arrow_drop_down_npya6g.png" alt="dropdown icon" />
            </button>
            <span className="nav-links">
                <span>
                    <span className="wallet-amt">&#8377; 450</span>
                    <span className="wallet"><img  src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1727496653/wallet_svgrepo.com_h8h6ou.png" alt="wallet icon"/></span>
                </span>
                <span>
                    <img className="bell-round" src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1727680033/Ellipse_3_3_zhmxzo.png" alt="bell round"/>
                    <span className="bell"><img  src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1727496653/Vector_yb7ln6.png" alt="bell icon"/></span>
                </span>
                <span>
                    <span className="share"><img src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1727496653/share_svgrepo.com_koeng6.png" alt="share icon"/></span>
                </span>
            </span>
        </div>
    )
}


export default Navbar