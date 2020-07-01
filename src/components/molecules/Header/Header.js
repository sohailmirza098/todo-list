import React from 'react';

import { Toolbar, AppBar, Typography } from '@material-ui/core/'
function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h1" >
                TodoList
            </Typography>
        </Toolbar>
        </AppBar>
    )
}

export default Header;