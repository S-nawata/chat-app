import { useState } from "react";
import { Link , useHistory} from "react-router-dom"
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
})
const Login = () => {
    const classes= useStyles();
    const history = useHistory();
    const [email, setEmail] =useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log("ログインに成功しました");
                history.push("/");
            })
            .catch((error) => {
                console.log("ログインに失敗しました", error)
            })
    };

    return (
        <form className={classes.root} onSubmit={handleSubmit}>
        <h1>ログインページ</h1>
        <TextField 
            fullWidth 
            label="メールアドレス" 
            variant="outlined"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
        <TextField 
        type="password"
            fullWidth 
            label="パスワード" 
            variant="filled"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />
        <Button type="submit"  fullWidth variant="contained" color="secondary">
            ログイン
        </Button>
        <Link to="./signup">アカウントをお持ちでない方</Link>
        </form>
    )
};

export default Login;