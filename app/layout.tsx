// layout.tsx
"use client";
import AnchorTemporaryDrawer from "./components/sider";
import "./globals.css";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <html lang="en">
      <body className="flex">
        <AnchorTemporaryDrawer onDrawerToggle={handleDrawerToggle} />
        <main
          className={`flex-1 p-4 bg-gray-100 min-h-screen transition-all duration-300 ${
            isDrawerOpen ? "ml-[240px]" : "ml-0"
          }`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
