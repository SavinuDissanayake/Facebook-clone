import React, { useEffect, useState } from 'react';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import GroupAddRoundedIcon from '@material-ui/icons/GroupAddRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import IconButton from '@material-ui/core/IconButton';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import './Nav.css';
import $ from 'jquery';
import DOMpurify from 'dompurify';
import { useStateValue } from './StateProvider';
import {Avatar} from "@material-ui/core";


const Nav = () => {

    const [page, setPage] = useState("home");
    const [size, setSize] = useState(window.innerWidth);

    const [{user}, dispatch] = useStateValue();

    useEffect(()=>{
        let element = $("#"+page);
        element.css("color", "#2e81f4");
        element.css("border-bottom", "4px solid #2e81f4");
    });

    function handleClick(tag){
        let currentElement = $("#"+page);
        currentElement.css("color", "grey");
        currentElement.css("border-bottom", "none");

        let newElement = $("#"+tag);
        newElement.css("color","#2e81f4");
        newElement.css("border-bottom", "4px solid #2e81f4");
        setPage(tag);
    }

    function handleResize(){
        setSize(window.innerWidth);
    }

    useEffect(() =>{
        window.addEventListener('resize', handleResize);
    }, []);
    

    return ( 
        <div className="header">
            <div className="header_left">
                <img 
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/urgjGdqFPM_.png"
                    className="logo"
                />
                <div  className="search"><SearchRoundedIcon/><input placeholder="Search Facebook" type="text" className="search_input" /></div>
            </div>

            <div className="header_middle">
                <div className={`header_option ${(size<784)?"erase":""}`} id="home" onClick={()=>handleClick("home")}><HomeRoundedIcon  fontSize="large"/></div>
                <div className={`header_option ${(size<784)?"erase":""}`} id="people" onClick={()=>handleClick("people")}><PeopleAltRoundedIcon  fontSize="large" /></div>
                <div className={`header_option ${(size<784)?"erase":""}`} id="create_group" onClick={()=>handleClick("create_group")}><GroupAddRoundedIcon  fontSize="large" /></div>
            </div>

            <div className="header_right">
                <IconButton><AddRoundedIcon fontSize="large"/></IconButton>
                <IconButton><ForumRoundedIcon fontSize="large"/></IconButton>
                <IconButton><NotificationsRoundedIcon fontSize="large"/></IconButton>
                <Avatar src={user.photoURL}/>
            </div>
        </div>
     );
}
 
export default Nav;

