import React from 'react';

import { loginURL } from '../config/urls';

const LoginLink = ({ onClick, pathname }) => (
  <a
    href={loginURL(pathname)}
    className="btn"
    onClick={e => {
      if (typeof onClick === 'function') {
        e.preventDefault();
        onClick();
      }
    }}
  >
    Log in
  </a>
);

export default LoginLink;
