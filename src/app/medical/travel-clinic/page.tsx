import { MedicalServiceLayout } from "@/components/layout/MedicalServiceLayout"

export default function TravelClinicPage() {
  return (
    <MedicalServiceLayout title="トラベル（渡航）外来" description="海外渡航に必要な予防接種や健康相談を行います。">
      <section className="space-y-6">
        <h2 className="text-2xl font-medium">主なサービス</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>渡航先に応じた予防接種</li>
          <li>マラリア予防薬の処方</li>
          <li>渡航先の衛生状況や感染症リスクの説明</li>
          <li>持病がある方の渡航相談</li>
          <li>帰国後の健康チェック</li>
        </ul>
      </section>
    </MedicalServiceLayout>
  )
}

