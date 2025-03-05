import { MedicalServiceLayout } from "@/components/layout/MedicalServiceLayout"

export default function AllergyPage() {
  return (
    <MedicalServiceLayout title="アレルギー" description="花粉症、食物アレルギーなど各種アレルギー疾患に対応します。">
      <section className="space-y-6">
        <h2 className="text-2xl font-medium">主な診療内容</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>花粉症</li>
          <li>食物アレルギー</li>
          <li>アトピー性皮膚炎</li>
          <li>気管支喘息</li>
          <li>アレルギー性鼻炎</li>
        </ul>
      </section>
    </MedicalServiceLayout>
  )
}

