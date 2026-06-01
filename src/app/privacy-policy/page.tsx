"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import FooterCard from "@/components/sections/footer/FooterCard";
import LegalSection, { LegalContentSection } from "@/components/legal/LegalSection";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function PrivacyPolicyPage() {
  const privacyPolicyContent: { title: string; sections: LegalContentSection[]; } = {
    title: "Privacy Policy",    sections: [
      {
        heading: "Introduction",        content: [
          {
            type: "paragraph",            text: "DealflowAi Agency (\"we\", \"our\", or \"us\") operates the DealflowAi platform and provides services designed to help real estate investors and wholesalers convert seller leads into booked appointments. This Privacy Policy describes how we collect, use, process, and disclose your information, including personal data, in conjunction with your access to and use of our services."
          },
          {
            type: "paragraph",            text: "By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this policy, please do not access or use our services."
          }
        ]
      },
      {
        heading: "Information We Collect",        content: [
          {
            type: "paragraph",            text: "We collect various types of information for different purposes to provide and improve our services to you. This may include:"
          },
          {
            type: "list",            items: [
              "**Personal Data:** While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. This may include, but is not limited to, your email address, name, phone number, and business information.",              "**Usage Data:** We may also collect information that your browser sends whenever you visit our Service or when you access the Service by or through a mobile device. This Usage Data may include information such as your computer's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.",              "**Lead Data:** Information related to seller leads provided by you for our conversion services, which may include names, contact details, property information, and communication history."
            ]
          }
        ]
      },
      {
        heading: "How We Use Your Information",        content: [
          {
            type: "paragraph",            text: "DealflowAi Agency uses the collected data for various purposes, including:"
          },
          {
            type: "list",            items: [
              "To provide and maintain our Service",              "To notify you about changes to our Service",              "To allow you to participate in interactive features of our Service when you choose to do so",              "To provide customer support",              "To gather analysis or valuable information so that we can improve our Service",              "To monitor the usage of our Service",              "To detect, prevent and address technical issues",              "To fulfill any other purpose for which you provide it",              "To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection",              "To provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information"
            ]
          }
        ]
      },
      {
        heading: "How We Share Your Information",        content: [
          {
            type: "paragraph",            text: "We may share your information in the following situations:"
          },
          {
            type: "list",            items: [
              "**With Service Providers:** We may share your Personal Data with service providers to monitor and analyze the use of our Service, to contact you.",              "**For Business Transfers:** We may share or transfer your Personal Data in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.",              "**With Affiliates:** We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include our parent company and any other subsidiaries, joint venture partners or other companies that we control or that are under common control with us.",              "**With Business Partners:** We may share your information with our business partners to offer you certain products, services or promotions.",              "**With Your Consent:** We may disclose your personal information for any other purpose with your consent."
            ]
          }
        ]
      },
      {
        heading: "Your Data Protection Rights",        content: [
          {
            type: "paragraph",            text: "Depending on your location, you may have the following data protection rights:"
          },
          {
            type: "list",            items: [
              "The right to access, update or delete the information we have on you.",              "The right of rectification.",              "The right to object.",              "The right of restriction.",              "The right to data portability.",              "The right to withdraw consent."
            ]
          }
        ]
      },
      {
        heading: "Data Security",        content: [
          {
            type: "paragraph",            text: "The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security."
          }
        ]
      },
      {
        heading: "Changes to This Privacy Policy",        content: [
          {
            type: "paragraph",            text: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"effective date\" at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."
          }
        ]
      },
      {
        heading: "Contact Us",        content: [
          {
            type: "paragraph",            text: "If you have any questions about this Privacy Policy, please contact us:"
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
              { name: "Case Studies", id: "/#testimonials" },
              { name: "FAQ", id: "/#faq" },
              { name: "Contact", id: "/#contact" },
              { name: "Privacy Policy", id: "/privacy-policy" },
              { name: "Terms of Service", id: "/terms-of-service" }
            ]}
            button={{
              text: "Book Fit Check",              href: "https://calendly.com/abdul-dealflowai"
            }}
            brandName="DealflowAi"
          />
        </div>

        <div id="privacy-policy-content" data-section="privacy-policy-content">
          <LegalSection
            layout="page"
            title={privacyPolicyContent.title}
            sections={privacyPolicyContent.sections}
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
