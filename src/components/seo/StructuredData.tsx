import Script from 'next/script'

export default function structureddata() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "坂本クリニック",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "笹塚1-31-11 ビラージュ笹塚I-101",
      "addressLocality": "渋谷区",
      "addressRegion": "東京都",
      "postalCode": "151-0073",
      "addressCountry": "JP"
    },
    "telephone": "03-3469-3926",
    "url": "https://www.sakamoto-clinic.com"
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}