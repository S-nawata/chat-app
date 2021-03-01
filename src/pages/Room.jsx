import { Button } from "@material-ui/core";
import { auth } from "../firebase/cofig"
import { useHistory } from "react-router-dom";

const Room = () => {
    const history = useHistory();
    const logout = () => {
        auth
        .signOut()
        .then(() => {
           console.log("ログアウトしました");
           history.push("./login"); 
        })
        .catch(() => {
           console.log("ログアウトに失敗しました");
        });
    };

    return (
        <>
        <h1>Room</h1>
        <Button variant="contained" onClick={logout}>
            ログアウト
        </Button>
        </>
    );
};

export default Room;