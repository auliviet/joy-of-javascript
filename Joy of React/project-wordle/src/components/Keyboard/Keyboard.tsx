import { checkGuess } from "../../game-helpers";
const KEYS = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

const keys = KEYS.map((keyRow) =>
  keyRow.split("").map((key) => ({ letter: key, status: "" }))
);

export default function Keyboard({
  guess,
  answer,
}: {
  guess: string;
  answer: string;
}) {
  const checkedGuess = checkGuess(guess, answer);
  return (
    <div>
      {keys.map((keyRow, index) => (
        <div key={index} className="keyboard-row">
          {keyRow.map((key) => {
            // Get the status (correct, incorrect, misplaced) of each key
            const result = checkedGuess?.find(
              (item) => item.letter === key.letter
            );

            // If the key is already correct, pass
            if (result && result.status === "correct") {
              key.status = result.status;
            } else if (result && !key.status) {
              key.status = result.status;
            }

            return (
              <span key={key.letter} className={`key ${key.status}`}>
                {key.letter}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}
