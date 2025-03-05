import Link from "next/link"
import { ArrowRight, Clock, Calendar, MapPin, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer>
      {/* アクセス情報セクション */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-wider font-light mb-4">ACCESS</h2>
            <p className="text-lg md:text-xl text-gray-600">アクセス</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.827853707572!2d139.66694687677415!3d35.67392037259364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f2767eb9e92f%3A0x64a1d7165f8662f9!2z44OT44Op44O844K444Ol56yg5aCA!5e0!3m2!1sja!2sjp!4v1707883720764!5m2!1sja!2sjp"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-light">坂本クリニック</h3>
              <p className="text-lg md:text-xl text-gray-700 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-[#a4c9c8]" />
                〒151-0073
              </p>
              <p className="text-lg md:text-xl text-gray-700 pl-7">東京都渋谷区笹塚１丁目３１−１１ ビラージュ笹塚1</p>
              <p className="text-2xl md:text-3xl font-light text-[#a4c9c8] flex items-center">
                <Phone className="w-6 h-6 mr-2" />
                03-3469-3926
              </p>
              <div className="space-y-2">
                <p className="text-lg md:text-xl font-medium">アクセス</p>
                <p className="text-base md:text-lg text-gray-600">京王線・笹塚駅から徒歩1分</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
                {/* 診療時間 */}
                <div className="bg-white p-6 rounded-lg shadow-md md:col-span-3">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-6 h-6 text-[#a4c9c8]" />
                    <h3 className="text-xl font-medium">診療時間</h3>
                  </div>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="py-2">診療時間</th>
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
                  <p className="text-xs text-gray-600 mt-3">
                    予約なしでも受診できますが、予約の方が優先される場合がございますのでご了承ください。
                  </p>
                </div>
                {/* Web予約 */}
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-medium mb-4">予約</h3>
                    <p className="text-sm text-gray-600 mb-4">24時間予約可能</p>
                  </div>
                  <div className="space-y-2">
                    <Button className="w-full bg-[#a4c9c8] hover:bg-[#93b5b4] text-white text-base py-3">
                      <Calendar className="w-5 h-5 mr-2" />
                      Web予約
                    </Button>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-base py-3">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      LINE予約<span className="text-xs ml-1">（工事中）</span>
                    </Button>
                  </div>
                </div>
              </div>
              <Button className="px-6 md:px-8 py-2 md:py-3 text-base md:text-lg mt-4">
                詳しいアクセス情報
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 連携病院セクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-8 text-center">連携病院</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "東京医科大学病院",
                address: "東京都新宿区西新宿6-7-1",
                url: "https://hospinfo.tokyo-med.ac.jp/",
              },
              {
                name: "東京慈恵会医科大学病院",
                address: "東京都港区西新橋3-19-18",
                url: "https://www.jikei.ac.jp/hospital/honin/",
              },
            ].map((hospital, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2">{hospital.name}</h3>
                <p className="text-gray-600 mb-2">{hospital.address}</p>
                <a
                  href={hospital.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a4c9c8] hover:underline"
                >
                  公式サイトを見る
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* サイトマップ */}
      <section className="bg-[var(--primary)]/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light mb-8 md:mb-12 text-center">サイトマップ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div>
              <h3 className="text-lg md:text-xl font-medium mb-4">診療案内</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/medical" className="text-gray-600 hover:text-[#a4c9c8]">
                    診療案内トップ
                  </Link>
                </li>
                <li>
                  <Link href="/medical/general-internal-medicine" className="text-gray-600 hover:text-[#a4c9c8]">
                    一般内科
                  </Link>
                </li>
                <li>
                  <Link href="/medical/pediatrics" className="text-gray-600 hover:text-[#a4c9c8]">
                    小児科
                  </Link>
                </li>
                <li>
                  <Link href="/medical/respiratory" className="text-gray-600 hover:text-[#a4c9c8]">
                    呼吸器
                  </Link>
                </li>
                <li>
                  <Link href="/medical/allergy" className="text-gray-600 hover:text-[#a4c9c8]">
                    アレルギー
                  </Link>
                </li>
                <li>
                  <Link href="/medical/travel-clinic" className="text-gray-600 hover:text-[#a4c9c8]">
                    トラベル（渡航）外来
                  </Link>
                </li>
                <li>
                  <Link href="/medical/health-checkup" className="text-gray-600 hover:text-[#a4c9c8]">
                    健康診断
                  </Link>
                </li>
                <li>
                  <Link href="/medical/fever-clinic" className="text-gray-600 hover:text-[#a4c9c8]">
                    発熱外来
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-medium mb-4">当院について</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/doctor" className="text-gray-600 hover:text-[#a4c9c8]">
                    院長紹介
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-[#a4c9c8]">
                    クリニック概要
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-medium mb-4">お役立ち情報</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/column" className="text-gray-600 hover:text-[#a4c9c8]">
                    健康コラム
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-600 hover:text-[#a4c9c8]">
                    よくある質問
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-medium mb-4">その他</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/access" className="text-gray-600 hover:text-[#a4c9c8]">
                    アクセス
                  </Link>
                </li>
                <li>
                  <Link href="/for-companies" className="text-gray-600 hover:text-[#a4c9c8]">
                    企業の方へ
                  </Link>
                </li>
                <li>
                  <Link href="/recruit" className="text-gray-600 hover:text-[#a4c9c8]">
                    求人情報
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 坂本クリニック. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

