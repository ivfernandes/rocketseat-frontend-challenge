import { Header } from "@/components/header";
import "./globals.css";
import { Saira } from "next/font/google";

const saira = Saira({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Capputeeno",
  description: "E-commerce para venda de canecas e camisetas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={saira.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
