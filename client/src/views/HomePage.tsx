import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RoomsList from '../components/RoomsList.tsx';
import Slider from '../components/Slider.tsx';

const HomePage = () => {
  const navigate = useNavigate()
  const [rooms, setRooms] = React.useState([])
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
        console.log(rooms)
        console.log(res.data);

        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoading]);
  return (
    <>
      {' '}
      <Slider />{' '}
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>Looking For Roommate</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "50px", flexWrap: "wrap" }}>
        {
          rooms.map((room, i) => <RoomsList room={room} key={i} />).reverse().slice(0, 3)
        }
      </div>
      <Button onClick={() => navigate(('/rooms'))} variant="contained"
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", margin: "50px auto ", display: "block"
        }}>Show All</Button>

      <h2 style={{ textAlign: "center" }}>Looking For Room</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
        {
          rooms.map((room, i) => <RoomsList room={room} key={i} />).reverse().slice(3, 6)
        }
      </div>
      <Button onClick={() => navigate(('/rooms'))} variant="contained"
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", margin: "50px auto ", display: "block"
        }}>Show All</Button>

    </>
  );
};

export default HomePage;
