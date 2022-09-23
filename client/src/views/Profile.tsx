import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Roome from '../components/Roome.tsx'

const Profile = ({ currentUser }) => {
  const navigate = useNavigate()
  const [rooms, setRooms] = React.useState([])
  const [roomsFilter, setRoomsFilter] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const config = {
      headers: {
        authorization: localStorage.getItem('token'),
      },
    };
    axios
      .get('http://localhost:5000/api/rooms', config)
      .then((res) => {
        console.log(res.data);
        setRooms(res.data);
        setRoomsFilter(rooms.filter(room => room.user_id === currentUser.id))
        console.log(roomsFilter)
        console.log(res.data);

        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentUser.id, isLoading]);
  return <div className='container'>

    <div style={{ width: 345, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", backgroundColor: "white", margin: "20px auto", padding: "5% 3%", textAlign: "center" }}>
      <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="" width="80%" />
      <h3 >{currentUser.firstName} {currentUser.lastName}</h3>
    </div>
    <Button variant="contained" onClick={() => navigate(('/add/room'))}
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", margin: "50px auto ", display: "block"
      }}>Add A New Room</Button>
    <div style={{ display: "flex", gap: "30px", flexWrap: "Wrap" }}>
      {roomsFilter.length !== 0 && currentUser ?
        roomsFilter.map((room, i) =>
          <Roome key={i} room={room} />
        ) :
        <h2 style={{ textAlign: "center", margin: " 100px auto" }}>You Don't Have Any Post </h2>
      }   </div>
  </div>;
};

export default Profile;
