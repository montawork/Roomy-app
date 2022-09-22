import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const UsersList = ({ refresh }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //   GET ALL USERS
  useEffect(() => {
    const config = {
      headers: {
        authorization: localStorage.getItem('token'),
      },
    };
    axios
      .get('http://localhost:5000/api/users', config)
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);

  //   DELETE USER
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/users/${id}`)
      .then(() => console.log('deleted'))
      .catch((err) => console.log(err));
  };
  //   DELETE FROM DOM
  const deleteFromDom = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h2>Users List</h2>
      <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
        <Table sx={{ minWidth: 850 }} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Created At</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {user.firstName}
                </TableCell>
                <TableCell align="right">{user.lastName}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.phone}</TableCell>
                <TableCell align="right">{user.createdAt}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => {
                      handleDelete(user.id);
                      deleteFromDom(user.id);
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UsersList;
