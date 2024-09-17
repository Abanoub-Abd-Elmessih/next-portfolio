import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/Components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000"),

	title: 'Abanoub',
	authors: {
		name: "chensokheng",
	},

	description:
		"Based in Egypt, I&apos;m a Front-End Developer passionate about building a modern web application that users love",
	openGraph: {
		title: "Abanoub",
		description:
			"Based in Egypt, I&apos;m a Front-End Developer passionate about building a modern web application that users love.",
		url: "http://localhost:3000",
		siteName: "Abanoub",
		images: "/og.png",
		type: "website",
	},
	keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
