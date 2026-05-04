import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salary Data Leak Scanner – Scan if your salary data is being sold",
  description: "Check if your salary information appears in data broker databases. Get alerts when your data is found being sold online."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ed99435b-dc73-4c47-adee-2a2df17c6cbe"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
