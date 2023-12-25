// import { Inter } from "next/font/google";
// import { Gothic_A1 } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
});

export const metadata = {
  title: "Reservoir",
  description: "A Next.Js 13 Meta Reservoir Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
