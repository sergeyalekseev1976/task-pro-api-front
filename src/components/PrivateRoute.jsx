import { Navigate } from 'react-router-dom';
import { useIsLoggedIn } from 'hooks';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const isLoggedIn = useIsLoggedIn();
  return isLoggedIn ? children : <Navigate to={redirectTo} replace={true} />;
};
export default PrivateRoute;
