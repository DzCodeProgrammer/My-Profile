import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./orbital.css";

const title = "Hadrian Galen Jave Dzikrillah — Software Engineer";
const description = "Personal portfolio of Hadrian Galen Jave Dzikrillah, a software engineer focused on modern web development, artificial intelligence, computer vision, and technology.";

export const metadata: Metadata = {
  metadataBase: new URL("https://dzcodeprogrammer.dev"),
  title,
  description,
  keywords: ["Software Engineer", "Full-Stack Developer", "AI", "Computer Vision", "Indonesia"],
  authors: [{ name: "Hadrian Galen Jave Dzikrillah" }],
  alternates: { canonical: "/" },
  openGraph: { title, description, type: "website", siteName: "DzCodeProgrammer" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = { themeColor: "#050505", colorScheme: "dark" };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Person", name: "Hadrian Galen Jave Dzikrillah", url: "https://dzcodeprogrammer.dev", sameAs: ["https://github.com/DzCodeProgrammer", "https://www.linkedin.com/in/dzikri-e-979742335/"], jobTitle: "Software Engineer", email: "mailto:dzikrijombang@gmail.com" },
    { "@type": "WebSite", name: "DzCodeProgrammer", url: "https://dzcodeprogrammer.dev" }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
