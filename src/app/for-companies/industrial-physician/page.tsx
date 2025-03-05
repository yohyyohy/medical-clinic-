"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function IndustrialPhysicianPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ここで実際の送信処理を実装します。
    console.log("送信されたデータ:", formData)
    // 送信後、フォームをリセットするなどの処理を追加できます
  }

  return (
    <div className="min-h-screen bg-white">
      <Header
        title="産業医サービス"
        breadcrumbs={[
          { label: "ホーム", href: "/" },
          { label: "企業の方へ", href: "/for-companies" },
          { label: "産業医サービス", href: "/for-companies/industrial-physician" },
        ]}
      />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-light mb-8">産業医依頼のお問い合わせ</h1>
          <p className="mb-8 text-lg">
            坂本クリニックでは、企業の皆様に向けて産業医サービスを提供しております。
            従業員の健康管理や職場環境の改善にお悩みの企業様は、ぜひお問い合わせください。
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="companyName">会社名</Label>
              <Input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="contactPerson">担当者名</Label>
              <Input
                type="text"
                id="contactPerson"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">メールアドレス</Label>
              <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="phone">電話番号</Label>
              <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="message">お問い合わせ内容</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              送信する
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}

