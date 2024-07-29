import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Kalam } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import Header from "@/components/Header";

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Stories - Share Your Stories",
  description:
    "Share and read stories from people around the world. Write and publish your own stories on Stories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kalam.className}>
        <Header />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
