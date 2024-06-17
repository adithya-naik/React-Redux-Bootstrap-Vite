// import React from 'react'        use this for first type of using
import './App.css'
// import MapMethod from './components/MapMethod';
// import CondiRender from './components/CondiRender';
import Items from './components/Items';
import ErrorMessage from './components/ErrorMessage';


function App() {
  // any component can return only one tag(div/list or any other thing)
  // in general what we did till now is ,when ever we want more componets ,we wrapped them in a div-->but,this div dirents renders into the main.jsx,which creats a extra unuseful div
  // so we use frangments to avoid the problem
// fragments are used to wrap multiple cildrens ina single parent,and when we use this component in the main.jsx, it will understand that all this childs are a part of a parent and it doesnt shows the parent
// to use a fragment
  //   1.import react from react
  //     and <>react.Fragment</>
  //   2.simpily,use <> and </>
  // return <div>

  // here,we can wrap this h1 and ul in a div,buy ,aap ne samjha uska kya,disadvantage hai,so we will wrap this in a fragment

// ********************************

  // return <React.Fragment>
  //   <h1>Healthy Food</h1>
  //   <ul class="list-group">
  //   <li class="list-group-item">An item</li>
  //   <li class="list-group-item">A second item</li>
  //   <li class="list-group-item">A third item</li>
  //   <li class="list-group-item">A fourth item</li>
  //   <li class="list-group-item">And a fifth one</li>
  //  </ul>
  // </React.Fragment>

  // ***********************************

  // return <>
    {/* <h1>Healthy Food</h1>
    <ul class="list-group">
    <li class="list-group-item">Seeds</li>
    <li class="list-group-item">Sprouts</li>
    <li class="list-group-item">Avacadro</li>
    <li class="list-group-item">Nuts</li>
    <li class="list-group-item">Veggis</li>
    </ul> */}
    {/* <MapMethod></MapMethod> */}
    {/* <CondiRender></CondiRender> */}
  // </>

  let items = ["Seeds", "Sprouts", "Avacadro", "Nuts", "Veggis",'Ghee','Fruits'];


  return <>
    <h1 className='my-head'>Healthy Food</h1>
    <ErrorMessage Listitems = {items}></ErrorMessage>
    <Items Listitems = {items}></Items>
      
  </>

  
}

export default App;
