import { Lexend as LexendFont, Open_Sans as OpenSansFont } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StyledJsxRegistry from "./registry";

// Initialize the fonts
const Open_Sans = OpenSansFont({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const Lexend = LexendFont({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${Open_Sans.variable} ${Lexend.variable}`}>
      <body>
        <StyledJsxRegistry>
          <div>
            {/* Navbar */}
            <Navbar />

            {/* Main content */}
            <main>{children}</main>

            {/* Footer */}
            <Footer />
          </div>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}