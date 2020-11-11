import React, { useState, useEffect } from 'react';
import { fire, db } from '../config/Fire';
import { Link } from 'react-router-dom';

import Boy from '../images/day29-selfie-boy.png';

function Sets(props) {

    const [userDecks, setUserDecks] = useState([]);

    useEffect(() => {
        if (props.user) {
            fetchSets();
        }
    }, [props.user])

    function fetchSets() {
        db.ref(`all-decks/${props.user}`).on("value", snapshot => {
            let allDecks = [];
            snapshot.forEach(snap => {
                allDecks.push(snap.val());
            });
            setUserDecks(allDecks);
        });
    }


    return (
        <div className="sets-wrapper">
            <h3 className="page-title">Your Sets</h3>
            {userDecks.length > 0
                ? userDecks.map((deck) => (
                    <div key={deck.deckID} className="each-set-wrapper">
                        <div className="set-top-wrapper">
                            <img className="set-image" src={Boy} alt="cartoon boy selfie" />
                            <div className="set-text-wrapper">
                                <h3 className="set-title">
                                    {deck.title}
                                </h3>
                                <p className="set-num-terms">
                                    {deck.numCards} terms
                                </p>
                            </div>
                        </div>
                        <div className="set-bttm-wrapper">
                            <Link 
                                className="practice-btn" 
                                to={{ 
                                    pathname: `/practice/${deck.title}`,
                                    state: {
                                        user: props.user,
                                        deckID: deck.deckID
                                    }
                                }}
                            >
                                Practice
                            </Link>
                            <Link 
                                className="edit-btn"
                                to={{ 
                                    pathname: "/create",
                                    state: { 
                                        user: props.user,
                                        deckID: deck.deckID
                                    } 
                                }}
                            >
                                Edit
                            </Link>
                        </div>
                    </div>
                ))
                : <></>
            }
        </div>
    );

} export default Sets
