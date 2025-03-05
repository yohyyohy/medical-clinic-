import { MedicalServiceLayout } from "@/components/layout/MedicalServiceLayout"

export default function PediatricsPage() {
  return (
    <MedicalServiceLayout title="小児科" description="お子様の健康管理から予防接種まで幅広く対応します。">
      <section className="space-y-6">
        <h2 className="text-2xl font-medium">主な診療内容</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>乳幼児健診</li>
          <li>予防接種</li>
          <li>小児の一般的な疾患（風邪、発熱、下痢など）</li>
          <li>アレルギー疾患（喘息、アトピー性皮膚炎など）</li>
          <li>発達相談</li>
        </ul>
      </section>
    </MedicalServiceLayout>
  )
}

