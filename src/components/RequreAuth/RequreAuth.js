import { getAuth } from 'firebase/auth';
import { Navigate, useLocation } from 'react-router-dom';
import app from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth'


const auth = getAuth(app);
const RequreAuth = ({ children }) => {
    const location = useLocation();
    const [user] = useAuthState(auth)
    if (!user) {
        return <Navigate to='/profile' state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default RequreAuth;