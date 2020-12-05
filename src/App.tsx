import React from "react";
import "./App.css";
import GuessedWords from "./conmponents/GuessedWords";
import Congrats from "./conmponents/Congrats";
import Input from "./conmponents/Input";

function App() {
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <Input />
      <GuessedWords
        guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
      />
    </div>
  );
}

export default App;
