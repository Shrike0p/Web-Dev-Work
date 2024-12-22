
import "./globals.css";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <SidebarProvider defaultOpen={false}>
      <AppSidebar />
        {children}
    </SidebarProvider>
      </body>
    </html>
  );
}
