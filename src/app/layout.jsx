import { Gabarito, Roboto } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";

const gabarito = Gabarito({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "CuyAnimeList",
  description: "Website Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-color-dark`}>
        <Navbar />
        <div className="pt-44 md:pt-16">{children}</div>
      </body>
    </html>
  );
}
