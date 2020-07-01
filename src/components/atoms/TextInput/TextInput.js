import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default function TextInput(props) {
    return (
        // <TextField id="outlined-basic" name="title" label="Todo" onChange={props.onChange} onChange={props.onChange} value={props.title} autoComplete='off'  style={{flex:'10', padding: '5px'}} />
        <input type="text" name="title" placeholder="Add Todo..." style={{flex:'10', padding: '5px'}} value={props.title} onChange={props.onChange} autoComplete='off' />             
    )
}


