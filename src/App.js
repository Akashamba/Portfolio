import React from 'react';
import Photo from './pages/photo/photo.component.jsx';
import Homepage from './pages/homepage/homepage.component.jsx';
import {Switch, Route, Redirect} from 'react-router-dom';

function App() {
    
    return (
        <div className="App">
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route exact path='/profile-picture' component={Photo} />
                <Route><Redirect to='/'/></Route>
            </Switch>
        
        </div>
    );
}

export default App;
