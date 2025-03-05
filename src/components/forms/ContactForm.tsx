"use client"

import type React from "react"
import { useState } from "react"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const schema = z.object({
  companyName: z.string().min(1, "会社名は必須です"),
  contactPerson: z.string().min(1, "担当者名は必須です"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  phone: z.string().min(1, "電話番号は必須です"),
  message: z.string().min(10, "メッセージは10文字以上で入力してください"),
})

type FormData = z.infer<typeof schema>

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      schema.parse(formData)
      // ここで実際の送信処理を実装します。
      console.log("送信されたデータ:", formData)
      // 成功時の処理（例：成功メッセージの表示）
      setErrors({})
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.flatten().fieldErrors)
      }
    }
  }

  return (
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
        {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName}</p>}
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
        {errors.contactPerson && <p className="text-red-500 text-sm">{errors.contactPerson}</p>}
      </div>
      <div>
        <Label htmlFor="email">メールアドレス</Label>
        <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div>
        <Label htmlFor="phone">電話番号</Label>
        <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>
      <div>
        <Label htmlFor="message">お問い合わせ内容</Label>
        <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} required />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </div>
      <Button type="submit" className="w-full">
        送信する
      </Button>
    </form>
  )
}

