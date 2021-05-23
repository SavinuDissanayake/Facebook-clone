import React, { useState, useEffect } from 'react';
import "./Body.css";
import Post from './Post';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import {Avatar} from "@material-ui/core";
import db from "./firebase";
import firebase from 'firebase';


const Body = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot =>(
            setPosts(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
        ))

    }, []);

    const [input, setInput] = useState("");
    const [{user}, dispatch] = useStateValue();
    const [imageUrl, setImageUrl] = useState("");


    const handleSubmit = e =>{
        e.preventDefault();
        //some clever data base stuff goes here
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })
        setInput("");
        setImageUrl("");
    }

    return ( 
        <div className="bodyContainer">
            <div className="createStory">
                <Avatar src={user.photoURL}/>
                <div>
                    <h4 className="createStory_title">Create Story</h4>
                    <h4 className="createStory_instruct">Share a photo or write something.</h4>
                </div>
            </div>

            <div className="post">
                <div className="new_post_container">
                    <Avatar src={user.photoURL}/>
                    <form>
                        <input 
                            value={input}
                            onChange={e =>setInput(e.target.value)}
                            placeholder={`What's on your mind, ${user.displayName}?`}
                            className="messageSender_input"
                        />
                        <button onClick={handleSubmit} type="submit">Hidden Submit</button>
                    </form>

                    <form>
                        <input 
                            value={imageUrl}
                            onChange={e =>setImageUrl(e.target.value)}
                            placeholder="Image URL"
                            className="messageSender_img"
                        />
                        <button onClick={handleSubmit} type="submit">Hidden Submit</button>
                    </form>
                </div>

                <div className="post_buttons">
                    <div className="post_Icon_set"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/Nl9CPY6q_n-.png"/><h4 className="postIconTitle">Live Video</h4></div>
                    <div className="post_Icon_set"><PhotoLibraryIcon fontSize="Large" className="photo_videoIcon"/><h4 className="postIconTitle">Video/Photo</h4></div>
                    <div className="post_Icon_set"><InsertEmoticonIcon fontSize="Large" className="smile"/><h4 className="postIconTitle">Feeling/Activity</h4></div>     
                </div>
            </div>

            {posts.map((post)=>(
                <Post
                    key = {post.id}
                    profilePic={post.data.profilePic}
                    message = {post.data.message}
                    timestamp = {post.data.timestamp}
                    username = {post.data.username}
                    image = {post.data.image}
                />
            ))}
        
        </div>
     );
}
 
export default Body;