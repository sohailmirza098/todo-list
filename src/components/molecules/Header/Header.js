import React from 'react';

import { Toolbar, AppBar, Typography, Button } from '@material-ui/core/'


// const headerStyle = {
//     background: '#333',
//     color: '#fff',
//     textAlign: 'center',
//     padding: '10px'
// }


function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h1" >
                TodoList
            </Typography>
        </Toolbar>
        </AppBar>
        // {/* <header style={headerStyle} > */}
            // <h1>TodoList</h1>
        // {/* </header> */}
        // </AppBar>
    )
}

export default Header;