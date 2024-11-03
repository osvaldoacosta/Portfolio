import { type Metadata } from "next";
import styles from '../styles/layout.module.css'
import { ThemeProvider } from "~/Components/ThemeProvider";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "By Osvaldo Azevedo",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={styles.defaultPage}>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
