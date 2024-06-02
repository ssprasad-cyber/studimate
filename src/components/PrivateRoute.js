// src/components/PrivateRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, loggedIn }) => {
  return loggedIn ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
