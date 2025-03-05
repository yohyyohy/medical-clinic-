import { Header } from "@/components/layout/Header"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ForCompaniesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header
        title="企業の方へ"
        breadcrumbs={[
          { label: "ホーム", href: "/" },
          { label: "企業の方へ", href: "/for-companies" },
        ]}
      />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-light mb-8">企業の方へ</h1>
          <p className="mb-8 text-lg">
            坂本クリニックでは、企業の皆様に向けて産業医サービスと渡航ワクチン接種サービスを提供しております。
            従業員の健康管理や海外渡航に関するお悩みがございましたら、以下のリンクからお問い合わせください。
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-light mb-4">産業医サービス</h2>
              <p className="mb-4">従業員の健康管理や職場環境の改善にお悩みの企業様向けのサービスです。</p>
              <Link href="/for-companies/industrial-physician" className="block">
                <Button className="w-full text-lg py-3 bg-[#a4c9c8] hover:bg-[#93b5b4] text-gray-800">
                  産業医サービスについて
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-light mb-4">渡航ワクチン接種</h2>
              <p className="mb-4">海外渡航前の予防接種に関する相談や接種サービスを提供しています。</p>
              <Link href="/for-companies/travel-vaccine" className="block">
                <Button className="w-full text-lg py-3 bg-[#a4c9c8] hover:bg-[#93b5b4] text-gray-800">
                  渡航ワクチンについて
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

