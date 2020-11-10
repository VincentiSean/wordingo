import React, { useState, useEffect } from 'react';
import { fire, db } from '../config/Fire';

import NewWord from './newWord';
import AddAnother from './addAnother';
import ConfirmBtn from './confirmBtn';

function Create(props) {
    
    const [cards, setCards] = useState([["",""]]);
    const [numCards, setNumCards] = useState(0);
    const [changeTerm, setChangeTerm] = useState(0);
    const [deckTitle, setDeckTitle] = useState("");
    const [deckID, setDeckID] = useState("");

    
    // numCards is used to rerender
    // checks if deckID is already set and if so, fetch deck (user is here to edit not create new deck)
    useEffect(() => {
        let tempDeckID = props.location.state.deckID;
        if (numCards <= 1) {
            if (tempDeckID !== "") {
                setDeckID(tempDeckID);
                fetchDeck();
            }
        }
    }, [numCards, changeTerm, props.location.state.deckID]);

    // Fetches the deck (specifically, the terms) to edit
    function fetchDeck() {
        console.log("fetching....")

        // Get decks terms and add to 'cards'
        db.ref(`all-decks/${props.location.state.user}/${deckID}/terms`).on("value", snapshot => {
            let deck = [];
            snapshot.forEach(snap => {
                deck.push(snap.val());
            });
            setCards(deck);
            setNumCards(deck.length + 1);
        });

        // Get deck title and add to 'deckTitle'
        db.ref(`all-decks/${props.location.state.user}/${deckID}/title`).on("value", snapshot => {
            setDeckTitle(snapshot.val());
        });
    }

    // Update deck title when user types in deck title textbox
    function titleChange(event) {
        setDeckTitle(event.target.value);
    }
    
    // When button is clicked, add another blank double input for another term/def
    // setNumCards triggers rerender with useEffect
    const addMore = () => {
        let currCards = cards;
        currCards.push(["", ""]);
        setCards(currCards);
        setNumCards(numCards + 1);
    }

    // When a textbox updates with a new char, get new char and determine if it 
    // should be assigned to 
    // term(0) or def(1) 
    // for that specific term/def array
    function handleChangeTerm(newTerm, key) {
        let editCards = cards;
        if (newTerm.charAt(0) === "0") {
            editCards[key][0] = newTerm.split("0")[1];
        } else if (newTerm.charAt(0) === "1") {
            editCards[key][1] = newTerm.split("1")[1];
        }
        setCards(editCards);
        setChangeTerm(changeTerm + 1);
    }
    
    return (
        <div className="create-wrapper">
            <div className="top-nav">
                <button className="top-nav-btn">
                    <svg className="top-nav-svg icon icon-tabler icon-tabler-arrow-narrow-left" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#B3329C" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="5" y1="12" x2="9" y2="16" />
                        <line x1="5" y1="12" x2="9" y2="8" />
                    </svg>
                </button>
                <ConfirmBtn 
                    user={props.location.state.user}
                    title={deckTitle} 
                    deck={cards}
                    deckID={deckID}
                />
            </div>
            <div className="create-input-wrapper">
                <input 
                    className="deck-title-input" 
                    type="text" 
                    placeholder="Deck Title"
                    maxLength="15"
                    value={deckTitle}
                    onChange={titleChange}
                    required
                />
            </div>
            {Object.keys(cards)
                .map((key, index) => (
                    <NewWord key={index} term={cards[key][0]} def={cards[key][1]} onChange={(e) => handleChangeTerm(e, index)} />
                ))
            }
            <button className="add-more-btn" onClick={addMore}>
                <AddAnother />
            </button>
        </div>
    );

} export default Create
