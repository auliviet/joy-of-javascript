import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { HappyBanner, SadBanner } from "../EndGameBanner";
import { useState, type SetStateAction } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Keyboard from "../Keyboard";

// Pick a random word on every pageload.
let answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

type GameStatus = "running" | "won" | "lost";

function Game() {
  // Keep track of the player's guesses
  const [guesses, setGuesses] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<GameStatus>("running");

  // Handle new guesses and add to the state
  function handleGuesses(guess: string) {
    const nextGuesses = [...guesses];
    nextGuesses.push(guess);

    // Add new guess to the state
    setGuesses(nextGuesses);

    // Verify if the guess is successful
    if (guess === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  function handleReset() {
    const nextGuesses: SetStateAction<string[]> = [];

    // Reset the guesses
    setGuesses(nextGuesses);

    // Reset the win state
    setGameStatus("running");

    // Reload the page to ķelect a new word.
    answer = sample(WORDS);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer}></GuessResults>
      <GuessInput
        handleGuesses={handleGuesses}
        disable={gameStatus !== "running"}
      ></GuessInput>
      <Keyboard guess={guesses[guesses.length - 1]} answer={answer}></Keyboard>
      {gameStatus === "won" && (
        <HappyBanner
          attempts={guesses.length}
          handleReset={handleReset}
        ></HappyBanner>
      )}

      {gameStatus === "lost" && (
        <SadBanner answer={answer} handleReset={handleReset}></SadBanner>
      )}
    </>
  );
}

export default Game;
