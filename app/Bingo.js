"use client";

import { useState } from "react";
import { pickNine } from "./pick";

const LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6],            // diagonals
];

export default function Bingo({ initialItems }) {
  const [items, setItems] = useState(initialItems);
  const [selected, setSelected] = useState(() => Array(9).fill(false));

  const newCard = () => {
    setItems(pickNine());
    setSelected(Array(9).fill(false));
  };

  const toggle = (i) =>
    setSelected((s) => s.map((v, idx) => (idx === i ? !v : v)));

  const winning = new Set(
    LINES.filter((l) => l.every((i) => selected[i])).flat()
  );
  const hasBingo = winning.size > 0;

  return (
    <main>
      <h1>Acronym Bingo</h1>
      <p className={hasBingo ? "status win" : "status"}>
        {hasBingo ? "BINGO!" : "Tap a square when you hear it"}
      </p>
      <div className="grid">
        {items.map((item, i) => (
          <button
            key={i}
            type="button"
            aria-pressed={selected[i]}
            className={`cell${selected[i] ? " on" : ""}${winning.has(i) ? " line" : ""}`}
            onClick={() => toggle(i)}
            style={{ "--i": i }}
          >
            <span className="label">
              <span className="term">{item.term}</span>
              <span className="meaning">{item.meaning}</span>
            </span>
          </button>
        ))}
      </div>
      <button type="button" className="new" onClick={newCard}>
        New card
      </button>
      <footer>
        <p>
          Made with &lt;3 by{" "}
          <a href="https://sambego.tech" target="_blank" rel="noopener">
            sambego
          </a>
        </p>
        <p>
          Confused by the acronyms, let{" "}
          <a href="https://auth0.com/signup" target="_blank" rel="noopener">
            auth0
          </a>{" "}
          deal with them.
        </p>
      </footer>
    </main>
  );
}
