function MapMethod(){
// when ever u use this type of list renderings --- a key--otherwise we will be getting a error in console
    let items = ['Seeds','Sprouts','Avacadro','Nuts','Veggis']
    return <>
    <h1>Healthy Food</h1>
    <ul className="list-group">
        {items.map((item) => (<li key={item} className="list-group-item">{item}</li>))}
    </ul>
  </>


}

export default MapMethod;