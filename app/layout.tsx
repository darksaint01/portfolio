import type { Metadata } from "next";
import { site } from "@/data/portfolio";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(site.url), title: site.title, description: site.description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_PH", url: site.url, title: site.title, description: site.description, siteName: "Kennu Martos Portfolio", images: [{ url: "/og.png", width: 1734, height: 907, alt: "Kennu M. Martos, Programmer and Graphic Designer" }] },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="dark"><body>{children}</body></html>;
}
