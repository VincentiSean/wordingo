import React from 'react';
import { Link } from 'react-router-dom';
import { fire, db } from '../config/Fire';

function ConfirmBtn(props) {

    // When button is clicked, submit terms/def to realtime db 
    // under 'all-decks' and the user's id
    function saveDeck() {
        let deck = props.deck;
        let userID = props.user;
        let deckTitle = props.title;
        let deckID = "";
        if (props.deckID === "") {
            deckID = `deck-${Date.now()}`;
        } else {
            deckID = props.deckID;
        }
        let numCards = deck.length;

        for (let i = 0; i < deck.length; i++) {
            for (let j = 0; j < 2; j++) {
                if (deck[i][j] === "") {
                    delete deck[i][0];
                    delete deck[i][1];
                    numCards--;
                }
            }
        }

        db.ref(`all-decks/${userID}/${deckID}`)
            .set({
                "title": deckTitle,
                "terms": deck,
                "deckID": deckID,
                "numCards": numCards
            })
    }
    
    return (
        <Link
            className="check-btn-link"
            to={{
                pathname: "/index.html",
                state: { user: props.user }
            }}
        >
            <button className="top-nav-btn" onClick={saveDeck}>
                <svg xmlns="http://www.w3.org/2000/svg" className="top-nav-svg icon icon-tabler icon-tabler-check" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#B3329C" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M5 12l5 5l10 -10" />
                </svg>
            </button>
        </Link>
    );

} 

export default ConfirmBtn
