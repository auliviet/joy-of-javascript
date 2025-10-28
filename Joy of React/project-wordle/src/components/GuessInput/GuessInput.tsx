import { useState } from "react";

export default function GuessInput({
  handleGuesses,
  disable,
}: {
  handleGuesses: (guess: string) => void;
  disable: boolean;
}) {
  const [guess, setGuess] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    handleGuesses(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{5}"
        maxLength={5}
        value={guess}
        disabled={disable}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}
