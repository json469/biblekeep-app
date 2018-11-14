import * as React from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';

import App from '../App'
import About from './About';
import Notes from './Notes';
import {NavBar} from './NavBar'

export const AppRouter: React.StatelessComponent<{}> = () => {
    
    return (

        <HashRouter>
            <div>
                <NavBar />
                    <main>
                        <Switch>
                            <Route exact={true} path='/' component={App} />
                            <Route exact={true} path='/' component={Notes} />
                            <Route exact={true} path='/About' component={About} />
                        </Switch>
                    </main>
            </div>
        </HashRouter>
    );
}

export default AppRouter