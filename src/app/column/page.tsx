import { Header } from "@/components/layout/Header"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Heart, Stethoscope, Brain } from "lucide-react"

const columns = [
  {
    id: 1,
    title: "高血圧の予防と対策",
    date: "2025.02.15",
    icon: Heart,
    category: "循環器",
    excerpt:
      "高血圧は現代社会において非常に一般的な健康問題です。本記事では、高血圧の原因、リスク、そして効果的な予防法と対策について詳しく解説します。",
  },
  {
    id: 2,
    title: "風邪とインフルエンザの違い",
    date: "2025.02.10",
    icon: Stethoscope,
    category: "感染症",
    excerpt:
      "風邪とインフルエンザは似たような症状を示すことがありますが、その原因や重症度は大きく異なります。この記事では、両者の違いと適切な対処法を紹介します。",
  },
  {
    id: 3,
    title: "ストレス解消法：心と体のバランス",
    date: "2025.02.05",
    icon: Brain,
    category: "メンタルヘルス",
    excerpt:
      "現代社会ではストレスを完全に避けることは難しいですが、適切な管理は可能です。ここでは、効果的なストレス解消法と、心身のバランスを保つためのテクニックを紹介します。",
  },
  // 必要に応じて他のコラムを追加
]

export default function ColumnPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        title="健康コラム"
        breadcrumbs={[
          { label: "ホーム", href: "/" },
          { label: "健康コラム", href: "/column" },
        ]}
      />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-light mb-8 text-center">健康コラム</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {columns.map((column) => (
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
                <p className="text-gray-600 line-clamp-3">{column.excerpt}</p>
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
      </main>
    </div>
  )
}

