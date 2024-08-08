import type { Metadata } from "next";
import { Sarabun } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/navbar/NavBar";

// const sarabun = Sarabun({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700"],
// });

export const metadata: Metadata = {
  title: "DMCS Ventures",
  description:
    "Expert coding, impactful designs, tailored web/mobile development, AI/CLI tools, captivating WordPress themes—your all-in-one digital solution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div className="contents">{children}</div>
        <footer>
          <div className="width-container">
            <div className="text-center md:flex md:justify-between md:text-left">
              <p>
                <a href={"/"}>dmcsventures.com</a>
              </p>
              <p>&copy; DMCS Ventures 2024</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
