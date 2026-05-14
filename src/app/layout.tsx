import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SIO Trust | Empowering Communities, Transforming Lives",
  description: "SIO Trust is a non-profit organization dedicated to community development, education, and social welfare. Join us in making a difference.",
  keywords: ["NGO", "Trust", "Charity", "Donation", "Community", "SIO Trust", "Education", "Welfare"],
  openGraph: {
    title: "SIO Trust | Empowering Communities",
    description: "Join SIO Trust in our mission to bring positive change through education, healthcare, and community welfare.",
    url: "https://siotrust.org",
    siteName: "SIO Trust",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SIO Trust Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIO Trust | Empowering Communities",
    description: "Join SIO Trust in our mission to bring positive change through education, healthcare, and community welfare.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth antialiased`}>
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
