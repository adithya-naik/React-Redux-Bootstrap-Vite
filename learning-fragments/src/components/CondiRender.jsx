function CondiRender() {
  // let items = []
  let items = ["Seeds", "Sprouts", "Avacadro", "Nuts", "Veggis"];
  // if(items.length === 0){
  //     return <h3>No Items Here</h3>
  // }

  // let msg = (items.length === 0 ? <h3>No Items Here</h3> : null)
  return (
    <>
      <h1>Healthy Food</h1>
      {/* {msg} */}
      {items.length == 0 && <h3>No Items Here</h3>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default CondiRender;

// 3 ways
// if-else
// ternery operatr
// logical operator
