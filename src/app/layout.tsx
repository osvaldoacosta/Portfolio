import { type Metadata } from "next";
import styles from '../styles/layout.module.css'

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

      <body>{children}</body>
    </html>
  );
}
