import "./globals.css";

export const metadata = {
  title: "At-Taqwa Kemiri Jaya",
  description: "Yayasan Pendidikan At-Taqwa Kemiri Jaya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}