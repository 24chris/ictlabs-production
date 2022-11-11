import { Outlet, Navigate} from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const PrivateRoute = ({children, ...rest}) => {
    let {user} = useContext(AuthContext)
    return(
        // <Route  {...rest}>{!user ? <Navigate to="/login" /> :   children}</Route>
        
       user.authtokens ?<Navigate to="/login"/> : <Outlet/>



    )
}

export default PrivateRoute;