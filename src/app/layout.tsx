import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AlterMood - Mude o temperamento do seu texto",
  description:
    "Transforme qualquer texto de acordo com o temperamento desejado. Insira seu texto e selecione um mood para ver como seria expressa a mensagem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.className} dark antialiased`}>{children}</body>
    </html>
  );
}
