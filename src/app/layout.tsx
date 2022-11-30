import "./globals.css";
import { Poppins } from "@next/font/google";
import { AnalyticsWrapper } from "./components/analytics";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head />
      <body>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
