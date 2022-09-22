import React from 'react';
import Sidebar from '../components/Sidebar.tsx';

const Dashbord = ({ currentUser, isLoading, refresh }) => {
  return (
    <>
      <Sidebar
        currentUser={currentUser}
        isLoading={isLoading}
        refresh={refresh}
      />
    </>
  );
};

export default Dashbord;
