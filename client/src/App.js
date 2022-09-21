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

  console.log('App => ', currentUser);

  const refresher = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <Router>
        <Navbar currentUser={refresh} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="" element={<Auth />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login refresher={refresher} />} />
          </Route>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashbord currentUser={currentUser} isLoading={isLoading} />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
