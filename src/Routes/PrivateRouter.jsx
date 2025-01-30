import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({children}) => {
    const {loading,user} = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <span className="loading loading-bars loading-md"></span>
    }
    if (user) {
        return children 
    }
    return <Navigate to='/logIn' state={location.pathname} ></Navigate>
};

export default PrivateRouter;