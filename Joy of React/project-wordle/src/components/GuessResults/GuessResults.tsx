import GuessRow from "./GuessRow";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

export default function GuessResults({
  guesses,
  answer,
}: {
  guesses: string[];
  answer: string;
}) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <GuessRow key={index} guess={guesses[index]} answer={answer}></GuessRow>
      ))}
    </div>
  );
}
