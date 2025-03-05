import { MedicalServiceLayout } from "@/components/layout/MedicalServiceLayout"

export default function FeverClinicPage() {
  return (
    <MedicalServiceLayout title="発熱外来" description="発熱症状のある患者様の診療を行います。">
      <section className="space-y-6">
        <h2 className="text-2xl font-medium">診療の流れ</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>電話による事前予約</li>
          <li>問診（症状の確認、渡航歴や接触歴の確認）</li>
          <li>診察（体温測定、聴診器による診察など）</li>
          <li>必要に応じて検査（インフルエンザ検査、新型コロナウイルス検査など）</li>
          <li>診断と治療方針の説明</li>
          <li>処方や療養指導</li>
        </ol>
      </section>
    </MedicalServiceLayout>
  )
}

