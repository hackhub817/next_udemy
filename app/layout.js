import Headerbackgroud from "@/components/Header-backgroud";
import "./globals.css";
import Header from "@/components/Header";
export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Headerbackgroud />
        <Header />

        {children}
      </body>
    </html>
  );
}
