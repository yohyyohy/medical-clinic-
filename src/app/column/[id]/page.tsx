import { Header } from "@/components/layout/Header"
import { Heart, Stethoscope, Brain } from "lucide-react"
import { PageProps } from "next"

const columns = [
  {
    id: 1,
    title: "高血圧の予防と対策",
    date: "2025.02.15",
    icon: Heart,
    category: "循環器",
    content:
      "高血圧は現代社会において非常に一般的な健康問題です。本記事では、高血圧の原因、リスク、そして効果的な予防法と対策について詳しく解説します。...",
  },
  {
    id: 2,
    title: "風邪とインフルエンザの違い",
    date: "2025.02.10",
    icon: Stethoscope,
    category: "感染症",
    content:
      "風邪とインフルエンザは似たような症状を示すことがありますが、その原因や重症度は大きく異なります。この記事では、両者の違いと適切な対処法を紹介します。...",
  },
  {
    id: 3,
    title: "ストレス解消法：心と体のバランス",
    date: "2025.02.05",
    icon: Brain,
    category: "メンタルヘルス",
    content:
      "現代社会ではストレスを完全に避けることは難しいですが、適切な管理は可能です。ここでは、効果的なストレス解消法と、心身のバランスを保つためのテクニックを紹介します。...",
  },
]

// 🚀 `PageProps` を使って型を定義
export default function ColumnPage({ params }: PageProps) {
  const column = columns.find((c) => c.id === Number(params.id))

  if (!column) {
    return <div>コラムが見つかりません</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        title={column.title}
        breadcrumbs={[
          { label: "ホーム", href: "/" },
          { label: "健康コラム", href: "/column" },
          { label: column.title, href: `/column/${column.id}` },
        ]}
      />
      <main className="container mx-auto px-4 py-12">
        <article className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm text-gray-500">{column.date}</span>
            <span className="px-3 py-1 text-sm bg-[#a4c9c8] text-white rounded-full">{column.category}</span>
          </div>
          <h1 className="text-3xl font-bold mb-6 flex items-center">
            <column.icon className="w-8 h-8 mr-3 text-[#a4c9c8]" />
            {column.title}
          </h1>
          <div className="prose max-w-none">
            <p>{column.content}</p>
          </div>
        </article>
      </main>
    </div>
  )
}
