import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hasni Ahamed | Civil Engineering Portfolio",
  description: "Professional portfolio website of Hasni Ahamed, a Civil Engineering Undergraduate at General Sir John Kotelawala Defence University, Sri Lanka. Specializing in structural engineering, sustainable infrastructure, computational mechanics, and FEA modeling.",
  keywords: [
    "Hasni Ahamed",
    "Civil Engineering Portfolio",
    "Kotelawala Defence University",
    "KDU Sri Lanka",
    "Structural Engineering Sri Lanka",
    "Sustainable Infrastructure Design",
    "Finite Element Analysis",
    "CAD",
    "SAP2000",
    "ETABS"
  ],
  authors: [{ name: "Hasni Ahamed" }],
  openGraph: {
    title: "Hasni Ahamed | Civil Engineering Portfolio",
    description: "Professional portfolio website of Hasni Ahamed, specializing in structural design, finite element modeling, and sustainable engineering.",
    type: "website",
    locale: "en_US",
    siteName: "Hasni Ahamed Portfolio"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
