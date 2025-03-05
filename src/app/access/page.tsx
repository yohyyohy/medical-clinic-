import { Header } from "@/components/layout/Header"

export default function AccessPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header
        title="アクセス"
        breadcrumbs={[
          { label: "ホーム", href: "/" },
          { label: "アクセス", href: "/access" },
        ]}
      />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-light mb-8">アクセス</h1>
          <div className="mb-8">
            <h2 className="text-2xl font-light mb-4">所在地</h2>
            <p className="text-xl mb-2">〒151-0073</p>
            <p className="text-xl mb-6">東京都渋谷区笹塚1-31-11 ビラージュ笹塚I-101</p>
          </div>
          <div className="aspect-w-16 aspect-h-9 mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.827853707572!2d139.66694687677415!3d35.67392037259364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f2767eb9e92f%3A0x64a1d7165f8662f9!2z44OT44Op44O844K444Ol56yg5aCA!5e0!3m2!1sja!2sjp!4v1707883720764!5m2!1sja!2sjp"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-light mb-4">アクセス方法</h2>
            <p className="text-lg leading-relaxed">
              京王線笹塚駅南口より徒歩1分。
              <br />
              改札を背に右側に出て代田橋方向へ50mほど進みます。
              <br />
              不動産の角を左に曲がった最初の信号の右手角になります。
              <br />
              笹塚幼稚園の向かいです。
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

