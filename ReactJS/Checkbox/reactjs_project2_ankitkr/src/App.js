import logo from './logo.svg';
import './App.css';
import React, { usestate, useRef } from 'react';
import css from './Checkbox.css';
function App() {
    let x1=useRef();
    let x2=useRef();
    let x3=useRef();
    let x4=useRef();
    let x5=useRef();
    return(
        <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="checkbox.css" />
        <title>Document</title>
        <div className="box">
            <div className="input1" onClick={()=>x1.current.checked=!(x1.current.checked)}>
                <p>Option 1</p>
                <input type="checkBox" className="inpx" id="inp1" onClick={()=>x1.current.checked=!(x1.current.checked)}  ref={x1}  />
            </div>
            <div className="input1" onClick= {()=>x2.current.checked=!(x2.current.checked)}>
                <p>Option 2</p>
                <input type="checkBox" className="inpx" id="inp2"  onClick={()=>x2.current.checked=!(x2.current.checked)} ref={x2}/>
            </div>
            <div className="input1" onClick={()=>x3.current.checked=!(x3.current.checked)}>
                <p>Option 3</p>
                <input type="checkBox" className="inpx" id="inp3" onClick={()=>x3.current.checked=!(x3.current.checked)} ref={x3}  />
            </div>
            <div className="input1" onClick= {()=>x4.current.checked=!(x4.current.checked)}>
                <p>Option 4</p>
                <input type="checkBox" className="inpx" id="inp4" onClick= {()=>x4.current.checked=!(x4.current.checked)} ref={x4}/>
            </div>
            <div className="input1" onClick= {()=>x5.current.checked=!(x5.current.checked)}>
                <p>Option 5</p>
                <input type="checkBox" className="inpx" id="inp5" onClick= {()=>x5.current.checked=!(x5.current.checked)} ref={x5} />
            </div>
        </div>
    </div>
    );
}
export default App;
