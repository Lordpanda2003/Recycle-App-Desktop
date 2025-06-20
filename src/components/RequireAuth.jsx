import { Navigate } from 'react-router-dom';

export default function RequireAuth({ children }) {
  const isAuthenticated = localStorage.getItem('loggedIn') === 'true';
  return isAuthenticated ? children : <Navigate to="/login" />;
}
