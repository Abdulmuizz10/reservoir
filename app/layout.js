// import { Inter } from "next/font/google";
import { Gothic_A1 } from "next/font/google";
import "./globals.css";

const gothic_A1 = Gothic_A1({
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
      <body className={gothic_A1.className}>{children}</body>
    </html>
  );
}
