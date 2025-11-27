import { Inter } from "next/font/google";
import "./globals.css";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { FloatingActions } from "@/components/ui/FloatingActions";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "TOF - Professional Video Editor & Content Creator",
  description:
    "Professional video editing and content creation services. 10M+ views, 100+ channels, 5 years experience. Based in Islamabad, Pakistan.",
  keywords: "video editing, content creation, YouTube, podcast editing, short form videos, Islamabad, Pakistan",
  authors: [{ name: "TOF - Muhammad Farhan Abbas" }],
  openGraph: {
    title: "TOF - Professional Video Editor & Content Creator",
    description:
      "Professional video editing and content creation services. 10M+ views, 100+ channels, 5 years experience.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased text-white`}>
        <LoadingScreen>
          {children}
          <FloatingActions />
        </LoadingScreen>
      </body>
    </html>
  );
}
