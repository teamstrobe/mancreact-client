import React from 'react';
import LogoutBtn from './LogoutBtn';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="row">
        <a href="/" className="logo">
          <div>
            <img
              src="http://mancreact.com/mancreact512.png"
              alt="Manchester React"
              width="100"
            />
          </div>
          <div className="logo-title">Manchester React User Group</div>
        </a>
        <div className="members">
          <strong>1500 </strong> members
        </div>
        <div className="signin">
          <div>
            <img
              className="avatar"
              src="http://placehold.it/40"
              alt="John Doe"
            />
            <span className="account-name">
              Hello, John Doe!
            </span>

            <LogoutBtn />

          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
