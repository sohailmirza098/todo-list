import React, { useState } from 'react';
import TextInput from '../../atoms/TextInput/TextInput';

export default function AddTodo(props) {

    const [title, setTitle] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();
        props.addTodo(title);
        setTitle('');
    }

    return (
        <form data-testid="addtodoid" style={{display:'flex'}} onSubmit={ onSubmit }>
            <TextInput title={title} onChange={(e) => setTitle(e.target.value)}  />
        </form>
    )
}

