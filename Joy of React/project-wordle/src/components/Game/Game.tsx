import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { useState } from "react";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // Keep track of the player's guesses
  const [guesses, setGuesses] = useState<string[]>([]);

  //
  function handleGuesses(guess: string) {
    const newGuesses = [...guesses];
    newGuesses.push(guess);

    setGuesses(newGuesses);
  }

  return (
    <>
      <GuessResults guesses={guesses}></GuessResults>
      <GuessInput handleGuesses={handleGuesses}></GuessInput>
    </>
  );
}

export default Game;
