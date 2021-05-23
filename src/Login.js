import React from 'react';
import './Login.css';
import {auth, provider} from "./firebase";
import {actionTypes} from "./reducer";
import { useStateValue } from './StateProvider';


const Login = () => {
    const [state, dispatch]= useStateValue();

    const signIn =() =>{
        auth.signInWithPopup(provider)
        .then(result => {

            dispatch({
                type:actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result)
        }).catch(error => alert(error.message));
    };

    return ( 
        <div className="login">
            <div className="login_logos">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"/>
                <img className="faceBooklogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/800px-Facebook_Logo_%282019%29.svg.png"/>
            </div>
            <button type="submit" onClick={signIn}>SIGN IN</button>
        </div>
     );
}
 
export default Login;