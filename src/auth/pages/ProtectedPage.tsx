import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '~auth/core/authContext';

const ProtectedPage = () => {
    const { accessToken, loading } = useAuth();

    if (loading) return <div>Loading...</div>

    if (!accessToken) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}

export default ProtectedPage