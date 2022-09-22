import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './Post.tsx';

const PostsList = () => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //   GET ALL POSTS
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
        console.log(res.data);

        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //   DELETE FROM DOM
  const deleteFromDom = (id) => {
    setRooms(rooms.filter((room) => room.id !== id));
  };

  return (
    <>
      {rooms.map((room, index) => {
        return <Post key={index} {...room} deleteFromDom={deleteFromDom} />;
      })}
    </>
  );
};

export default PostsList;
