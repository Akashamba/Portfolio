import React from 'react';
import Homepage from './pages/homepage/homepage.component.jsx';
import Navbar from './components/navbar/navbar.component.jsx';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import './animations/load-in.css';

function App() {
    
    return (
        <div className="App">
            <div id="home"></div>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route><Redirect to='/'/></Route>
            </Switch>
        
        </div>
    );
}

export default App;
