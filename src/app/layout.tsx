export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 font-sans">
        <header className="p-4 bg-white shadow-md">
          <nav className="max-w-4xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-600">MyPortfolio</h1>
            <ul className="flex gap-6 text-sm font-medium">
              <li><a href="#" className="hover:text-blue-500">Home</a></li>
              <li><a href="#" className="hover:text-blue-500">Projects</a></li>
              <li><a href="#" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </nav>
        </header>

        <main className="max-w-4xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
