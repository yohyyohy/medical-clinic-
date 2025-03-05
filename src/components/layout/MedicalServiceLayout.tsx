import type React from "react"
import { Header } from "@/components/layout/Header"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

interface MedicalServiceLayoutProps {
  title: string
  description: string
  children: React.ReactNode
}

export function MedicalServiceLayout({ title, description, children }: MedicalServiceLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header
        title={title}
        breadcrumbs={[
          { label: "ホーム", href: "/" },
          { label: "診療案内", href: "/medical" },
          { label: title, href: "#" },
        ]}
      />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-light mb-6">{title}</h1>
          <p className="text-xl text-gray-600 mb-8">{description}</p>
          {children}
          <div className="mt-12 text-center">
            <Button className="bg-[#a4c9c8] hover:bg-[#93b5b4] text-white text-lg px-6 py-3">
              <Calendar className="w-5 h-5 mr-2" />
              診療予約
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}


