import React from "react";

type GuessedWordsRowsProps = {
  word: {
    guessedWord: string;
    letterMatchCount: number;
  };
};

const GuessedWordsRows: React.FC<GuessedWordsRowsProps> = ({ word }) => {
  return (
    <tr>
      <td>{word.guessedWord}</td>
      <td>{word.letterMatchCount}</td>
    </tr>
  );
};

type Props = {
  guessedWords: {
    guessedWord: string;
    letterMatchCount: number;
  }[];
};

const GuessedWords: React.FC<Props> = ({ guessedWords }) => {
  return (
    <div data-test="component-guessed-words">
      {!guessedWords.length ? (
        <span data-test="guess-instructions">
          Try to guess the secret word!
        </span>
      ) : (
        <div data-test="guessed-words">
          <h3>Guessed Words</h3>
          <table className="table table-sm">
            <thead className="thead-light">
              <tr>
                <th>Guess</th>
                <th>Maching Letters</th>
              </tr>
            </thead>
            <tbody>
              {guessedWords.map((word, key) => {
                return (
                  <GuessedWordsRows
                    data-test="guessed-word"
                    word={word}
                    key={key}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GuessedWords;
