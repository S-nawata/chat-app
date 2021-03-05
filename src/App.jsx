import {BrowserRouter, Switch, Route} from "react-router-dom";
//ページのインポート
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Room from "./pages/Room";

import { AuthProvider } from "./context/AuthContext";
import  LoggedInRoute from "./components/LoggedInRoute";

const App = () => {
    return (
    <AuthProvider>
        <BrowserRouter>
            <Switch> 
                <Route exact path= "/login">
                    <Login />   
                </Route>
                <Route exact path = "/signup">
                    <Signup />
                </Route>
                <Route exact path= "/">
                    <LoggedInRoute>
                        <Room />
                    </LoggedInRoute>
                </Route>
            </Switch>
        </BrowserRouter>
    </AuthProvider>
    );
};
export default App;