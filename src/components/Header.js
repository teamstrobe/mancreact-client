import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { groupURI } from '../config/urls';
import apiFetch from '../apiFetch';

import LoginLink from './LoginLink';
import LogoutBtn from './LogoutBtn';

class Header extends Component {
  state = {
    group: null,
  };
  componentWillMount() {
    this.fetchData();
  }
  async fetchData() {
    const group = await this.getGroup();
    this.setState({
      group,
    });
  }
  async getGroup() {
    return await apiFetch(groupURI());
  }
  render() {
    const { group } = this.state;
    const { me, onLoginClick, onLogoutClick } = this.props;
    return (
      <header className="header">
        <div className="container">
          <div className="row">
            {group != null &&
              <Link to="/" className="logo">
                <div>

                  <img
                    src="/mancreact512.png"
                    alt={group.name}
                    width="100"
                  />

                </div>
                <div className="logo-title">{group.name}</div>
              </Link>}
            {group != null &&
              <div className="members">
                <strong>{group.members}</strong> members
              </div>}
            <div className="signin">
              {!me
                ? <LoginLink onClick={onLoginClick} />
                : <div>
                    <img
                      className="avatar"
                      src={me.photo.thumb_link}
                      alt={me.name}
                    />
                    <span className="account-name">
                      Hello, {me.name}!
                    </span>
                    <LogoutBtn onClick={onLogoutClick} />
                  </div>}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
