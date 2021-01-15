import React from 'react';
import Homepage from './pages/homepage/homepage.component.jsx';
import {AppBar, Toolbar} from '@material-ui/core'
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import './animations/load-in.css';

function App() {
    
    return (
        <div className="App">
            <AppBar position="fixed"><Toolbar><p className="appbar-text">Akash</p></Toolbar></AppBar>
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route><Redirect to='/'/></Route>
            </Switch>
        
        </div>
    );
}

export default App;
