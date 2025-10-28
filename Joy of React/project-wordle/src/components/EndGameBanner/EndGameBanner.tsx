import type { MouseEventHandler, ReactElement } from "react";

function Banner({
  status,
  handleReset,
  children,
}: {
  status: string;
  handleReset: MouseEventHandler;
  children: ReactElement;
}) {
  return (
    <div className={`${status} banner`}>
      {children}
      <button className="reset-button" onClick={handleReset}>
        Restart
      </button>
    </div>
  );
}

export function HappyBanner({
  attempts,
  handleReset,
}: {
  attempts: number;
  handleReset: MouseEventHandler;
}) {
  return (
    <Banner status="happy" handleReset={handleReset}>
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{attempts} guesses</strong>.
      </p>
    </Banner>
  );
}

export function SadBanner({
  answer,
  handleReset,
}: {
  answer: string;
  handleReset: MouseEventHandler;
}) {
  return (
    <Banner status="sad" handleReset={handleReset}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}
