import { useState } from "react";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");
  const [meaning, setMeaning] = useState("");

  const emojiDictionary = {
    "🐅": "Tiger",
    "🐆": "Leopard",
    "🐴": "Horse Face",
    "🐎": "Horse",
    "🦄": "Unicorn",
    "🦓": "Zebra",
    "🦌": "Deer",
    "🐮": "Cow Face",
    "🐂": "Ox",
    "🐃": "Water Buffalo",
    "🐄": "Cow",
  };

  const emojis = Object.keys(emojiDictionary);

  const emojiInputHandler = ({ target }) => {
    const { value: inputEmoji } = target;
    setUserInput(inputEmoji);

    if (inputEmoji === "") {
      setMeaning("");
    } else if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("We don't have that emoji in our database");
    }
  };

  const emojiClickHandler = (emoji) => {
    setMeaning(emojiDictionary[emoji]);
    setUserInput("");
  };

  return (
    <div className="app">
      <h1>animoji outtt!</h1>
      <input
        placeholder="put an emoji here"
        id="emoji-input"
        value={userInput}
        onChange={emojiInputHandler}
        type="text"
      />

      <p>{meaning}</p>

      <div className="emojis">
        {emojis.map((emoji) => (
          <span
            className="emoji"
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
