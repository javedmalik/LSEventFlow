import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BNI Leadership Summit 2026 | Event Flow",
  description:
    "Business Needs Inc. Leadership Summit 2026 event flow and schedule.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}