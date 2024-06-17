import MyButton from "./MyButton";
import Hello from "./Hello";
import ReuseComp from "./ReuseComp";

function App(){
  return <div>
    <h1>Iam learnig React</h1>
    {/* we need to open and close the tags */}

    {/* <Hello /> */}
    {/* the above line is used to open and close in single word */}

    <MyButton></MyButton>
    <Hello></Hello>
    <ReuseComp></ReuseComp>
    <ReuseComp></ReuseComp>
    <ReuseComp></ReuseComp>
    <ReuseComp></ReuseComp>
    <ReuseComp></ReuseComp>
    <ReuseComp></ReuseComp>
    <ReuseComp></ReuseComp>
  </div>
}
export default App;