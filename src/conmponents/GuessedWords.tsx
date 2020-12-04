import React from "react";

type Props = {
  guessedWords: {
    guessedWord: string;
    letterMatchCount: number;
  }[];
};

const GuessedWords: React.FC<Props> = ({ guessedWords }) => {
  return (
    <div data-test="component-guessed-words">
      {!guessedWords.length && (
        <span data-test="guess-instructions">
          Try to guess the secret word!
        </span>
      )}
    </div>
  );
};

export default GuessedWords;
