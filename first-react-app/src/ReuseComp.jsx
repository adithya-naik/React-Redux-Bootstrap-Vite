function ReuseComp(){
    let random = Math.random()*200;

    // here {} is used to insert variables name or method names 
    // so,to add inline CSS we use, {{}}

    return <p style={{'background-color' : '#454345'}}>Random Number : {random}</p>
}

export default ReuseComp;