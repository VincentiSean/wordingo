import React from 'react';
import { fire, db } from '../config/Fire';

function ConfirmBtn(props) {

    function saveDeck() {
        let deck = props.deck;
        let userID = props.user.uid;
        let deckID = `deck-${Date.now()}`;

        db.ref(`all-decks/${userID}/${deckID}`)
            .set({
                "title": "this title",
                "terms": deck
            })
    }

    return (
        <button className="top-nav-btn" onClick={saveDeck}>
            <svg xmlns="http://www.w3.org/2000/svg" className="top-nav-svg icon icon-tabler icon-tabler-check" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#B3329C" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 12l5 5l10 -10" />
            </svg>
        </button>
    );

} 

export default ConfirmBtn
