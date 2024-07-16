function Tab({text, callback, currentRestaraunt}) {

    return ( 
    <button disabled={text==currentRestaraunt.name?true:false} onClick={callback}>
        {text}
    </button> );
}

export default Tab;