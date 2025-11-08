import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Samuel Jaja - ML/GenAI Engineer',
  description: 'AWS Certified AI Practitioner specializing in production GenAI systems, RAG, and LLM fine-tuning',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark:bg-gray-900">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
