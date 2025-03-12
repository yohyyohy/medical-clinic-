"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Phone, Menu, X, ChevronDown, MessageCircle, Clock } from "lucide-react"

export function Navigation() {
  const [isNavFixed, setIsNavFixed] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [isMobileView, setIsMobileView] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1024) // Assuming 1024px is the breakpoint for lg
    }

    const handleScroll = () => {
      if (headerRef.current && navRef.current) {
        const headerHeight = headerRef.current.offsetHeight
        const scrollPosition = window.scrollY
        setIsNavFixed(scrollPosition > headerHeight)
      }
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)

    handleResize() // Initial check
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navigationItems = [
    { key: "home", label: "ホーム", href: "/" },
    {
      key: "medical",
      label: "診療案内",
      href: "/medical",
      subItems: [
        { key: "generalInternalMedicine", label: "一般内科", href: "/medical/general-internal-medicine" },
        { key: "pediatrics", label: "小児科", href: "/medical/pediatrics" },
        { key: "respiratory", label: "呼吸器", href: "/medical/respiratory" },
        { key: "allergy", label: "アレルギー", href: "/medical/allergy" },
        { key: "travelClinic", label: "トラベル（渡航）外来", href: "/medical/travel-clinic" },
        { key: "healthCheckup", label: "健康診断", href: "/medical/health-checkup" },
        { key: "feverClinic", label: "発熱外来", href: "/medical/fever-clinic" },
      ],
    },
    { key: "about", label: "当院について", href: "/doctor" },
    { key: "access", label: "アクセス", href: "/access" },
    { key: "column", label: "コラム", href: "/column" },
    { key: "faq", label: "よくある質問", href: "/faq" },
    { key: "forCompanies", label: "企業の方へ", href: "/for-companies" },
    { key: "recruit", label: "求人情報", href: "/recruit" },
  ]

  const NavContent = ({ isFixed = false }) => (
    <ul className="hidden lg:flex justify-between w-full">
      {navigationItems.map((item) => (
        <li key={item.key} className="relative group">
          {item.subItems ? (
            <>
              <Link
                href={item.href}
                className={`flex items-center px-4 py-2 ${
                  isFixed ? "text-gray-700" : "text-white"
                } hover:text-gray-900`}
              >
                <span className="font-medium">{item.label}</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <ul className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg hidden group-hover:block z-50">
                {item.subItems.map((subItem) => (
                  <li key={subItem.key}>
                    <Link href={subItem.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <Link
              href={item.href}
              className={`block px-4 py-2 ${isFixed ? "text-gray-700" : "text-white"} hover:text-gray-900`}
            >
              <span className="font-medium">{item.label}</span>
            </Link>
          )}
        </li>
      ))}
    </ul>
  )

  // 診療時間情報コンポーネントを修正して、PCとモバイルで異なる表示にする
  const ClinicHoursInfo = ({ className = "", isMobile = false }) => (
    <div className={`flex items-start gap-2 ${className}`}>
      <Clock className={`${isMobile ? "w-4 h-4" : "w-5 h-5"} text-primary mt-1 flex-shrink-0`} />
      <div className={`text-gray-700 ${isMobile ? "text-[10px] leading-tight" : ""}`}>
        {isMobile ? (
          <>
            <p>AM9:00-13:00</p>
            <p>PM14:30-18:30</p>
            <p>月・火・水・金・土(AMのみ)</p>
          </>
        ) : (
          <>
            <p>AM9:00-13:00/PM14:30-18:30</p>
            <p>月・火・水・金・土曜(AMのみ)</p>
          </>
        )}
      </div>
    </div>
  )

  return (
    <div>
      {/* ヘッダー - モバイルとデスクトップ両方で表示 */}
      <header ref={headerRef} className="bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex w-full md:w-auto justify-between items-start mb-2 md:mb-0">
              {/* モバイル用のヘッダーレイアウトを修正 */}
              {/* Link タグの部分を以下のように変更: */}

              <div className="flex flex-col">
                <div className="flex items-start">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/owl.png"
                      alt="クリニックロゴ"
                      width={40}
                      height={40}
                      className="w-8 h-8 md:w-10 md:h-10"
                      priority
                    />
                    <div>
                      <h1 className="text-primary text-xl md:text-3xl font-rounded">坂本クリニック</h1>
                      <p className="text-[8px] md:text-sm tracking-wider text-gray-600">SAKAMOTO CLINIC</p>
                    </div>
                  </Link>

                  {/* モバイル用の診療時間情報 - ロゴの横に配置 */}
                  <div className="md:hidden ml-2">
                    <ClinicHoursInfo className="text-xs" isMobile={true} />
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-white bg-primary px-3 py-1 mb-1 inline-block rounded-full">
                  〒151-0073 東京都渋谷区笹塚１丁目３１−１１ ビラージュ笹塚1
                </p>
                <div className="flex items-center gap-6 justify-end">
                  {/* デスクトップ用の診療時間情報 */}
                  <ClinicHoursInfo className="text-sm" />

                  {/* 電話番号 */}
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    <p className="text-xl md:text-2xl font-light text-gray-700">03-3469-3926</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button className="bg-primary hover:bg-owl-dark text-white text-base md:text-lg px-4 md:px-6 py-2 md:py-3">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Web予約
                </Button>
                <Button className="bg-green-600 hover:bg-green-700 text-white text-base md:text-lg px-4 md:px-6 py-2 md:py-3">
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  LINE予約<span className="text-xs">（工事中）</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* モバイル用メニューボタン - 右上に固定表示 */}
      <button
        className="fixed top-4 right-4 z-50 flex flex-col items-center justify-center bg-[#a4c9c8] text-white p-2 rounded-full shadow-lg lg:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <>
            <X size={28} />
            <span className="text-xs mt-1">閉じる</span>
          </>
        ) : (
          <>
            <Menu size={28} />
            <span className="text-xs mt-1">menu</span>
          </>
        )}
      </button>

      <nav
        ref={navRef}
        className={`bg-[#a4c9c8] ${
          isMobileView
            ? isMobileMenuOpen
              ? "block fixed top-0 left-0 right-0 z-40 h-screen overflow-y-auto"
              : "hidden"
            : isNavFixed
              ? "fixed top-0 left-0 right-0 z-50 shadow-md"
              : ""
        }`}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <NavContent isFixed={isNavFixed} />
          <div className="lg:hidden pt-16">
            {navigationItems.map((item) => (
              <div key={item.key}>
                {item.subItems ? (
                  <div>
                    <button
                      className="flex justify-between items-center w-full py-2 px-4 text-white hover:bg-[#93b5b4]"
                      onClick={() => setOpenSubmenu(openSubmenu === item.key ? null : item.key)}
                    >
                      {item.label}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform ${openSubmenu === item.key ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openSubmenu === item.key && (
                      <div className="pl-4">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.key}
                            href={subItem.href}
                            className="block py-2 px-4 text-white hover:bg-[#93b5b4]"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 px-4 text-white hover:bg-[#93b5b4]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
      {isNavFixed && !isMobileView && <div style={{ height: navRef.current?.offsetHeight }}></div>}
    </div>
  )
}

export default Navigation

