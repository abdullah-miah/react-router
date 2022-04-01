import React, { useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends]=useState([])
    useState(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])
    return (
        <div>
            <h1> Hello my dear friends</h1>
            <p> Users: {friends.length}</p>
            {
                friends.map(friends=><Friend
                friends={friends}
                key={friends.id}
                ></Friend>)
            }
        </div>
    );
};

export default Friends;