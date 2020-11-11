import React, { useState, useEffect } from 'react';
import { fire, db } from '../config/Fire';

import NewWord from './newWord';
import AddAnother from './addAnother';
import ConfirmBtn from './confirmBtn';
import BackBtn from './backBtn';

function Create(props) {
    
    const [cards, setCards] = useState([["",""]]);
    const [numCards, setNumCards] = useState(0);
    const [changeTerm, setChangeTerm] = useState(0);
    const [deckTitle, setDeckTitle] = useState("");
    const [deckID, setDeckID] = useState("");
    const [displayConfirm, setDisplayConfirm] = useState(false);

    
    // numCards is used to rerender
    // checks if deckID is already set and if so, fetch deck (user is here to edit not create new deck)
    useEffect(() => {
        let tempDeckID = props.location.state.deckID;
        if (numCards <= 1) {
            if (tempDeckID !== "") {
                setDeckID(tempDeckID);
                setDisplayConfirm(true);
                fetchDeck();
            }
        }

    }, [numCards, changeTerm, props.location.state.deckID, displayConfirm]);


    // Fetches the deck (specifically, the terms) to edit
    function fetchDeck() {

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


    // Checks to see if at least one term/def is filled out and there is a deck title
    // If so, display the check button, else don't 
    function checkConfirm() {
        if (deckTitle !== "" && numCards > 0) {
            setDisplayConfirm(true);
            setChangeTerm(changeTerm + 1);
        } else {
            setDisplayConfirm(false);
        }
    }


    // Update deck title when user types in deck title textbox
    function titleChange(event) {
        setDeckTitle(event.target.value);
        checkConfirm();
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
        checkConfirm();
    }
    
    console.log(props);
    
    return (
        <div className="create-wrapper">
            <div className="top-nav">
                <BackBtn props={props} />
                {displayConfirm
                    ? <ConfirmBtn 
                        user={props.location.state.user}
                        title={deckTitle} 
                        deck={cards}
                        deckID={deckID}
                    />
                    : <></>
                }
                
            </div>
            <div className="create-input-wrapper">
                <input 
                    className="deck-title-input" 
                    type="text" 
                    placeholder="Deck Title"
                    maxLength="15"
                    value={deckTitle}
                    onChange={titleChange}
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
