import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Devansh Construction & Architect - Building Dreams with Precision & Trust',
  description: 'Professional architectural services and construction solutions. 3D design, PMC sanction drawings, Vastu consultation, civil construction, and lock & key projects.',
  keywords: 'architectural services, construction services, 3D design, PMC sanction drawing, Vastu consultation, civil construction, PMC PCMC PMRDA sanctioning, lock & key construction',
  authors: [{ name: 'Devansh Construction & Architect' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Devansh Construction & Architect - Building Dreams with Precision & Trust',
    description: 'Professional architectural services and construction solutions with innovative designs and quality construction.',
    type: 'website',
    locale: 'en_IN',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Devansh Construction & Architect",
              "description": "Professional architectural services and construction solutions",
              "telephone": "+91 724 940 0319",
              "email": "info@devanshconstruction.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Office No.09,C-Wing,Yogin Belva,Santnagar,Lohegaon",
                "addressLocality": "Pune",
                "postalCode": "411047",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 18.5204,
                  "longitude": 73.8567
                },
                "geoRadius": "50"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Construction and Architectural Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Architectural Design Services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Construction Services"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  )
}
