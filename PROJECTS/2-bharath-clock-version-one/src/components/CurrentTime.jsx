let CurrentTime = ()=>{
let time = new Date();

    return <p className="lead">The Current time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
}

export default CurrentTime;