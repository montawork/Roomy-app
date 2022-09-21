import React from 'react';
import Sidebar from '../components/Sidebar.tsx';

const Dashbord = ({ currentUser, isLoading }) => {
  return (
    <>
      <Sidebar currentUser={currentUser} isLoading={isLoading} />
    </>
  );
};

export default Dashbord;
