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
      <body className="antialiased relative min-h-screen">
        {/* Moving Liquid Glass Theme Background Blobs */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-[#16324F]/10 to-[#4E6E81]/20 blur-[120px] dark:from-[#16324F]/20 dark:to-[#4E6E81]/30 animate-fluid-blob-1" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#4CAF50]/8 to-[#16324F]/15 blur-[120px] dark:from-[#4CAF50]/15 dark:to-[#16324F]/25 animate-fluid-blob-2" />
          <div className="absolute top-[40%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-tr from-[#4E6E81]/8 to-[#4CAF50]/12 blur-[100px] dark:from-[#4E6E81]/15 dark:to-[#4CAF50]/20 animate-fluid-blob-3" />
        </div>
        {children}
      </body>
    </html>
  );
}
