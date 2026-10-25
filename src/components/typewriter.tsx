"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
};

// Types a word, waits, deletes it, then moves to the next one in a loop.
// Pass a stable array (define it outside the component).
export function Typewriter({
  words,
  typeSpeed = 80,
  deleteSpeed = 40,
  pause = 1600,
}: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const word = words[index];
    const complete = text === word;

    let delay = deleting ? deleteSpeed : typeSpeed;
    if (!deleting && complete) delay = pause;

    const timer = setTimeout(() => {
      if (!deleting && complete) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, reduced, words, typeSpeed, deleteSpeed, pause]);

  if (reduced) return <span>{words[0]}</span>;

  return (
    <>
      <span className="sr-only">{words[0]}</span>
      <span aria-hidden="true">
        {text}
        <span className="animate-blink ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[0.18em] bg-primary" />
      </span>
    </>
  );
}
