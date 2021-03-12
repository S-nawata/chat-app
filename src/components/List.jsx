import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    root: {
        backgroundColor : "#EEE"
    },
    card: {
        width: "400px",
        margin: "10px",
        padding: "15px",
    }
    
});

const List = ({ messages }) => {
    const classes = useStyles();
    return(
    <ul>
            {messages.map((message) => {
                return (
                    <Card className={classes.card} key={message.id} >
                        {message.username}: {message.content}
                    </Card>
                )
            })}
    </ul>
    )
}
export default List ;