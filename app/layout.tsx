import '../styles/globals.css'; // ← שים לב למיקום

export const metadata = {
  title: 'NextGenAds Dashboard',
  description: 'AI campaign automation and performance dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
