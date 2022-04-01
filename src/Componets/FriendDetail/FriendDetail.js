import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend]=useState([])
    useState(()=>{
        const url =`https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])
    return (
        <div>
            <h1> Hello my dear friend:{friendId}</h1>
            <h4>Name: {friend.name}</h4>
            <h5>Username: {friend.username}</h5>
            <p> <small> Email: {friend.email}</small></p>
            <p> <small> Address: {friend.address?.city}</small></p>
            <p> <small> Lat: {friend.address?.geo.lat}</small></p>

        </div>
    );
};

export default FriendDetail;