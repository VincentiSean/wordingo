import { useState, useEffect } from 'react';
import { fire, db } from '../config/Fire';

import BackBtn from './backBtn';

function Practice(props) {

    const [cards, setCards] = useState([]);
    const [initialRender, setInitialRender] = useState(0);

    useEffect(() => {
        if (initialRender === 0) {
            fetchDeck();
        }
    }, [initialRender])


    // Get the deck the user is trying to practice and set to 'cards'
    function fetchDeck() {
        db.ref(`all-decks/${props.location.state.user}/${props.location.state.deckID}/terms`).on("value", snapshot => {
            let deck = [];
            snapshot.forEach(snap => {
                deck.push(snap.val());
                console.log(snap.val());
            });
            setCards(deck);
            setInitialRender(1);
        });
    }


    return (
        <div className="practice-wrapper">
            <div className="top-nav">
                <BackBtn props={props} />            
            </div>
            <div className="practice-content-wrapper">

            </div>
        </div>
    );

} export default Practice

