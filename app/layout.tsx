// import type React from "react"
// import "./globals.css";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import { ThemeProvider } from "@/components/theme-provider";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Saketh Yalamanchili Portfolio",
//   description: "Data Scientist, Software Developer, and AR Creator",
//   icons: {
//     icon: "app\favicon.ico"
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={inter.className}>
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }


import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Saketh Yalamanchili | Data Scientist & AR Creator',
  description: 'Data Scientist, Software Developer, and AR Creator with 150B+ views. Graduate Research Assistant at Florida Atlantic University.',
  generator: 'v0.app',
  keywords: ['Data Science', 'Machine Learning', 'AR Developer', 'Snapchat Lenses', 'Software Engineer'],
  authors: [{ name: 'Saketh Yalamanchili' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
