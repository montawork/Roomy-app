import React, { useEffect, useState } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';

const RoomDetail = ({ currentUser }) => {
  const [room, setRoom] = useState({});
  const [refresh, setRefrech] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
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
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, refresh]);
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
    isAccepted,
  } = room;

  //   ACCEPT POST BY THE ADMIN
  const acceptPost = (id) => {
    axios
      .put(`http://localhost:5000/api/rooms/accept/${id}`, {})
      .then(() => {
        setRefrech(!refresh);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   DELETE POST
  const deletehandler = (id) => {
    axios
      .delete(`http://localhost:5000/api/rooms/${id}`)
      .then(() => navigate('/dashboard'))
      .catch((err) => console.log(err));
  };

  // DELETE OWN POST
  const deletePost = (id) => {
    axios
      .delete(`http://localhost:5000/api/rooms/${id}`)
      .then(() => navigate('/profile'))
      .catch((err) => console.log(err));
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        gap: '50px',
        margin: '70px',
      }}
    >
      <div className="img">
        <img
          style={{
            objectFit: 'fill',
          }}
          src={image}
          width="350px"
          height="400px"
          alt=""
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '10px',
          }}
        >
          <p>Owner:</p>
          <p>
            {room.user.firstName} {room.user.lastName}
          </p>
          <p>{location}</p>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p>Email:</p>
          <p>{room.user.email}</p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p>Phone:</p>
          <p>{room.user.phone}</p>
        </div>
      </div>
      <div className="content">
        <h2>{title}</h2>
        <p>Description: {description}</p>
        <div>
          <p>Region: {region}</p>
          <p>Surface: {surface}</p>
          <p>Number of beds: {nbrBeds}</p>
          <p>Number Roommates: {nbrRoommates}</p>
        </div>
        <div className="btns">
          {currentUser.userType === 1 ? (
            <div>
              {isAccepted ? (
                <span
                  style={{
                    fontSize: '1.1rem',
                    marginRight: '4px',
                    color: '#2e7d32',
                  }}
                >
                  Accepted ✔
                </span>
              ) : (
                <Button
                  onClick={() => {
                    acceptPost(id);
                  }}
                  variant="contained"
                  color="success"
                  sx={{
                    maxWidth: '70px',
                    marginRight: '4px',
                  }}
                >
                  Accept
                </Button>
              )}
              <Button
                color="error"
                variant="outlined"
                onClick={() => deletehandler(id)}
              >
                Delete
              </Button>
            </div>
          ) : room.user_id === currentUser.id ? (
            <div>
              <Button
                color="success"
                variant="contained"
                style={{ marginRight: '10px' }}
                onClick={() => navigate(`/room/edit/${id}`)}
              >
                Edit
              </Button>
              <Button
                color="error"
                variant="outlined"
                onClick={() => deletePost(id)}
              >
                Delete
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
