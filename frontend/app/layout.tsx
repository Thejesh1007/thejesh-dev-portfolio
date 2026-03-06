import "./globals.css";
import { Navbar } from "@/components/layout/navbar";

export const metadata = {
  title: "Thejesh | Full Stack Engineer",
  description: "Full Stack Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}