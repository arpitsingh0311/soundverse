// app/layout.tsx
import Sidebar from "./components/Sidebar";
import "./globals.css";


export const metadata = {
  title: "Soundverse DNA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white flex flex-col sm:flex-row min-h-screen">
        <Sidebar />
        <div className="flex-1 sm:ml-16 sm:mt-0 sm:px-0">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
