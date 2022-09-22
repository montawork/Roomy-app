import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import RoomsList from '../components/RoomsList.tsx';
import Slider from '../components/Slider.tsx';

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <>
      {' '}
      <Slider />{' '}
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>Looking For Roommate</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
        <RoomsList />
        <RoomsList />
        <RoomsList />
      </div>
      <Button onClick={() => navigate(('/rooms'))} variant="contained"
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", margin: "50px auto ", display: "block"
        }}>Show All</Button>

      <h2 style={{ textAlign: "center" }}>Looking For Room</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
        <RoomsList />
        <RoomsList />
        <RoomsList />
      </div>
      <Button onClick={() => navigate(('/roommate'))} variant="contained"
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", margin: "50px auto ", display: "block"
        }}>Show All</Button>

    </>
  );
};

export default HomePage;
