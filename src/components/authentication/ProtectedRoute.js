import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../../helper/auth';

const ProtectedRoute = ({ component: Component }) => {
  return isLoggedIn() ? <Component /> : <Navigate to="/auth" />;
};

export default ProtectedRoute;
