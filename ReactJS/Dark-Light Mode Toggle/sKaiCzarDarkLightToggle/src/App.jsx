import React, { useState, useEffect } from "react";

const getStorage = () => {
  let theme = "light-theme"

  if(localStorage.getItem('theme')){
    theme = localStorage.getItem('theme');
  }
  return theme;
}

function App() {
  let [theme,setTheme] = useState(getStorage())

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme);
  },[theme]);

const changeTheme = () => {
      theme==="light-theme" ? setTheme("dark-theme") : setTheme("light-theme")

  }
  return (
    <main>
      <nav>
        <div className="container">
          <h1>React Dark/Light</h1>
          <button className="btn" onClick={changeTheme}>Change</button>
        </div>
      </nav>
      </main>
  )
}

export default App
