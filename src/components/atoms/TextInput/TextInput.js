// import React from 'react'

// export default function TextInput(props) {
//     return (
//         <input data-testid="texttodo" type="text" name="title" placeholder="Add Todo..." style={{flex:'10', padding: '5px'}} value={props.title} onChange={props.onChange} autoComplete='off' />             
//     )
// }


import React from 'react'

const TextInput = (props) => {
    return(
        <input data-testid="texttodo" type="text" name="title" placeholder="Add Todo..." style={{flex:'10', padding: '5px'}} value={props.title} onChange={props.onChange} autoComplete='off' />
    );
}

export default TextInput; 