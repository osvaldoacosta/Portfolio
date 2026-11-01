import { type Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { LanguageProvider } from "~/Components/LanguageProvider";
import { ThemeProvider } from "~/Components/ThemeProvider";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "By Osvaldo Azevedo",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

// Runs before the first paint so a visitor never sees a flash of the wrong theme or language
const themeScript = `try{var t=localStorage.getItem("theme")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.setAttribute("data-theme",t)}catch(e){}`;
const languageScript = `try{var l=localStorage.getItem("language")||(navigator.language.toLowerCase().startsWith("pt")?"pt":"en");document.documentElement.lang=l;if(l!=="en")document.documentElement.setAttribute("data-lang-pending","")}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript + languageScript }} />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
