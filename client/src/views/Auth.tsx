import React from 'react';
import { Outlet } from 'react-router-dom';

const Auth: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Auth;
