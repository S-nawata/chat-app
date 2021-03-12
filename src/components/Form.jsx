import { useState } from "react"
import { TextField, Button } from "@material-ui/core";


const Form = ({addChat}) => {
    const [text, setText]= useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addChat(text);
    }
    return(
        <form onSubmit ={handleSubmit}>
        <TextField
            value={text}
            onChange={(e) => setText(e.target.value)} 
            variant="outlined" 
            label="チャット"
        />

        <Button type="submit" variant="contained" color="primary">
            送信
        </Button>
    </form>
    )
}

export default Form;