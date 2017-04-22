import React from 'react';

import { loginURL } from '../config/urls';

const href = loginURL();

const LoginLink = ({ onClick }) => (
  <a
    href={href}
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
