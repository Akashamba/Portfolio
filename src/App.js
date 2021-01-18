import React, {useState} from 'react';
import Homepage from './pages/homepage/homepage.component.jsx';
import Navbar from './components/navbar/navbar.component.jsx';
import Preloader from './components/preloader/preloader.component.jsx';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import './animations/load-in.css';

function App() {

    const [load, setLoad] = useState(false);
    
    window.setTimeout(() => setLoad(true), 1000)
    
    if(load)
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
    return (<Preloader/>)
}

export default App;
