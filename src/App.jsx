import { Fragment} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
//ページのインポート
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Room from "./pages/Room";

const App = () => {
    return (
        <BrowserRouter>
            <Switch> 
                <Route exact path= "/">
                    <Room />
                </Route>
                <Route exact path= "/login">
                    <Login />   
                </Route>
                <Route exact path = "/signup">
                    <Signup />
                </Route>
            
            </Switch>
        </BrowserRouter>
    );
};
export default App;