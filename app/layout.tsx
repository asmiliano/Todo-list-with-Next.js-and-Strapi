import "./globals.css";

export const metadata = {
  title: "Take and Make it",
  description: "Todo-app for everydaily usage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
