import React, { useState } from 'react';
// import fire from '../config/Fire';

import BottomNav from './bottomNav';
import Sets from './sets';

function Home(props) {

    const [page, setPage] = useState(<Sets />);

    // function logout() {
    //     fire.auth().signOut().then(function() {
    //       }, function(error) {
    //         console.error('Sign Out Error', error);
    //       });
    // }

    return (
        <div className="home-wrapper">
            {page}
            {/* <button onClick={logout}>Sign Out</button> */}
            <BottomNav user={props.user} page={newPage => setPage(newPage)} />
        </div>
    );

} export default Home


// Change system to React-Router dummy, don't reinvent the wheel...so convoluted