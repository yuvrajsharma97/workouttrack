import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import { AppProvider } from "../context/AppContext"; // ✅ Import AppProvider
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FitTracker - Your Personal Fitness Companion",
  description:
    "Track your workouts, monitor progress, and achieve your fitness goals with our comprehensive fitness application.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <AppProvider>
          <ThemeProvider>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
              <Navbar />
              <main className="pt-16">{children}</main>
            </div>
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
