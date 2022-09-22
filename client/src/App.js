import './App.css';
import Register from './components/Register.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './views/Auth.tsx';
import Login from './components/Login.tsx';
import Dashbord from './views/Dashbord.tsx';
import PrivateRoute from './private/PrivateRoutes.tsx';
import Navbar from './components/Navbar.tsx';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HomePage from './views/HomePage.tsx';

import AllRooms from './views/AllRooms.tsx';
import Footer from './components/Footer.tsx';
import ContactPage from './views/ContactPage.tsx';
import RoomDetail from './views/RoomDetail.tsx';

import Profile from './views/Profile.tsx';
import AddRoom from './views/AddRoom.tsx';


function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => { 
    const config = {
      headers: {
        authorization: localStorage.getItem('token'),
      },
    };
    axios
      .get('http://localhost:5000/api/user/', config)
      .then((res) => {
        setCurrentUser(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  const refresher = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <Router>
        <Navbar currentUser={refresh} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="" element={<Auth />}>
            <Route
              path="/register"
              element={<Register refresher={refresher} />}
            />
            <Route path="/login" element={<Login refresher={refresher} />} />
          </Route>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashbord
                  currentUser={currentUser}
                  isLoading={isLoading}
                  refresh={refresh}
                />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile currentUser={currentUser} isLoading={isLoading} />
              </PrivateRoute>
            }
          />
          <Route
            path="/add/room"
            element={
              <PrivateRoute>
                <AddRoom />
              </PrivateRoute>
            }
          />
          <Route
            path="/rooms"
            element={
              <PrivateRoute>
                <AllRooms />
              </PrivateRoute>
            }
          />
           <Route
            path="/room"
            element={
              <PrivateRoute>
                <RoomDetail />
              </PrivateRoute>
            }
          />
          
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
