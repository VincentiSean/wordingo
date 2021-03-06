
function BackBtn(props) {
    return (
        <button className="top-nav-btn" onClick={props.props.history.goBack}>
            <svg className="top-nav-svg icon icon-tabler icon-tabler-arrow-narrow-left" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#B3329C" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="5" y1="12" x2="9" y2="16" />
                <line x1="5" y1="12" x2="9" y2="8" />
            </svg>
        </button>
    );

} export default BackBtn

