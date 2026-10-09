import Bingo from "./Bingo";
import { pickNine } from "./pick";

// Random card per request, rendered on the server so the text is in the markup.
export const dynamic = "force-dynamic";

export default function Page() {
  return <Bingo initialItems={pickNine()} />;
}
