import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Journeys to Sri Lanka | Luxury Safari & Travel",
  description:
    "Experience the finest luxury safari journeys through Sri Lanka. Bespoke travel, wildlife encounters, and unforgettable adventures curated for discerning travelers.",
  keywords: "Sri Lanka safari, luxury travel, elephant safari, leopard safari, bespoke tours",
  openGraph: {
    title: "Journeys to Sri Lanka | Luxury Safari & Travel",
    description: "Bespoke luxury safari journeys through the Pearl of the Indian Ocean.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=Jost:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
