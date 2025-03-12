import { Header } from "@/components/layout/header"
import { Clock, Calendar, Phone, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "診療時間 | 坂本クリニック",
  description:
    "坂本クリニックの診療時間のご案内です。月・火・水・金は9:00-13:00、14:30-18:30、土曜は午前のみの診療となります。",
}

export default function HoursPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header
        title="診療時間"
        breadcrumbs={[
          { label: "ホーム", href: "/" },
          { label: "診療時間", href: "/hours" },
        ]}
      />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-light mb-6">診療時間のご案内</h1>

          {/* 診療時間テーブル - モバイルフレンドリーなデザイン */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-6 h-6 text-[#a4c9c8]" />
              <h2 className="text-xl font-medium">診療時間</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 px-2">診療時間</th>
                    <th className="py-3 px-2">月</th>
                    <th className="py-3 px-2">火</th>
                    <th className="py-3 px-2">水</th>
                    <th className="py-3 px-2">木</th>
                    <th className="py-3 px-2">金</th>
                    <th className="py-3 px-2">土</th>
                    <th className="py-3 px-2">日</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr className="border-b">
                    <td className="py-3 px-2 font-medium">09:00-13:00</td>
                    <td className="py-3 px-2">●</td>
                    <td className="py-3 px-2">●</td>
                    <td className="py-3 px-2">●</td>
                    <td className="py-3 px-2">/</td>
                    <td className="py-3 px-2">●</td>
                    <td className="py-3 px-2">▲</td>
                    <td className="py-3 px-2">/</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 font-medium">14:30-18:30</td>
                    <td className="py-3 px-2">●</td>
                    <td className="py-3 px-2">●</td>
                    <td className="py-3 px-2">●</td>
                    <td className="py-3 px-2">/</td>
                    <td className="py-3 px-2">●</td>
                    <td className="py-3 px-2">/</td>
                    <td className="py-3 px-2">/</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>● 診療 / 休診 ▲ 午前のみ</p>
              <p>予約なしでも受診できますが、予約の方が優先される場合がございますのでご了承ください。</p>
            </div>
          </div>

          {/* 補足情報 */}
          <div className="space-y-6">
            {/* 休診日 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-medium mb-3 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-[#a4c9c8]" />
                休診日
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li>• 木曜日</li>
                <li>• 日曜日</li>
                <li>• 祝日</li>
                <li>• 年末年始（12月29日〜1月3日）</li>
              </ul>
              <p className="mt-3 text-sm text-gray-600">
                ※臨時休診については、トップページのお知らせまたは診療カレンダーをご確認ください。
              </p>
            </div>

            {/* 予約について */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-medium mb-3 flex items-center">
                <Phone className="w-5 h-5 mr-2 text-[#a4c9c8]" />
                予約・お問い合わせ
              </h2>
              <p className="text-2xl font-light text-[#a4c9c8] mb-3">03-3469-3926</p>
              <p className="text-gray-700 mb-4">お電話でのご予約・お問い合わせは診療時間内にお願いいたします。</p>
              <Link href="/access">
                <Button className="w-full md:w-auto bg-[#a4c9c8] hover:bg-[#93b5b4] text-white">
                  アクセス情報を見る
                </Button>
              </Link>
            </div>

            {/* 注意事項 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-medium mb-3 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-[#a4c9c8]" />
                ご注意事項
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li>• 初診の方は、保険証をお持ちください。</li>
                <li>• お薬手帳をお持ちの方は、ご持参ください。</li>
                <li>• 発熱や咳などの症状がある方は、受付時にお申し出ください。</li>
                <li>• 診療の状況により、待ち時間が長くなる場合がございます。</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

