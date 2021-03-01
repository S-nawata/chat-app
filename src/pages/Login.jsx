import { Link } from "react-router-dom"
import { Button, TextField} from "@material-ui/core";
import { makeStyles} from "@material-ui/core/styles";

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
    return (
        <form className={classes.root}>
        <h1>ログインページ</h1>
        <TextField fullWidth label="メールアドレス" variant="outlined"/>
        <TextField fullWidth label="パスワード" variant="filled"/>
        <Button fullWidth variant="contained" color="secondary">
            ログイン
        </Button>
        <Link to="./signup">アカウントをお持ちでない方</Link>
        </form>
    )
};

export default Login;