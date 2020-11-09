import React, { useEffect } from 'react';

function NewWord(props) {

    useEffect(() => {
        
    }, [props.term]);

    // Send new term/def information with the associated number
    // Parent element will split the number and determine where to assign
    // the info (term: 0, def: 1)
    function handleChangeTerm(event, num) {
        props.onChange(num + event.target.value);
    }

    return (
        <div className="new-word-wrapper">
            <input
                className="new-word top-input"
                type="text"
                placeholder="term"
                maxLength="25"
                value={props.term}
                onChange={(e) => handleChangeTerm(e, 0)}
            />
            <input
                className="new-word bottom-input"
                type="text"
                placeholder="definition or translation"
                maxLength="25"
                value={props.def}
                onChange={(e) => handleChangeTerm(e, 1)}
            />
        </div>
    );

} 

export default NewWord
