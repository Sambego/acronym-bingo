import { ACRONYMS } from "./acronyms";

export function pickNine() {
  const pool = [...ACRONYMS];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, 9);
}
