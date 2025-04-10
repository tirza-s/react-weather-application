import React from "react";
import Weather from "../src/Weather";

function App() {
  return (

    <div className="App">
      <Weather defaultCity="Brussels" />
      <footer>
        This project was coded by {" "}
        <a href="https://tirzasamosir.netlify.app/" target="_blank" rel="noopener noreferrer">Tirza Samosir</a>{" "} and is {" "}
        open-sourced on
        <a href="https://github.com/tirza-s" target="_blank" rel="noopener noreferrer"> github</a>
      </footer>

    </div >

  );

}

export default App;
