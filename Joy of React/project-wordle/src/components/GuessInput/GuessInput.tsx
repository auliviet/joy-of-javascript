import { useState } from "react";

export default function GuessInput({
  handleGuesses,
}: {
  handleGuesses: (guess: string) => void;
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
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}
