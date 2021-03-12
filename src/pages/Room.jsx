import { useContext, useEffect, useState} from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import firebase,　{ auth, db } from "../firebase/cofig";
import { AuthContext } from "../context/AuthContext";
import  Form  from "../components/Form";
import List from "../components/List";

const useStyles = makeStyles({
    root: {
        backgroundColor : "#EEE"
    },
});

const Room = () => {
    const classes = useStyles();
    const history = useHistory();
    const userState = useContext(AuthContext);
    const [messages, setMessages] = useState([]);
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

    const addChat = (text) => {
        db.collection("messages")
        .add({
            content: text,
            username: userState.user.displayName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
            console.log("送信成功")
        })
        .catch((e) => {
            console.log("送信失敗", e)
        })
    }

    useEffect(() => {
        db.collection("messages")
        .orderBy("createdAt")
        .onSnapshot((querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => {
                return {
                    ...doc.data(),
                    id: doc.id,
                };
        });
        setMessages(data);
        });
    },[])

    return (
        <div className={classes.root}>
        <h1>チャットルーム</h1>
        <Form addChat={addChat} />
        <List messages={messages} />
        <Button variant="contained" onClick={logout}>
            ログアウト
        </Button>
        </div>
    );
};

export default Room;