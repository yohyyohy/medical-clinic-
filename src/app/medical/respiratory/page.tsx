import { MedicalServiceLayout } from "@/components/layout/MedicalServiceLayout"

export default function RespiratoryPage() {
  return (
    <MedicalServiceLayout title="呼吸器" description="咳、喘息、肺炎など呼吸器系の疾患を診療します。">
      <section className="space-y-6">
        <h2 className="text-2xl font-medium">主な診療内容</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>気管支喘息</li>
          <li>慢性閉塞性肺疾患（COPD）</li>
          <li>肺炎</li>
          <li>気管支炎</li>
          <li>睡眠時無呼吸症候群</li>
        </ul>
      </section>
    </MedicalServiceLayout>
  )
}

