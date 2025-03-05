import type { Metadata } from "next"
import { Header } from "@/components/layout/Header"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "院長紹介・当院について | 坂本クリニック",
    description:
      "坂本クリニック院長の坂本洋平の経歴や専門分野、当院の基本理念についてご紹介します。笹塚駅徒歩1分の総合クリニックとして、地域の皆様の健康をサポートします。",
    openGraph: {
      title: "院長紹介・当院について | 坂本クリニック",
      description: "坂本クリニック院長の坂本洋平の経歴や専門分野、当院の基本理念についてご紹介します。",
      images: [
        {
          url: "/doctor.png",
          width: 400,
          height: 500,
          alt: "院長 坂本洋平",
        },
      ],
    },
  }
}

export default function DoctorPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header
        title="当院について"
        breadcrumbs={[
          { label: "ホーム", href: "/" },
          { label: "当院について", href: "/doctor" },
        ]}
      />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-light mb-8">当院について</h1>

          {/* 院長挨拶 Section */}
          <section className="mb-12 bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-light mb-8 text-[#a4c9c8]">院長挨拶</h2>
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/3">
                <Image
                  src="/doctor.png"
                  alt="院長 坂本洋平"
                  width={400}
                  height={500}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-medium mb-6 text-gray-700">院長 坂本洋平</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    皆様、こんにちは。坂本クリニック院長の坂本洋平です。
                    当院は、地域の皆様の健康を支える「かかりつけ医」として、
                    丁寧な診療と適切な医療サービスの提供に努めています。
                  </p>
                  <p>
                    私たちは、患者様一人ひとりに寄り添い、 安心して受診いただける医療環境を整えることを心がけています。
                  </p>
                  <p>
                    私自身、様々な医療現場での経験を活かし、 最新の医学知識と技術を取り入れながら、
                    地域に根ざした医療を実践してまいります。
                  </p>
                  <p>
                    皆様の健康と笑顔のために、スタッフ一同、
                    誠心誠意努めてまいりますので、どうぞよろしくお願いいたします。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 院長プロフィール Section */}
          <section className="mb-12 bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-light mb-8 text-[#a4c9c8]">院長プロフィール</h2>
            <div className="space-y-8">
              {/* 経歴 */}
              <div>
                <h4 className="text-xl font-medium mb-3 text-[#a4c9c8]">経歴</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 2012年3月 北海道大学医学部 卒業</li>
                  <li>• 2012年4月 横浜市立市民病院 臨床研修医（産婦人科）</li>
                  <li>• 2014年4月 横浜市立市民病院 感染症内科および救急総合診療科</li>
                  <li>• 2017年4月 北海道大学医学研究院 学術研究員</li>
                  <li>• 2019年4月 東京慈恵会医科大学 感染制御部 助教</li>
                </ul>
              </div>

              {/* その他職歴 */}
              <div>
                <h4 className="text-xl font-medium mb-3 text-[#a4c9c8]">その他職歴</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    •
                    北海道勇払郡むかわ町、むかわ町国民健康保険穂別診療所において地域医療に従事、小児から高齢者まで幅広く診療。北海道胆振東部地震の際には現地で災害医療に従事。
                  </li>
                  <li>• 富士フィルム健康管理センターにて産業医としても活動を継続中。</li>
                </ul>
              </div>

              {/* 資格・専門領域 */}
              <div>
                <h4 className="text-xl font-medium mb-3 text-[#a4c9c8]">資格・専門領域</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 医学博士（北海道大学、学位論文は感染症数理モデル）</li>
                  <li>• 日本感染症学会 専門医・指導医</li>
                  <li>• 日本内科学会 認定内科医</li>
                  <li>• 日本医師会 認定産業医</li>
                  <li>• 臨床研修指導医講習 修了</li>
                  <li>• 難病指定医</li>
                  <li>• ICD（インフェクションコントロール）認定</li>
                </ul>
              </div>

              {/* 所属学会 */}
              <div>
                <h4 className="text-xl font-medium mb-3 text-[#a4c9c8]">所属学会</h4>
                <p className="text-gray-600">
                  日本内科学会、日本小児科学会、日本感染症学会、日本アレルギー学会、日本性感染症学会、日本エイズ学会、日本化学療法学会、日本臨床微生物学会
                </p>
              </div>
            </div>
          </section>

          {/* 基本理念 Section */}
          <section className="mb-12 bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-light mb-8 text-[#a4c9c8]">基本理念</h2>
            <div>
              <h3 className="text-2xl font-medium mb-4 text-gray-700">患者様中心の医療サービス</h3>
              <ul className="space-y-4 text-gray-600">
                <li>1. 患者様一人ひとりの健康と幸せを第一に考えます。</li>
                <li>2. 最新の医学知識と技術を活用し、質の高い医療を提供します。</li>
                <li>3. 地域の皆様との信頼関係を大切にし、親しみやすい医療環境を作ります。</li>
                <li>4. 予防医学にも力を入れ、健康的な生活をサポートします。</li>
                <li>5. 医療チーム全体で連携し、総合的な医療サービスを提供します。</li>
              </ul>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-light mb-8">診療のご予約・お問い合わせ</h2>
            <Button className="bg-[#a4c9c8] hover:bg-[#93b5b4] text-white text-lg px-8 py-3">
              予約する
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </section>
        </div>
      </main>
    </div>
  )
}

