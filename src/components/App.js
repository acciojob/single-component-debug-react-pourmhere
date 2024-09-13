import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [str, setStr] = useState("");
  // let str = "";
  function handleClick(e) {
    setStr("Hello " + e.target.value + "!");
    console.log(str);
  }
  return (
    <div id="main">
      {/* Do not remove the main div */}
      <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
    </div>
  );
};

export default App;
