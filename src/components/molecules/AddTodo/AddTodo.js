// import React, { Component } from 'react'
// import PropTypes from 'prop-types';
// import TextInput from '../../atoms/TextInput/TextInput';
// import ButtonInput from '../../atoms/ButtonInput/ButtonInput';

// export class AddTodo extends Component {
//     state = {
//         title: ''
//     }

//     onChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     onSubmit = (e) => {
//         e.preventDefault();
//         this.props.addTodo(this.state.title);
//         this.setState({ title: ''})
//     }

//     render() {
        // return (
        //     <form style={{display:'flex'}} onSubmit={this.onSubmit}>
        //         <TextInput title={this.state.title} onChange={this.onChange} />
        //         <ButtonInput />
        //     </form>
        // )
//     }
// }

// PropTypes
// AddTodo.propTyes = {
//     addTodo: PropTypes.func.isRequired
// }

// export default AddTodo

import React, { useState } from 'react';
import TextInput from '../../atoms/TextInput/TextInput';
import ButtonInput from '../../atoms/ButtonInput/ButtonInput';



export default function AddTodo(props) {

    const [title, setTitle] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();
        props.addTodo(title);
        setTitle('');
    }

    // const onChange = (e) => {
    //     console.log(e.target);
    //     setTitle(e.target.value);
    // }

    return (
        
        // <form  noValidate autoComplete="off" onSubmit={ onSubmit }>
        //     <TextField id="standard-basic" label="Standard" onChange={onChange} style={{display:'flex'}} />
        //     {/* <ButtonInput /> */}
        // </form>
        <form style={{display:'flex'}} onSubmit={ onSubmit }>
            <TextInput title={title} onChange={(e) => setTitle(e.target.value)}  />
            {/* <ButtonInput /> */}
            
        </form>
    )
}

