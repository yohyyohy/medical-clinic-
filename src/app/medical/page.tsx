import Link from "next/link"
import { ArrowRight, Stethoscope, Baby, TreesIcon as Lungs, Flower2, Plane, Clipboard, Thermometer } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Header } from "@/components/layout/Header"

const medicalServices = [
  {
    title: "一般内科",
    description: "風邪、腹痛、頭痛など一般的な症状の診療を行います。",
    icon: Stethoscope,
    href: "/medical/general-internal-medicine",
  },
  {
    title: "小児科",
    description: "お子様の健康管理から予防接種まで幅広く対応します。",
    icon: Baby,
    href: "/medical/pediatrics",
  },
  {
    title: "呼吸器",
    description: "咳、喘息、肺炎など呼吸器系の疾患を診療します。",
    icon: Lungs,
    href: "/medical/respiratory",
  },
  {
    title: "アレルギー",
    description: "花粉症、食物アレルギーなど各種アレルギー疾患に対応します。",
    icon: Flower2,
    href: "/medical/allergy",
  },
  {
    title: "トラベル（渡航）外来",
    description: "海外渡航に必要な予防接種や健康相談を行います。",
    icon: Plane,
    href: "/medical/travel-clinic",
  },
  {
    title: "健康診断",
    description: "定期健康診断や人間ドックなど各種健康診断を実施します。",
    icon: Clipboard,
    href: "/medical/health-checkup",
  },
  {
    title: "発熱外来",
    description: "発熱症状のある患者様の診療を行います。",
    icon: Thermometer,
    href: "/medical/fever-clinic",
  },
]

export default function MedicalPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header
        title="診療案内"
        breadcrumbs={[
          { label: "ホーム", href: "/" },
          { label: "診療案内", href: "/medical" },
        ]}
      />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-light mb-8">診療案内</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {medicalServices.map((service, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <CardHeader className="bg-[#a4c9c8] text-white p-6">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-medium">{service.title}</CardTitle>
                  <service.icon className="w-8 h-8" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">{service.description}</p>
              </CardContent>
              <CardFooter className="bg-gray-50 p-4">
                <Link href={service.href} className="text-[#a4c9c8] hover:underline flex items-center">
                  詳しく見る
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

