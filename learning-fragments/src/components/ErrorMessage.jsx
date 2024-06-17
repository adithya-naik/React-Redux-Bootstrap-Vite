function ErrorMessage(Listitems){

    
    return <>
    {Listitems.length == 0 && <h3>No Items Here</h3>}
    </>
}

export default ErrorMessage;