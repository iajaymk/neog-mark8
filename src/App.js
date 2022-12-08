import "./styles.css";
import React, { useState } from "react";

const emojiWorld = {
  "🤑": "Money Mouth Face",
  "😴": "Sleeping Face",
  "🤩": "Star Struck",
  "👿": "Angry Face",
  "😏": "Smirking Face",
  "😑": "Expressionless Face",
  "🤪": "Zany Face",
  "😝": "	squinting face with tongue",
  "😌": "Relieve Face",
  "😐": "Neutral Face",
  "😉": "Winking Face",
  "🥶": "Cold Face"
};

var emojistodisplay = Object.keys(emojiWorld);

function App() {
  const [meaning, setMeaning] = useState(" ");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiWorld[userInput];

    if (meaning === undefined) {
      meaning = "Sorry, we don't have that emoji in our database!";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(item) {
    var click = emojiWorld[item];
    setMeaning(click);
  }
  return (
    <div className="App">
      <h1 style={{ marginTop: "0px", paddingTop: "10px" }}>
        <span style={{ color: "black" }}>Emoji Interpreter</span>
      </h1>
      <input
        onChange={emojiInputHandler}
        placeholder="Enter your emoji here"
        style={{ padding: "10px" }}
      />
      <h2> {meaning} </h2>

      <h2>Emojis we know</h2>
      {emojistodisplay.map(function (item) {
        return (
          <span
            onClick={() => emojiClickHandler(item)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={item}
          >
            {item}{" "}
          </span>
        );
      })}
    </div>
  );
}

export default App;
