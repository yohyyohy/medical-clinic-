import { MedicalServiceLayout } from "@/components/layout/MedicalServiceLayout"

export default function GeneralInternalMedicinePage() {
  return (
    <MedicalServiceLayout title="一般内科" description="風邪、腹痛、頭痛など一般的な症状の診療を行います。">
      <section className="space-y-6">
        <h2 className="text-2xl font-medium">主な診療内容</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>風邪・インフルエンザ</li>
          <li>胃腸炎・食中毒</li>
          <li>頭痛・めまい</li>
          <li>高血圧・糖尿病などの生活習慣病</li>
          <li>各種検査（血液検査、尿検査、心電図など）</li>
        </ul>
      </section>
    </MedicalServiceLayout>
  )
}

