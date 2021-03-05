import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Loading from  "./Loading" ;

const LoggedInRoute = ({ children }) => {
    const userState = useContext(AuthContext);
    if(userState.loding) {
        return <Loading />;
    }

    if (userState.user === null) {
        return <Redirect to ="/login" />;
    }

    return children;
};

export default LoggedInRoute;
