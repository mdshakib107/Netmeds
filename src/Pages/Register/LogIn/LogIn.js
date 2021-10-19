import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';



const LogIn = () => {
    // const { singInWithGoogle, user, logOut } = useAuth();
    return (
        <div>

            {/* {user.email && <div> <h1>{user.displayName}</h1>
                <img src={user.photoURL} alt="" width="300px" /><br />
                <button onClick={logOut}>Log Out</button></div>}
            {!user.email &&
                <div> <h1>Log In </h1>
                    <button onClick={singInWithGoogle} >With Google </button>
                    <br />
                    <Link to="/register" >New User?</Link>
                </div>
            } */}
        </div>
    );
};

export default LogIn;