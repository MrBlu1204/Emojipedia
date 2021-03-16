import React from "react";
import EmojiCards from "./EmojiCards";
import emojipedia from "../emojipedia";

function createEmojis(emojiCard) {
  return (
    <EmojiCards
      key={emojiCard.id}
      emoji={emojiCard.emoji}
      name={emojiCard.name}
      meaning={emojiCard.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEmojis)}</dl>
    </div>
  );
}

export default App;
