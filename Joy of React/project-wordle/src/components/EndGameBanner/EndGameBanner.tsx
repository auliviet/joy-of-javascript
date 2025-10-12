import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

export default function EndGameBanner({
  attempts,
  winner,
  answer,
}: {
  attempts: number;
  winner: boolean;
  answer: string;
}) {
  if (winner) {
    return <HappyBanner attempts={attempts}></HappyBanner>;
  } else if (attempts === NUM_OF_GUESSES_ALLOWED) {
    return <SadBanner answer={answer}></SadBanner>;
  } else {
    return undefined;
  }
}

function HappyBanner({ attempts }: { attempts: number }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{attempts} guesses</strong>.
      </p>
    </div>
  );
}

function SadBanner({ answer }: { answer: string }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}
