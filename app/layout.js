import "./globals.css";

export const metadata = {
  title: "Acronym Bingo",
  description: "Bingo card of identity & security acronyms",
};

export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
