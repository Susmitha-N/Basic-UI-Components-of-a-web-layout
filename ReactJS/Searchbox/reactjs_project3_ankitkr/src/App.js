import logo from './logo.svg';
import './App.css';
import React, { usestate, useRef } from 'react';
import css from './searchbox.css'
function App() {

      let x=useRef();
      let x1=useRef();
      function click(){
        x.current.style.border="2px solid  rgb(44, 6, 94)";
         x1.current.style.display="block";
         x.current.placeholder="";
      }
     return(
        <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=\, initial-scale=1.0" />
        <title>Searchbox</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="searchbox.css" />
        <div>
          <input type="text" id="inp" placeholder="Search..."onClick={click} ref={x}/>
      <i style={{fontSize: '25px'}} className="fa"></i> 
      <h5 ref={x1}>Search</h5>
        </div>
      </div>
     );
}
export default App;
