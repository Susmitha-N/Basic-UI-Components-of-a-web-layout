import React, { useState } from "react";
import "./MainPage.css";

export default function Main_page() {
  const [len, setText] = useState("");
  const [password, setText1] = useState("");
  const [shows, setText2] = useState("");

  const createPass = () => {
    let s =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%!-&*abcdefghijklmnopqrstuvwxyz";
    let i = 0;
    let pass = "";

    while (i < len) {
      let gen = s[Math.floor(Math.random() * s.length)];
      pass += gen;
      i++;
    }

    setText1(pass);
  };

  const blink = () => {
    setText2("show");
    setTimeout(() => {
      setText2("");
    }, 2500);
  };

  const copy = () => {
    if (password.length === 0) return;
    navigator.clipboard.writeText(password);
    blink();
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") createPass();
  };

  return (
    <div onKeyDown={handleKeyDown}>
      <div className="row">
        <h1>
          <strong>Password Generator</strong>
        </h1>
      </div>

      <div className="row">
        <input
          type="number"
          className="form-control"
          value={len}
          onChange={handleOnChange}
          id="pass-length"
          placeholder="Enter length of password"
        />

        <button className="btn" onClick={createPass}>
          Enter
        </button>
      </div>

      <div className="row">
        <input
          type="text"
          className="form-control"
          disabled="disabled"
          value={password}
          placeholder="Your password"
        />

        <button className="btn" onClick={copy}>
          Copy
        </button>
      </div>
      <div id="toast" className={shows}>
        Password Copied !
      </div>
    </div>
  );
}
