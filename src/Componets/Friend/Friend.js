import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const{name, username,id}=props.friends
    const navigate = useNavigate()
    const showFriendsDetails= ()=>{
        const path =`/friend/${id}`;
        navigate(path);
    }
    return (
        <div>
            <h1>{name}</h1>
            <Link to={`/friend/`+ id}> Show Detail</Link>
            <button onClick={showFriendsDetails}>{username}: {id}</button>
        </div>
    );
};

export default Friend;