import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { useState } from "react";
import EndGameBanner from "../EndGameBanner/EndGameBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // Keep track of the player's guesses
  const [guesses, setGuesses] = useState<string[]>([]);
  const [isWin, setIsWin] = useState(false);

  // Handle new guesses and add to the state
  function handleGuesses(guess: string) {
    const nextGuesses = [...guesses];
    nextGuesses.push(guess);

    // Add new guess to the state
    setGuesses(nextGuesses);

    // Verify if the guess is successful
    if (guess === answer) {
      setIsWin(true);
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer}></GuessResults>
      <GuessInput handleGuesses={handleGuesses}></GuessInput>
      <EndGameBanner
        attempts={guesses.length}
        winner={isWin}
        answer={answer}
      ></EndGameBanner>
    </>
  );
}

export default Game;
