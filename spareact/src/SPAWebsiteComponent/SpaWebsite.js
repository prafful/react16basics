import React from 'react';
import { HashRouter, NavLink, Route } from "react-router-dom";
import Home from './Home'
import About from './About'
import Friends from './Friends'

class SpaWebsite extends React.Component {
   
    render() { 
        return ( 
            <HashRouter>
                <div>
                    <h1>SPA in React</h1>
                    <ul>
                        <li><NavLink exact  to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/friends">Friends</NavLink></li>
                    </ul>
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/friends" component={Friends}/>

                    </div>

                </div>
            </HashRouter>
         );
    }
}
 
export default SpaWebsite;