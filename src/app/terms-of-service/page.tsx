"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import FooterCard from "@/components/sections/footer/FooterCard";
import LegalSection, { LegalContentSection } from "@/components/legal/LegalSection";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function TermsOfServicePage() {
  const termsOfServiceContent: { title: string; sections: LegalContentSection[]; } = {
    title: "Terms of Service",    sections: [
      {
        heading: "1. Introduction",        content: [
          {
            type: "paragraph",            text: "These Terms of Service ('Terms') constitute a legally binding agreement between DealflowAi Agency ('Agency', 'we', 'us', or 'our') and you ('Client' or 'User') concerning your access to and use of the DealflowAi platform and related services (collectively, the 'Service'). By accessing, browsing, or utilizing any aspect of our Service, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with these Terms, you are expressly prohibited from using the Service and must discontinue use immediately."
          }
        ]
      },
      {
        heading: "2. Acceptance of Terms",        content: [
          {
            type: "paragraph",            text: "Your engagement with our Service, including but not limited to account creation, signifies your affirmation that you are at least 18 years of age, possess the legal capacity to enter into this agreement, and commit to adhering to all pertinent local, national, and international laws and regulations governing your use of the Service."
          }
        ]
      },
      {
        heading: "3. Services Provided",        content: [
          {
            type: "paragraph",            text: "DealflowAi Agency delivers sophisticated, AI-driven solutions specifically tailored for real estate investors and wholesalers. Our core objective is to optimize your lead conversion funnel, from initial contact to secured seller appointments, thereby significantly enhancing your operational efficiency and profitability. Our Service offerings include:"
          },
          {
            type: "list",            items: [
              "**Proactive Lead Engagement:** Implementing rapid response protocols to ensure immediate contact with new seller leads, maximizing engagement potential.",              "**Comprehensive Missed Call Recovery:** Deploying advanced strategies and tools to systematically re-engage and qualify leads from missed inbound calls.",              "**Automated Multi-Channel Nurturing:** Executing persistent, multi-channel follow-up campaigns over an extended period (14+ days) to nurture and convert cold or unresponsive leads.",              "**Qualified Appointment Generation:** Facilitating the scheduling of high-quality, pre-vetted appointments with motivated sellers, enabling your team to focus on deal closure."
            ]
          }
        ]
      },
      {
        heading: "4. User Responsibilities",        content: [
          {
            type: "paragraph",            text: "Clients engaging with DealflowAi Agency’s Service are expected to uphold the following responsibilities:"
          },
          {
            type: "list",            items: [
              "Furnish accurate, current, and complete information during the registration process and throughout the duration of Service utilization.",              "Maintain the strict confidentiality of all account credentials and assume full responsibility for all activities occurring under your account.",              "Ensure full compliance with all applicable federal, state, and local laws, rules, and regulations in connection with your use of the Service.",              "Warrant that all lead data provided to the Agency for processing is legally acquired, consent-based (where required), and compliant with all relevant privacy and data protection statutes.",              "Refrain from employing the Service for any illicit, unauthorized, fraudulent, or unethical activities, or in any manner that infringes upon the rights of others."
            ]
          }
        ]
      },
      {
        heading: "5. Payment and Fees",        content: [
          {
            type: "paragraph",            text: "Certain advanced features and service tiers within the DealflowAi platform necessitate the remittance of specified fees. By subscribing to these features, you commit to settling all applicable charges as delineated in your bespoke service agreement or on our official pricing page. All payments rendered are strictly non-refundable, except where explicitly mandated by law or stipulated otherwise in a separate written agreement. The Agency reserves the unilateral right to adjust its pricing structure; any such modifications will be communicated to you in advance, consistent with legal requirements."
          }
        ]
      },
      {
        heading: "6. Intellectual Property",        content: [
          {
            type: "paragraph",            text: "All proprietary content, features, and functionalities comprising the Service, encompassing, but not limited to, textual content, graphic elements, logos, software code, and the proprietary AI algorithms, are and shall remain the exclusive intellectual property of DealflowAi Agency and its respective licensors. Unauthorized reproduction, distribution, modification, creation of derivative works, public display, public performance, republication, downloading, storage, or transmission of any material from our Service is strictly prohibited, save for customary personal, non-commercial use or explicit written authorization from DealflowAi Agency."
          }
        ]
      },
      {
        heading: "7. Disclaimers",        content: [
          {
            type: "paragraph",            text: "The Service is provided on an 'AS IS' and 'AS AVAILABLE' basis, without warranties of any kind, whether express or implied. DealflowAi Agency disclaims all warranties, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance. The Agency does not warrant that the Service will operate without interruption, be entirely secure, or be free from errors or malicious code."
          }
        ]
      },
      {
        heading: "8. Limitation of Liability",        content: [
          {
            type: "paragraph",            text: "To the fullest extent permitted by applicable law, in no event shall DealflowAi Agency, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including, without limitation, loss of profits, data, use, goodwill, or other intangible losses, arising from (i) your access to or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; or (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, even if we have been advised of the possibility of such damages and even if a remedy set forth herein is found to have failed its essential purpose."
          }
        ]
      },
      {
        heading: "9. Indemnification",        content: [
          {
            type: "paragraph",            text: "You agree to indemnify, defend, and hold harmless DealflowAi Agency, its affiliates, licensors, and their respective directors, officers, employees, and agents from and against any and all claims, liabilities, damages, losses, and expenses, including reasonable attorney’s fees and costs, arising out of or in any way connected with (a) your access to or use of the Service; (b) your violation of these Terms; or (c) your infringement of any third-party rights, including intellectual property rights or privacy rights."
          }
        ]
      },
      {
        heading: "10. Termination",        content: [
          {
            type: "paragraph",            text: "We reserve the right to terminate or suspend your account and prohibit access to the Service immediately, without prior notice or liability, at our sole discretion, for any reason whatsoever, including without limitation, your breach of these Terms. Should you wish to terminate your account, you may do so by ceasing all use of the Service."
          }
        ]
      },
      {
        heading: "11. Governing Law",        content: [
          {
            type: "paragraph",            text: "These Terms shall be governed by and construed in accordance with the laws of [Your State/Country], without giving effect to any principles of conflicts of law. You irrevocably agree that the courts of [Your State/Country] shall have exclusive jurisdiction to settle any dispute or claim arising out of or in connection with these Terms."
          }
        ]
      },
      {
        heading: "12. Changes to Terms",        content: [
          {
            type: "paragraph",            text: "DealflowAi Agency reserves the right, at its sole discretion, to modify or replace these Terms at any time. For any material revisions, we will endeavor to provide at least thirty (30) days' prior notice before the updated terms become effective. The determination of what constitutes a 'material change' remains at our exclusive discretion. Your continued access or use of the Service subsequent to the effective date of any revised Terms constitutes your full acceptance of and agreement to be bound by the updated Terms. If you do not agree to the new Terms, you must cease using the Service."
          }
        ]
      },
      {
        heading: "13. Contact Us",        content: [
          {
            type: "paragraph",            text: "For any inquiries or concerns regarding these Terms of Service, please reach out to us via:"
          },
          {
            type: "list",            items: [
              "By email: support@dealflowai.agency",              "By visiting this page on our website: https://dealflowai.agency/contact"
            ]
          }
        ]
      }
    ]
  };

  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="compact"
      sizing="largeSmallSizeLargeTitles"
      background="circleGradient"
      cardStyle="gradient-radial"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="light"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleCentered
            navItems={[
              { name: "Home", id: "/#home" },
              { name: "About", id: "/#about" },
              { name: "Features", id: "/#features" },
              { name: "Metrics", id: "/#metrics" },
              { name: "Testimonials", id: "/#testimonials" },
              { name: "FAQ", id: "/#faq" },
              { name: "Contact", id: "/#contact" },
              { name: "Privacy Policy", id: "/privacy-policy" },
              { name: "Terms of Service", id: "/terms-of-service" }
            ]}
            button={{
              text: "Book Fit Check",              href: "/#contact"
            }}
            brandName="DealflowAi"
          />
        </div>

        <div id="terms-of-service-content" data-section="terms-of-service-content">
          <LegalSection
            layout="page"
            title={termsOfServiceContent.title}
            sections={termsOfServiceContent.sections}
            className="py-12 md:py-16 lg:py-20 bg-background text-foreground"
            titleClassName="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
            sectionClassName="mb-10 border-b border-foreground/5 pb-8 last:border-b-0 last:pb-0"
            headingClassName="text-2xl md:text-3xl font-semibold mb-4 text-primary-cta"
            contentClassName="text-base md:text-lg leading-relaxed text-foreground/80 max-w-3xl xl:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
            listClassName="list-disc list-inside space-y-1 md:space-y-2 text-base md:text-lg text-foreground/80 max-w-3xl xl:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterCard
            logoText="DealflowAi"
            copyrightText="© 2024 DealflowAi. All rights reserved."
            socialLinks={[
              {
                icon: Twitter,
                href: "https://twitter.com/dealflowai",                ariaLabel: "Twitter"
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/company/dealflowai",                ariaLabel: "LinkedIn"
              },
              {
                icon: Facebook,
                href: "https://facebook.com/dealflowai",                ariaLabel: "Facebook"
              }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}