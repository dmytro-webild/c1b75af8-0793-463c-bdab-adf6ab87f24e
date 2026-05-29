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
            type: "paragraph",            text: "Welcome to DealflowAi Agency! These Terms of Service ('Terms') govern your use of our website, platform, and services (collectively, the 'Service'). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Service."
          }
        ]
      },
      {
        heading: "2. Acceptance of Terms",        content: [
          {
            type: "paragraph",            text: "By creating an account or using our Service, you confirm that you are at least 18 years of age and capable of forming a binding contract. You also agree to comply with all applicable laws and regulations regarding your use of the Service."
          }
        ]
      },
      {
        heading: "3. Services Provided",        content: [
          {
            type: "paragraph",            text: "DealflowAi Agency provides AI-driven solutions for real estate investors and wholesalers, focusing on lead conversion, speed-to-lead, missed call recovery, and automated follow-up sequences to secure booked seller appointments. Our services are designed to enhance your deal flow efficiency and profitability."
          },
          {
            type: "list",            items: [
              "**Lead Qualification:** Automated systems to qualify seller leads.",              "**Speed-to-Lead:** Rapid response to new leads to maximize engagement.",              "**Missed Call Recovery:** Strategies and tools to re-engage missed seller calls.",              "**Automated Follow-Up:** Multi-channel, persistent follow-up campaigns over 14+ days.",              "**Appointment Booking:** Facilitation of booked appointments with qualified sellers."
            ]
          }
        ]
      },
      {
        heading: "4. User Responsibilities",        content: [
          {
            type: "paragraph",            text: "As a user of DealflowAi Agency's Service, you agree to:"
          },
          {
            type: "list",            items: [
              "Provide accurate and complete information during registration and use of the Service.",              "Maintain the confidentiality of your account login information.",              "Comply with all applicable local, state, national, and international laws and regulations.",              "Only provide lead data that you have the legal right to use for the purposes of our Service and that complies with all privacy and data protection laws.",              "Not use the Service for any illegal, unauthorized, or unethical purposes."
            ]
          }
        ]
      },
      {
        heading: "5. Payment and Fees",        content: [
          {
            type: "paragraph",            text: "Access to certain features of the Service may require payment of fees. You agree to pay all applicable fees as described on our website or in your service agreement. All fees are non-refundable unless otherwise stated. We reserve the right to change our prices at any time, with notice to you as required by law."
          }
        ]
      },
      {
        heading: "6. Intellectual Property",        content: [
          {
            type: "paragraph",            text: "All content, features, and functionality on the Service, including but not limited to text, graphics, logos, software, and the underlying AI algorithms, are the exclusive property of DealflowAi Agency and its licensors. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Service, except as generally permitted for personal, non-commercial use, or as explicitly authorized by DealflowAi Agency."
          }
        ]
      },\n      {
        heading: "7. Disclaimers",        content: [
          {
            type: "paragraph",            text: "The Service is provided on an 'AS IS' and 'AS AVAILABLE' basis, without any warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance. DealflowAi Agency does not warrant that the Service will be uninterrupted, secure, or error-free."
          }
        ]
      },
      {
        heading: "8. Limitation of Liability",        content: [
          {
            type: "paragraph",            text: "In no event shall DealflowAi Agency, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose."
          }
        ]
      },
      {
        heading: "9. Indemnification",        content: [
          {
            type: "paragraph",            text: "You agree to defend, indemnify, and hold harmless DealflowAi Agency and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of the Service, by you or any person using your account and password; b) a breach of these Terms; or c) content posted on the Service."
          }
        ]
      },
      {
        heading: "10. Termination",        content: [
          {
            type: "paragraph",            text: "We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms. If you wish to terminate your account, you may simply discontinue using the Service."
          }
        ]
      },
      {
        heading: "11. Governing Law",        content: [
          {
            type: "paragraph",            text: "These Terms shall be governed and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights."
          }
        ]
      },
      {
        heading: "12. Changes to Terms",        content: [
          {
            type: "paragraph",            text: "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service."
          }
        ]
      },
      {
        heading: "13. Contact Us",        content: [
          {
            type: "paragraph",            text: "If you have any questions about these Terms, please contact us:"
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
            className="py-16 md:py-24 lg:py-32 bg-background text-foreground"
            titleClassName="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-foreground"
            sectionClassName="mb-12 border-b border-foreground/10 pb-10 last:border-b-0 last:pb-0"
            headingClassName="text-3xl md:text-4xl font-semibold mb-6 text-primary-cta"
            contentClassName="text-lg leading-relaxed text-foreground/80 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
            listClassName="list-disc list-inside space-y-2 text-lg text-foreground/80 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
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
