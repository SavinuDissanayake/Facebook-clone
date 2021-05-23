import React, { useEffect, useState } from 'react';
import './Menu.css';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';
import { SettingsRemoteRounded } from '@material-ui/icons';
import { useStateValue } from './StateProvider';
import {Avatar} from "@material-ui/core";

const Menu = () => {

    const [show, setShow] = useState(false);
    const [{user}, dispatch] = useStateValue();

    return ( 
        <div className="menu_container">
            <div className="sec_container">
            <div className="menu_option pofile_icon"><div className="icon_pro"><Avatar src={user.photoURL}/><h4>{user.displayName}</h4></div></div>
            <div className="menu_option"><div className="icon_pro"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/5rR6LRpNc5u.png"/><h4> COVID-19 Information Center</h4></div></div>
            <div className="menu_option"><div className="icon_pro"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"/><h4> Find Friends</h4></div></div>
            <div className="menu_option"><div className="icon_pro"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/urgjGdqFPM_.png"/><h4> Welcome</h4></div></div>
            <div className="menu_option"><div className="icon_pro"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"/><h4> Groups</h4></div></div>
            <div className="menu_option"><div className="icon_pro"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png"/><h4> Marketplace</h4></div></div>
            <div className="menu_option"><div className="icon_pro"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png"/><h4> Watch</h4></div></div>
            <div className="menu_option"><div className="icon_pro"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png"/><h4> Events</h4></div></div>
            <div className="menu_option"><div className="icon_pro"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/VPndBxotRgH.png"/><h4> Memories</h4></div></div>
            <div className="menu_option"><div className="icon_pro"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png"/><h4> Saved</h4></div></div>
            <div className="menu_option"><div className="icon_pro"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png"/><h4> Pages</h4></div></div>

            {/* here we are making a drop down menue*/}

            {/* make a div to hold everything on the See More secrtion, when the div is been clicked run the function handleMoreOp 
            so bascially */}

            <div className="container_more"> 
                
                {
                    show?
                        <div>
                            <div className="menu_option"><div className="icon_pro"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/DHBHg9MEeSC.png"/><h4>Ads</h4></div></div>
                            <div className="menu_option"><div className="icon_pro"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/29AMNpNZ4Vm.png"/><h4>Campus</h4></div></div>
                            <div className="menu_option"><div className="icon_pro"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/Jr0q8qKF2-Y.png"/><h4>Climate Science Information Center</h4></div></div>
                            <div className="menu_option"><div className="icon_pro"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/cT5nPnO8Wsc.png"/><h4>Crisis Response</h4></div></div>
                            <div className="menu_option"><div className="icon_pro"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/GJ4EaivDaSj.png"/><h4>Facebook Pay</h4></div></div>
                            <div className="menu_option"><div className="icon_pro"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/mAnT0r8GSOm.png"/><h4>Favourites</h4></div></div>
                            <div className="menu_option"><div className="icon_pro"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/MN5ZSGIfEZ3.png"/><h4>Friend Lists</h4></div></div>
                            <div className="menu_option"><div className="icon_pro"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/n2vd2VduYc1.png"/><h4>Fundraisers</h4></div></div>
                            <div className="menu_option"><div className="icon_pro"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/PObY9OA5lvJ.png"/><h4>Games</h4></div></div>
                            <div className="menu_option"><div className="icon_pro"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/9bekmF_PzNp.png"/><h4>Gaming Video</h4></div></div>
                            <div className="menu_option"><div className="icon_pro"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/DO-SN-shaZL.png"/><h4>Jobs</h4></div></div>
                            <div className="menu_option"><div className="icon_pro"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/Nl9CPY6q_n-.png"/><h4>Live Videos</h4></div></div>
                            <div className="menu_option"><div className="icon_pro"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/4Y9Xi2D3hJv.png"/><h4>Messenger</h4></div></div>
                            <div className="menu_option"><div className="icon_pro"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/w-vdKCGzCy1.png"/><h4>Most Recent</h4></div></div>
                            <div className="menu_option"><div className="icon_pro"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/SWt1APlIN82.png"/><h4>Movies</h4></div></div>
                            <div className="menu_option"><div className="icon_pro"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/3jfPQhTRYG8.png"/><h4>Oculus</h4></div></div>
                            <div className="menu_option"><div className="icon_pro"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/NYOGcd-z-qs.png"/><h4>Offers</h4></div></div>
                            <div className="menu_option"><div className="icon_pro"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/8OasGoQgQgF.png"/><h4>Recent Ad Activity</h4></div></div>
                            <div className="menu_option"><div className="icon_pro"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/bo0Zt72NIra.png"/><h4>Weather</h4></div></div>
                        </div>
                    :null
                }
                {
                    show?
                    <div className="menu_option" onClick={()=>setShow(!show)}><div className="icon_pro"><ExpandLessRoundedIcon/><h4>See Less</h4></div></div>
                    :<div className="menu_option" onClick={()=>setShow(!show)}><div className="icon_pro"><ExpandMoreRoundedIcon/><h4>See More</h4></div></div>

                }
            </div>

        </div>
        </div>

     );
}
 
export default Menu;
