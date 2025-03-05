import { Header } from "@/components/layout/Header"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TravelVaccinePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header
        title="渡航ワクチン"
        breadcrumbs={[
          { label: "ホーム", href: "/" },
          { label: "企業の方へ", href: "/for-companies" },
          { label: "渡航ワクチン", href: "/for-companies/travel-vaccine" },
        ]}
      />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-light mb-8">渡航ワクチン接種サービス</h1>
          <p className="mb-8 text-lg">
            坂本クリニックでは、海外渡航を予定されている方々向けに、各種渡航ワクチンの接種サービスを提供しております。
            渡航先や滞在期間に応じて、適切なワクチン接種をご案内いたします。
          </p>
          <h2 className="text-2xl font-light mb-4">提供ワクチン</h2>
          <ul className="list-disc list-inside mb-8 space-y-2">
            <li>A型肝炎ワクチン</li>
            <li>B型肝炎ワクチン</li>
            <li>破傷風ワクチン</li>
            <li>狂犬病ワクチン</li>
            <li>黄熱ワクチン</li>
            <li>その他、渡航先に応じたワクチン</li>
          </ul>
          <p className="mb-8">
            ワクチン接種の詳細や予約については、お電話またはWeb予約にてお問い合わせください。
            渡航前の十分な余裕を持ってご相談いただくことをおすすめいたします。
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild>
              <Link href="/contact">お問い合わせ</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/reservation">Web予約</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

