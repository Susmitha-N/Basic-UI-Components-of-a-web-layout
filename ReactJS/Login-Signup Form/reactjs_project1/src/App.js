import logo from './logo.svg';
import './App.css';
import './Login.css';
import React, { usestate, useRef } from 'react';
function App() {
    let x = useRef();
    let y = useRef();
    let p = useRef();
    let q = useRef();
    function mylogin() {
        x.current.style.backgroundColor = "rgb(133, 187, 175)";
        y.current.style.backgroundColor = "white";
        p.current.style.display = "block";
        q.current.style.display = "none";
    }
    function mysignup() {
        y.current.style.backgroundColor = "rgb(133, 187, 175)";
        x.current.style.backgroundColor = "white";
        q.current.style.display = "block";
        p.current.style.display = "none";
    }
    return (
        <div>
            <link rel="stylesheet" href="Login.css" />
            <title>Login/Signup Page</title>
            <div className="box">
                <button id="log" onClick={mylogin} ref={x}>Login</button>
                <h5 style={{ display: 'inline-block' }}>or</h5>
                <button id="signup" onClick={mysignup} ref={y}>Signup</button>
                <form action="some1.php" method="get" id="login" ref={p}>
                    <span style={{ fontSize: '16px', fontWeight: 'bold' }}>first name</span> <span style={{ marginLeft: '75px', fontSize: '16px', fontWeight: 'bold' }}>last name</span>
                    <input type="text" placeholder="first name" className="name" required />
                    <input type="text" placeholder="last name" className="name" required />
                    <h4 style={{ marginBottom: '0px' }}>Email</h4>
                    <input type="email" placeholder="email" style={{ display: 'block' }} required />
                    <h4 style={{ marginBottom: '0px' }}>create password</h4>
                    <input type="password" placeholder="Create password" style={{ display: 'block' }} required />
                    <h4 style={{ marginBottom: '0px' }}>confirm password</h4>
                    <input type="password" placeholder="Confirm password" style={{ display: 'block', marginBottom: '4px' }} required />
                    <input type="checkbox" required style={{ width: '15px', height: '15px' }} /><span>Accepting terms and condition</span>
                    <input type="submit" id="botton" defaultValue="Login" className="lastbutton" style={{ backgroundColor: 'rgb(133, 187, 175)', textAlign: 'center', marginLeft: '13px', marginTop: '10px', height: '40px' }} />
                </form>
                <form action="some2.php" method="get" id="sign" ref={q}>
                    <h4 style={{ marginBottom: '0px' }}>Email</h4>
                    <input type="email" placeholder="email" style={{ display: 'block' }} required />
                    <h4 style={{ marginBottom: '0px' }}>Password</h4>
                    <input type="password" placeholder="Confirm password" style={{ display: 'block', marginBottom: '4px' }} required />
                    <input type="checkbox" required style={{ width: '15px', height: '15px' }} /><span>remember me for a month</span>
                    <input type="submit" id="botton" defaultValue="Signup" className="lastbutton" style={{ backgroundColor: 'rgb(133, 187, 175)', textAlign: 'center', marginLeft: '13px', marginTop: '10px', height: '40px' }} />
                </form>

            </div>
        </div>
    );

}
export default App;
