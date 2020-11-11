import React, { useState } from 'react';
import { 
    BrowserRouter as Router,
    Switch, 
    Route
} from 'react-router-dom';

import BottomNav from './bottomNav';
import Sets from './sets';
import Create from './create';
import Practice from './practice';

function Home(props) {

    const [user, setUser] = useState(props.user);
    
    // function logout() {
    //     fire.auth().signOut().then(function() {
    //       }, function(error) {
    //         console.error('Sign Out Error', error);
    //       });
    // }
    
    return (
        <Router>
            <div className="home-wrapper">
                <Switch>
                    <Route exact path="/index.html" component={props => <Sets user={user.uid} />}></Route>
                    <Route exact path="/create" component={props => <Create {...props}/>} />
                    <Route exact path="/practice/:deckTitle" component={props => <Practice {...props} />}></Route>
                </Switch>
                {/* <button onClick={logout}>Sign Out</button> */}
                <BottomNav user={props.user} />
            </div>
        </Router>
        
    );

} export default Home

