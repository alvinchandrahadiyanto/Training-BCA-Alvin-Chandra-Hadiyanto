import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ children }) => {
    const { isAuth } = useSelector((state) => state.users)

    if (!isAuth) {
        return <Navigate to="/Login" replace />
    }

    return children
}

export default PrivateRoute