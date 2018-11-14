import * as React from 'react';

import {AppBar, Button, Toolbar, Typography} from '@material-ui/core/';
import {Link} from 'react-router-dom';

import '../App.css';

export const NavBar: React.StatelessComponent<{}> = () => {

    return (
        <div id='nav-bar'>
            <AppBar position='static' color='default'>
                <Toolbar>
                    <span id='navbar-title'>
                        <Typography variant='title' color='default'>
                            Bible Keep
                        </Typography>
                    </span>
                    <Link to="/">
                        <Button size="large" color="primary" variant="text">Notes</Button>
                    </Link>
                    <Link to="/About">
                        <Button size="large" color="primary" variant="text">About</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}