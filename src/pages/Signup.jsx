import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, TextField} from "@material-ui/core";
import { makeStyles} from "@material-ui/core/styles";
import { auth } from "../firebase/cofig";

const useStyles = makeStyles ({
    root: {
        margin: "0 auto",
        width: "350px",
        height: "370px",
        display: "flex",
        flexDirection: "column",
        justifycontnt: "space-between",
    }
});

//サインアップ昨日
//ユーザー名、メールアドレス、パスワードを入力してその値をfirebaseの認証機能に保存
//登録ボタンが押されたら、各inputの入力内容を取得できる

const Signup = () => {
    const classes= useStyles();
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then(({ user }) => {
            //createUserWithEmailAndPasswordメソッドが成功した時
            user
                .updateProfile({ displayName: username})
                .then(() => {
                    //Room.jsxのページへ遷移する
                    console.log("ユーザー作成成功しました", user);
                    history.push("/")
                })
                .catch((error) => {
                    console.log("username設定失敗", error);
                });
        })
        .catch((error) => {
            //createUserWithEmailAndPassword
            console.log("user作成失敗", error)
        });

        // console.log(email);
        // console.log(password);
        // console.log(username);

    };

    return (
        <form onSubmit={handleSubmit} className={classes.root}>
        <h1>ユーザー登録ページ</h1>
        <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            fullWidth 
            label="メールアドレス" 
            variant="outlined"
         />
        <TextField 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            fullWidth 
            label="パスワード" 
            variant="filled"
        />
        <TextField
            value={username}
            onChange={(e)=> setUsername(e.target.value)} 
            fullWidth 
            label="ユーザーネーム" 
            variant="standard"
        />
        <Button  type ="submit" fullWidth variant="contained" color="primary">
            登録
        </Button>
        <Link to="./Login">アカウントを既にお持ちの方</Link>
        </form>
    )
};

export default Signup;