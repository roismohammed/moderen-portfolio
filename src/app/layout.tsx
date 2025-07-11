import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/spectrumui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RoisDev | Freelance Software Engineer",
  description: "Experienced freelance software engineer specializing in web development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
        >
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 md:px-2 lg:px-30 py-8">
              {children}
            </main>
            <Footer/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}