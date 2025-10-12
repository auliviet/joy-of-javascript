import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

export default function GuessRow({
  guess,
  answer,
}: {
  guess: string | undefined;
  answer: string;
}) {
  const guessLength = 5;
  const result = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(guessLength).map((index) => (
        <span
          key={index}
          className={`cell ${result ? result[index].status : ""}`}
        >
          {guess ? guess[index] : ""}
        </span>
      ))}
    </p>
  );
}
