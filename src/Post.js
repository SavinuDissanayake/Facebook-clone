import React from 'react';
import './Post.css';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded'; //this is for tempary testing
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import {Avatar} from "@material-ui/core";


const Post = ({profilePic,image,username,timestamp,message}) => {


    return ( 
        <div className="post">

            <div className="post_top">
                <Avatar src={profilePic}/>
                <div class="post_topinfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="post_bottom">
                <p>{message}</p>
            </div>

            <div className="post_image">
                <img src={image} alt=""/>
            </div>

            <div className="post_options">
                <div className="post_option">
                    <ThumbUpIcon/>
                    <p>Like</p>
                </div>

                <div className="post_option">
                    <ChatBubbleOutlineIcon/>
                    <p>Comment</p>
                </div>

                <div className="post_option">
                    <NearMeIcon/>
                    <p>Share</p>
                </div>

                <div className="post_option">
                    <AccountCircleIcon/>
                    <ExpandMoreOutlinedIcon/>
                </div>
            </div>

        </div>
     );
}
 
export default Post;