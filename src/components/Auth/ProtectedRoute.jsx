import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const ProtectedRoute = ({ allowedRoles }) => {
  const { userInfo, isAuthenticated } = useAuth();
  const location = useLocation();
  return isAuthenticated &&
    userInfo?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : isAuthenticated ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
