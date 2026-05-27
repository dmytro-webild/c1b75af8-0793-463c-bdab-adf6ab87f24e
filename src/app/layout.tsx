import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'DealflowAi - Booked Seller Calls & Lead Conversion',
  description: 'DealFlowAI helps real estate investors and wholesalers convert missed calls and no-response leads into qualified seller conversations and booked appointments through speed-to-lead and follow-up systems.',
  keywords: ["real estate, investors, wholesalers, lead generation, lead conversion, AI, automation, follow-up systems, missed calls, booked appointments, dealflow"],
  openGraph: {
    "title": "DealflowAi - Booked Seller Calls & Lead Conversion",
    "description": "DealFlowAI helps real estate investors and wholesalers convert missed calls and no-response leads into qualified seller conversations and booked appointments through speed-to-lead and follow-up systems.",
    "url": "https://dealflowai.agency/",
    "siteName": "DealflowAi",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/representation-user-experience-interface-design_23-2150169842.jpg",
        "alt": "AI interface displaying real estate data for DealflowAi"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "DealflowAi - Booked Seller Calls & Lead Conversion",
    "description": "DealFlowAI helps real estate investors and wholesalers convert missed calls and no-response leads into qualified seller conversations and booked appointments through speed-to-lead and follow-up systems.",
    "images": [
      "http://img.b2bpic.net/free-photo/representation-user-experience-interface-design_23-2150169842.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} ${openSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
