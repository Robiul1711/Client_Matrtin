import {Lexend as LexendFont, Open_Sans as OpenSansFont } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Initialize the fonts with different variable names
const Open_Sans = OpenSansFont({
  variable: "--font-open-sans",  // Change the variable name
  subsets: ["latin"],
});

const Lexend = LexendFont({
  variable: "--font-lexend",  // Change the variable name
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Open_Sans.variable} ${Lexend.variable}`}>
        <div>
          {/* Navbar */}
          <Navbar />

          {/* Main content */}
          <main>
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
