"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Clock,
  ArrowRight,
  Stethoscope,
  Heart,
  StickerIcon as Stomach,
  BookOpen,
  Users,
  Baby,
  TreesIcon as Lungs,
  Flower2,
  Plane,
  Clipboard,
  Thermometer,
  MapPin,
  Phone,
  WormIcon as Virus,
} from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <Image src="/sakura.png" alt="Cherry Blossoms" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/60" />

        {/* Hero Content */}
        <div className="container mx-auto px-4 py-8 relative">
          <div className="flex flex-col lg:flex-row justify-between items-start">
            {/* Left side: Clinic Info */}
            <div className="lg:w-1/2 space-y-4 text-gray-700 mb-8 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-light mb-4">笹塚駅徒歩1分</h1>
              <div className="space-y-2 mb-8">
                <div className="text-2xl lg:text-3xl font-light">小児科（乳幼児健診、予防接種など）</div>
                <div className="text-2xl lg:text-3xl font-light">内科（生活習慣病など）</div>
                <div className="text-2xl lg:text-3xl font-light">アレルギー科・皮膚科</div>
                <div className="text-2xl lg:text-3xl font-light">各種ワクチン</div>
                <div className="text-2xl lg:text-3xl font-light">特殊感染症外来</div>
              </div>
            </div>

            {/* Right side: Map, Hours, and Web Reservation */}
            <div className="lg:w-1/2 space-y-6">
              {/* Hours Table - モバイルでは最初に表示 */}
              <div className="bg-white/95 p-4 rounded-lg shadow-lg w-full">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-[#a4c9c8]" />
                  <h2 className="text-lg font-medium">診療時間</h2>
                </div>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2">時間</th>
                      <th className="py-2">月</th>
                      <th className="py-2">火</th>
                      <th className="py-2">水</th>
                      <th className="py-2">木</th>
                      <th className="py-2">金</th>
                      <th className="py-2">土</th>
                      <th className="py-2">日</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr className="border-b">
                      <td className="py-2">09:00-13:00</td>
                      <td>●</td>
                      <td>●</td>
                      <td>●</td>
                      <td>/</td>
                      <td>●</td>
                      <td>▲</td>
                      <td>/</td>
                    </tr>
                    <tr>
                      <td className="py-2">14:30-18:30</td>
                      <td>●</td>
                      <td>●</td>
                      <td>●</td>
                      <td>/</td>
                      <td>●</td>
                      <td>/</td>
                      <td>/</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-gray-600 mt-2">
                  予約なしでも受診できますが、予約の方が優先される場合がございますのでご了承ください。
                </p>
              </div>

              {/* Map and Access Info - モバイルでは診療時間の後に表示 */}
              <div className="bg-white/95 p-4 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                  <div className="w-full md:w-1/2">
                    <Image
                      src="/simplemap.png"
                      alt="簡易地図"
                      width={200}
                      height={100}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                  <div className="w-full md:w-1/2 space-y-2">
                    <p className="text-sm text-gray-700">〒151-0073</p>
                    <p className="text-sm text-gray-700">東京都渋谷区笹塚1-31-11 ビラージュ笹塚I-101</p>
                    <p className="text-sm text-gray-700 flex items-center">
                      <Phone className="w-4 h-4 mr-1 text-[#a4c9c8]" />
                      03-3469-3926
                    </p>
                    <Link
                      href="https://www.google.com/maps?q=東京都渋谷区笹塚1-31-11+ビラージュ笹塚"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#a4c9c8] hover:text-[#93b5b4] transition-colors"
                    >
                      <MapPin className="w-5 h-5 mr-1" />
                      <span className="font-medium">Google マップで見る</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="space-y-4">
              <h2 className="text-4xl font-light">NEWS</h2>
              <h3 className="text-xl">お知らせ</h3>
              <div className="w-full h-px bg-gray-200 my-4"></div>
              <Link href="/news" className="text-sm text-gray-600 hover:text-[#a4c9c8] transition-colors">
                お知らせ一覧へ
              </Link>
            </div>
            {/* News List with Scroll Area */}
            <div className="col-span-3">
              <ScrollArea className="h-[400px] rounded-lg">
                <div className="space-y-6 pr-4">
                  {[
                    {
                      date: "2025.02.02",
                      category: "お知らせ",
                      title: "2月の診療スケジュールについて",
                    },
                    {
                      date: "2025.01.28",
                      category: "お知らせ",
                      title: "女性誌【Glow 3月号】に当院が掲載されました",
                    },
                    {
                      date: "2025.01.04",
                      category: "お知らせ",
                      title: "新年のご挨拶＆1月スケジュール",
                    },
                    {
                      date: "2024.12.25",
                      category: "お知らせ",
                      title: "年末年始の診療時間について",
                    },
                    {
                      date: "2024.12.15",
                      category: "お知らせ",
                      title: "12月の診療スケジュール変更のお知らせ",
                    },
                  ].map((news) => (
                    <div key={news.date} className="border-b border-gray-100 pb-6">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-gray-600">{news.date}</span>
                        <span className="px-3 py-1 text-sm bg-[#a4c9c8] text-white rounded">{news.category}</span>
                      </div>
                      <Link href="#" className="text-lg hover:text-[#a4c9c8] transition-colors">
                        {news.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </section>

      {/* Greeting Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <Image
                src="/doctor.png"
                alt="Doctor"
                width={400}
                height={500}
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-light mb-4 text-[#a4c9c8]">院長あいさつ</h2>
              <h3 className="text-xl font-medium mb-4 text-gray-700">
                「家族みんなが安心して通えるクリニック」を目指して
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>家族みんなが安心して通えるクリニックを目指し、笹塚の地で診療を続けています。</p>
                <p>
                  お子さまの成長・発達のサポートや予防接種、育児のご相談から、ご家族の健康管理まで、幅広く対応致します。
                </p>
                <p>小さな不安も気軽に相談できる「家族のかかりつけ医」として、皆さまの健康を支えていきます。</p>
                <p>地域の皆さまに信頼されるクリニックを目指し、丁寧な診療を心がけてまいります。</p>
              </div>
              <p className="mt-6 text-right text-lg font-medium text-gray-700">院長 坂本洋平</p>
              <div className="mt-6">
                <Link href="/doctor" className="text-[#a4c9c8] hover:underline flex items-center">
                  院長紹介へ
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-8 text-center">当院の特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "専門医による診療",
                description: "各分野の専門医が在籍し、幅広い症状に対応できる体制を整えています。",
                icon: "👨‍⚕️",
              },
              {
                title: "患者様中心の医療",
                description: "患者様一人ひとりのニーズに合わせた、きめ細やかな医療サービスを提供します。",
                icon: "🤝",
              },
              {
                title: "予防医学の推進",
                description: "定期健康診断や生活習慣病予防など、予防医学にも力を入れています。",
                icon: "💪",
              },
            ].map((feature, index) => (
              <div
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                key={index}
              >
                <div className="text-[#a4c9c8]">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light mb-12 text-center">診療案内</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "一般内科",
                description: "風邪、腹痛、頭痛など一般的な症状の診療を行います。",
                icon: Stethoscope,
                href: "/medical/general-internal-medicine",
              },
              {
                title: "小児科",
                description: "お子様の健康管理から予防接種まで幅広く対応します。",
                icon: Baby,
                href: "/medical/pediatrics",
              },
              {
                title: "呼吸器",
                description: "咳、喘息、肺炎など呼吸器系の疾患を診療します。",
                icon: Lungs,
                href: "/medical/respiratory",
              },
              {
                title: "アレルギー",
                description: "花粉症、食物アレルギーなど各種アレルギー疾患に対応します。",
                icon: Flower2,
                href: "/medical/allergy",
              },
              {
                title: "トラベル（渡航）外来",
                description: "海外渡航に必要な予防接種や健康相談を行います。",
                icon: Plane,
                href: "/medical/travel-clinic",
              },
              {
                title: "健康診断",
                description: "定期健康診断や人間ドックなど各種健康診断を実施します。",
                icon: Clipboard,
                href: "/medical/health-checkup",
              },
              {
                title: "発熱外来",
                description: "発熱症状のある患者様の診療を行います。",
                icon: Thermometer,
                href: "/medical/fever-clinic",
              },
              {
                title: "特殊感染症外来",
                description: "特殊な感染症の診断・治療を専門的に行います。",
                icon: Virus,
                href: "/medical/infectious-disease",
              },
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardHeader className="bg-[#a4c9c8] text-white p-6">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-medium">{service.title}</CardTitle>
                    <service.icon className="w-8 h-8" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </CardContent>
                <CardFooter className="bg-gray-50 p-4">
                  <Link href={service.href} className="text-[#a4c9c8] hover:underline flex items-center">
                    詳しく見る
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="text-[#a4c9c8] border-[#a4c9c8] hover:bg-[#a4c9c8] hover:text-white"
            >
              診療案内一覧へ
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Column Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light mb-12 text-center">健康コラム</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 1, title: "高血圧の予防と対策", date: "2025.02.15", icon: Heart, category: "循環器" },
              { id: 2, title: "健康的な食生活のすすめ", date: "2025.02.10", icon: Stomach, category: "栄養" },
              {
                id: 3,
                title: "ストレス解消法：心と体のバランス",
                date: "2025.02.05",
                icon: Users,
                category: "メンタルヘルス",
              },
            ].map((column) => (
              <Card key={column.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardHeader className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">{column.date}</span>
                    <span className="px-3 py-1 text-xs bg-[#a4c9c8] text-white rounded-full">{column.category}</span>
                  </div>
                  <CardTitle className="text-xl font-medium flex items-center">
                    <column.icon className="w-5 h-5 mr-2 text-[#a4c9c8]" />
                    {column.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 line-clamp-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </CardContent>
                <CardFooter className="bg-gray-50 p-4">
                  <Link href={`/column/${column.id}`} className="text-[#a4c9c8] hover:underline flex items-center">
                    続きを読む
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/column">
              <Button
                variant="outline"
                size="lg"
                className="text-[#a4c9c8] border-[#a4c9c8] hover:bg-[#a4c9c8] hover:text-white"
              >
                コラム一覧へ
                <BookOpen className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-4 bottom-4 bg-[var(--primary)] text-white p-3 rounded-full shadow-lg transition-opacity duration-300 ${
          showScrollTop ? "opacity-100" : "opacity-0"
        }`}
        aria-label="ページトップへ戻る"
      >
        ↑
      </button>
    </div>
  )
}

