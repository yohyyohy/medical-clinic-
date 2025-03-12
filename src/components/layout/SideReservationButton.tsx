"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, MessageCircle } from "lucide-react"

export function SideReservationButton() {
  const [isNavFixed, setIsNavFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // ヘッダーの高さを超えたらボタンを表示
      const scrollPosition = window.scrollY
      setIsNavFixed(scrollPosition > 100) // ヘッダーの高さに応じて調整
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // 初期チェック

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={`fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:block transition-opacity duration-300 ${isNavFixed ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div className="flex flex-col gap-4">
        {/* WEB予約ボタン */}
        <Button className="w-16 h-32 bg-gray-800 hover:bg-gray-700 text-white">
          <div className="flex flex-col items-center justify-center h-full">
            <Calendar className="w-6 h-6 mb-4" />
            <span className="writing-vertical-rl whitespace-nowrap text-sm tracking-wider">WEB予約</span>
          </div>
        </Button>

        {/* LINE予約ボタン */}
        <Button className="w-16 h-40 bg-green-600 hover:bg-green-700 text-white">
          <div className="flex flex-col items-center justify-center h-full">
            <MessageCircle className="w-6 h-6 mb-4" />
            <span className="writing-vertical-rl whitespace-nowrap text-xs tracking-wider">LINE予約（工事中）</span>
          </div>
        </Button>
      </div>
    </div>
  )
}

