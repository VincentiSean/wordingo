import React from 'react';
import { Link } from 'react-router-dom';

import Sets from './sets';
import Create from './create';

const BottomNav = ({ page, user }) => {

    // function handleClick(location) {
    //     console.log(location);
    
    //     if (location === "home") {
    //         page(<Sets user={user} />);
    //     } else if (location === "create") {
    //         page(<Create user={user} />);
    //     }
    // }
    console.log(user);

    return (
        <div className="nav-wrapper">
            <Link 
                className="nav-btn"
                to={{ 
                    pathname: "/index.html",
                    state: { user: user.uid }
                }}
            >
                <svg className="nav-svg icon icon-tabler icon-tabler-home" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#7165b9" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <polyline points="5 12 3 12 12 3 21 12 19 12" />
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                </svg>
            </Link>
            <Link 
                className="nav-btn"
                to={{ 
                    pathname: "/create",
                    state: { user: user.uid } 
                }}
            >
                <svg className="nav-svg icon icon-tabler icon-tabler-plus" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="2" stroke="#7165b9" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
            </Link>
            <Link 
                className="nav-btn" 
                to={{ pathname: "/account" }}
            >
                <svg className="nav-svg icon icon-tabler icon-tabler-user" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#7165b9" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="12" cy="8" r="4" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>  
            </Link>
        </div>
    );

} 

export default BottomNav
