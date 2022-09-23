import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './Post.tsx';

const PostsList = () => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefrech] = useState(false);

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
        setRooms(res.data.reverse());

        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);

  //   DELETE FROM DOM
  const deleteFromDom = (id) => {
    setRooms(rooms.filter((room) => room.id !== id));
  };

  return (
    <>
      {rooms.map((room, index) => {
        return (
          <Post
            key={index}
            {...room}
            deleteFromDom={deleteFromDom}
            setRefrech={setRefrech}
            refresh={refresh}
          />
        );
      })}
    </>
  );
};

export default PostsList;
