import React from 'react';
import '../styles/Sidebar.css';
import Post from './Post.tsx';

const Sidebar = ({ currentUser, isLoading }) => {
  console.log('******** => ', currentUser);
  return (
    <div>
      <nav className="menu">
        <div className="smartphone-menu-trigger"></div>
        <header className="avatar">
          <img
            src="https://gitlab.com/uploads/-/system/user/avatar/56386/tt_avatar_small.jpg?width=400"
            alt=""
          />
          <h2>
            {isLoading
              ? 'Loading...'
              : `${currentUser.firstName} ${currentUser.lastName}`}
          </h2>
        </header>
        <ul>
          <li className="icon-dashboard">
            <span>Dashboard</span>
          </li>
          <li className="icon-users">
            <span>Users</span>
          </li>
          <li className="icon-customers">
            <span>Posts</span>
          </li>
          <li className="icon-settings">
            <span>Messages</span>
          </li>
        </ul>
      </nav>

      <main>
        <div className="helper">
          <Post title="Free Room in Ariana" />
          <Post title="Free Room in Bardo" />
          <Post title="Free Room in Ghazala" />
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
