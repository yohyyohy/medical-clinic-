import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import { Navigation } from "@/components/layout/Navigation"
import { SideReservationButton } from "@/components/layout/SideReservationButton"
import { MobileReservationButton } from "@/components/layout/MobilereServationButton"
import { Footer } from "@/components/layout/Footer"
import Script from 'next/script'
import StructuredData from '@/components/seo/StructuredData'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "坂本クリニック",
  description: "笹塚駅徒歩1分の総合クリニック。内科、小児科、予防接種、健康診断を提供しています。",
  keywords: "内科, 小児科, 笹塚, 予防接種, 健康診断",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="h-full">
      <head>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/react-helmet/6.1.0/react-helmet.min.js"
          strategy="afterInteractive"
        />
        <StructuredData />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-full`}>
        <header>
          <Navigation />
        </header>
        <main className="flex-grow">{children}</main>
        <SideReservationButton />
        <MobileReservationButton />
        <Footer />
      </body>
    </html>
  )
}