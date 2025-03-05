import { MedicalServiceLayout } from "@/components/layout/MedicalServiceLayout"

export default function HealthCheckupPage() {
  return (
    <MedicalServiceLayout title="健康診断" description="定期健康診断や人間ドックなど各種健康診断を実施します。">
      <section className="space-y-6">
        <h2 className="text-2xl font-medium">主な健康診断</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>一般健康診断</li>
          <li>生活習慣病健診</li>
          <li>人間ドック</li>
          <li>特定健康診査（メタボ健診）</li>
          <li>各種がん検診（胃がん、大腸がん、肺がんなど）</li>
        </ul>
      </section>
    </MedicalServiceLayout>
  )
}

