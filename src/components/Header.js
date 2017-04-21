import React from 'react';

import { mockGroup } from '../mocks/group';

import LoginLink from './LoginLink';
import LogoutBtn from './LogoutBtn';

const Header = ({ me }) => {
  const group = mockGroup;
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <a href="/" className="logo">
            <div>
              <img
                src="http://mancreact.com/mancreact512.png"
                alt={group.name}
                width="100"
              />
            </div>
            <div className="logo-title">{group.name}</div>
          </a>
          <div className="members">
            <strong>{group.members}</strong> members
          </div>
          <div className="signin">
            {me
              ? <LoginLink />
              : <div>
                  <img
                    className="avatar"
                    src={me.photo.thumb_link}
                    alt={me.name}
                  />
                  <span className="account-name">
                    Hello, {me.name}!
                  </span>
                  <LogoutBtn />
                </div>}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
