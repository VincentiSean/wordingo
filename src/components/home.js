import React from 'react';
import { 
    BrowserRouter as Router, 
    Switch, 
    Route
} from 'react-router-dom';
// import fire from '../config/Fire';

import BottomNav from './bottomNav';
import Sets from './sets';
import Create from './create';

function Home(props) {

    // function logout() {
    //     fire.auth().signOut().then(function() {
    //       }, function(error) {
    //         console.error('Sign Out Error', error);
    //       });
    // }
    console.log(props.user);
    return (
        <Router>
            <div className="home-wrapper">
                <Switch>
                    <Route exact path="/index.html" component={props => <Sets />}></Route>
                    <Route exact path="/create" component={props => <Create {...props}/>} />
                </Switch>
                {/* {page} */}
                {/* <button onClick={logout}>Sign Out</button> */}
                <BottomNav user={props.user} />
            </div>
        </Router>
        
    );

} export default Home

