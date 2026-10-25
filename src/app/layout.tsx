import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const themeScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);}catch(e){document.documentElement.classList.add("dark");}})();`;

export const metadata: Metadata = {
  title: "Sabbir Ahammed | Full-Stack Developer",
  description:
    "Portfolio of Sabbir Ahammed, a full-stack developer building modern web experiences with React and Next.js.",
  openGraph: {
    title: "Sabbir Ahammed | Full-Stack Developer",
    description:
      "Building modern web experiences with React and Next.js, exploring backend technologies, and turning ideas into real-world projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/* Applies the saved (or system) theme before first paint to avoid a flash */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
