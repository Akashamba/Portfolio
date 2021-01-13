import React from 'react';
import official from './assets/images/Official.jpg';

function App() {
  return (
    <div className="App">
        <img src={official} alt="Akash Ambashankar"/>

        <ul>
            My Stuff
            <li><a href="https://coronavirus-live-tracker.herokuapp.com/">Coronavirus Live Tracker</a></li>
            <li><a href="https://stanlee-tribute.netlify.app/">Stan Lee Tribute Page</a></li>
            <li><a href="https://akash-writes.blogspot.com/">My Blog</a></li>
    	</ul>
      
    </div>
  );
}

export default App;
