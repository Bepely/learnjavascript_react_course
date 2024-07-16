function Tab({text, callback, disabled}) {

    return ( 
    <button disabled={disabled} onClick={callback}>
        {text}
    </button> );
}

export default Tab;