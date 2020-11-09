import React, { useEffect } from 'react';

function NewWord(props) {

    useEffect(() => {
        console.log("child update");
    }, [props.term]);

    function handleChangeTerm(event, num) {
        props.onChange(num + event.target.value);
    }

    // function handleChangeDef(event) {
    //     props.onChange(event.target.value);
    // }

    // console.log(props);
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
