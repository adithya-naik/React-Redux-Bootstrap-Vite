import IndiviItem from "./IndiviItem";
function Items({Listitems}){
    // while passing-it comes asa a props
// object descturct thi karna hi padega
    return <>
    <ul className="list-group my-item">
        {Listitems.map((item) => (
          <IndiviItem key={item} indiitem = {item}></IndiviItem>
        ))}
      </ul>
    </>
}

export default Items;