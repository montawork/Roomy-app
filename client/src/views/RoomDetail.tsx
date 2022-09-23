import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RoomDetail = () => {
  const [room, setRoom] = useState({});
  const { id } = useParams();
  //   GET POST BY ID
  useEffect(() => {
    const config = {
      headers: {
        authorization: localStorage.getItem('token'),
      },
    };
    axios
      .get(`http://localhost:5000/api/rooms/${id}`, config)
      .then((res) => {
        setRoom(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  console.log(room);

  const {
    createdAt,
    description,
    image,
    location,
    nbrBeds,
    nbrRoommates,
    region,
    surface,
    title,
  } = room;

  //   const { email, firstName, lastName, phone } = room.user;

  return (
    <div>
      <h2>{title}</h2>
      <img src="" alt="" />
      <p>City: {location}</p>
      <p>Region: {region}</p>
      <p>Surface: {surface}</p>
      <p>Number of beds: {nbrBeds}</p>
      <p>Number Roommates: {nbrRoommates}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default RoomDetail;
