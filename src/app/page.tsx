"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Award, Cog, DollarSign, Facebook, Linkedin, MessageSquare, Sparkles, Star, Twitter, User, Zap } from "lucide-react";

export default function LandingPage() {
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
        {
          name: "Home",          id: "#home"},
        {
          name: "About",          id: "#about"},
        {
          name: "Features",          id: "#features"},
        {
          name: "Metrics",          id: "#metrics"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      button={{
        text: "Book Fit Check",        href: "#contact"}}
      brandName="DealflowAi"
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardCarousel
      background={{
        variant: "downward-rays-animated-grid"}}
      title="Booked Seller Calls from Your Seller Leads"
      description="You pay for seller leads — then lose them to slow follow-up. We fix that. Speed-to-lead, missed-call recovery, and 14-day follow-up, done for you. You keep 100% of every deal."
      tag="DealflowAi Agency"
      tagIcon={Sparkles}
      buttons={[
        {
          text: "Book Fit Check (10 min)",          href: "#contact"},
        {
          text: "Text “PILOT”",          href: "#contact"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/representation-user-experience-interface-design_23-2150169842.jpg?_wi=1",          imageAlt: "AI interface displaying real estate data"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/astral-wallpapers-composition-with-buildings_23-2149687893.jpg",          imageAlt: "Hands interacting with holographic CRM"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/light-tunnel-background_53876-88807.jpg",          imageAlt: "Speed-to-lead concept visualization"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/star-favourite-label-box-bar-banner-graphic_53876-125576.jpg",          imageAlt: "Real estate investor reviewing analytics"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-colleagues-talking_23-2149006917.jpg",          imageAlt: "Office desk with automated follow-up dashboard"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/copy-space-geometric-paper-element-set_23-2148547809.jpg",          imageAlt: "Bridge connecting missed leads to booked appointments"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",          content: "Why deals slip. The leads aren't the problem – the follow-up is."},
      ]}
      buttons={[
        {
          text: "Understand the Problem",          href: "#features"},
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBento
      animationType="blur-reveal"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Instant Lead Response",          description: "Our AI-powered systems ensure your leads are contacted within minutes, drastically reducing lost opportunities from slow follow-up.",          bentoComponent: "reveal-icon",          icon: Zap
        },
        {
          title: "Missed Call Recovery",          description: "Never miss a potential seller again. We deploy intelligent systems to recover and re-engage missed calls, turning them into qualified conversations.",          bentoComponent: "chat",          aiIcon: Cog,
          userIcon: User,
          exchanges: [
            {
              userMessage: "I missed a call from a seller, can you help?",              aiResponse: "Absolutely! Our system is re-engaging them with a personalized message and scheduling a callback."},
            {
              userMessage: "What about cold leads?",              aiResponse: "Our 14-day follow-up sequences are designed to warm up cold leads and convert them into booked appointments."},
            {
              userMessage: "How do you ensure qualification?",              aiResponse: "Through a series of strategic interactions, we qualify leads before they reach your calendar, saving you time and effort."},
          ],
          placeholder: "Enter your question..."
        },
        {
          title: "Automated 14-Day Follow-Up",          description: "Most teams give up after 3 attempts. We implement a persistent 14-day multi-channel follow-up sequence, ensuring maximum lead engagement.",          bentoComponent: "animated-bar-chart"
        },
      ]}
      title="What We Handle: From Missed Leads to Booked Appointments"
      description="We specialize in converting your valuable seller leads into high-quality, booked appointments using cutting-edge AI and proven follow-up strategies."
      tag="Our Solutions"
      tagIcon={Star}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      animationType="blur-reveal"
      metrics={[
        {
          id: "m1",          value: "90%",          description: "Increase in Lead-to-Call Conversion"},
        {
          id: "m2",          value: "5X Faster",          description: "Speed-to-Lead Response Time"},
        {
          id: "m3",          value: "100%",          description: "Retention of Your Deal Equity"},
      ]}
      title="Tangible Results You Can Expect"
      description="Our strategies translate directly into measurable improvements for your real estate deal flow. See the impact on your bottom line."
      tag="Our Impact"
      tagIcon={Award}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Alex R.",          date: "2023-11-01",          title: "Doubled Our Booked Calls & Accelerated Deals!",          quote: "DealflowAi completely transformed how we handle seller leads. Their speed-to-lead and automated follow-up brought us deals we would have otherwise missed. Our booked calls doubled within weeks!",          tag: "Wholesaler Agency",          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-confident-saleswoman-working-office-sitting-business-room-reading-writing-down_1258-193622.jpg",          avatarAlt: "Alex R. avatar",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-real-estate-agent-showing-house_23-2150225262.jpg",          imageAlt: "Successful real estate agent closing a deal"},
        {
          id: "2",          name: "Sarah K.",          date: "2023-10-15",          title: "Consistent Deal Flow, Zero Missed Opportunities",          quote: "Before DealflowAi, inconsistent follow-up was costing us. Now, our conversion rates have soared, and our team can focus purely on closing, not chasing. Fantastic service that delivers consistent deal flow!",          tag: "Investment Firm",          avatarSrc: "http://img.b2bpic.net/free-photo/young-gorgeous-stylish-businesswoman-with-cellphone-intently-looking-away-coffee-break-cafe-street_574295-4058.jpg",          avatarAlt: "Sarah K. avatar",          imageSrc: "http://img.b2bpic.net/free-photo/colleagues-discussing-charts-business-meeting_1098-4841.jpg",          imageAlt: "Business professionals reviewing growth charts"},
        {
          id: "3",          name: "Michael L.",          date: "2023-09-28",          title: "Turning Cold Leads into Warm, Booked Appointments",          quote: "The missed call recovery and 14-day follow-up are genius. We were losing so many potential deals, and now every cold lead is systematically warmed up and turned into a new, qualified opportunity. Truly efficient!",          tag: "Real Estate Developer",          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-man-smiling_23-2148729669.jpg",          avatarAlt: "Michael L. avatar",          imageSrc: "http://img.b2bpic.net/free-photo/working-business-technology-computer-internet-male_1163-5494.jpg",          imageAlt: "Professional working on a modern CRM system"},
        {
          id: "4",          name: "Jessica T.",          date: "2023-09-10",          title: "Streamlined Process & Highly Qualified Sellers",          quote: "The best part is the quality of the appointments we receive. Leads are thoroughly vetted, so our time is spent only on highly motivated sellers. This agency truly understands real estate acquisition!",          tag: "Acquisition Specialist",          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-happy-successful-businessman-standing-restaurant-with-crossed-arm_23-2147955259.jpg",          avatarAlt: "Jessica T. avatar",          imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-working-with-documents-laptop_1098-2023.jpg",          imageAlt: "Businesswoman analyzing documents and laptop"},
        {
          id: "5",          name: "David M.",          date: "2023-08-22",          title: "100% Equity Retention: A Game-Changing Model!",          quote: "The model where we keep all of our equity is unbeatable. Coupled with their efficient lead conversion, DealflowAi has become an indispensable partner for our business's growth and profitability.",          tag: "Private Investor",          avatarSrc: "http://img.b2bpic.net/free-photo/businessman-wearing-coat_1098-3778.jpg",          avatarAlt: "David M. avatar",          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-looking-pie-charts-analyzing-data_1098-19793.jpg",          imageAlt: "Businesswoman reviewing financial charts for growth"}
      ]}
      title="Real-World Success Stories: Our Clients Achieve More"
      description="Discover how real estate agencies and investors are dramatically increasing their booked appointments and closing more deals with DealflowAi."
      tag="Success Amplified"
      tagIcon={MessageSquare}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Growth Partners LLC",        "Elite Acquisitions Co.",        "Synergy Capital Group",        "Apex Real Estate Ventures",        "Precision Property Solutions",        "Catalyst Investments",        "Future Flow Realty",        "NextGen Deal Makers"]}
      title="Trusted by Leading Real Estate Agencies & Investors"
      description="Join the ranks of high-performing real estate professionals who rely on DealflowAi to optimize their lead conversion and scale their operations."
      tag="Our Valued Partners"
      tagIcon={DollarSign}
      speed={40}
      showCard={true}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",          title: "What types of seller leads do you specialize in converting?",          content: "We expertly convert a wide range of seller leads, including cold leads, missed calls, and no-response leads. Our systems are designed to engage, qualify, and convert them into booked appointments for your agency."
        },
        {
          id: "faq2",          title: "How quickly can I expect leads to be followed up with?",          content: "Our advanced speed-to-lead system ensures immediate engagement. Leads are typically followed up with within the first 5 minutes of receipt, dramatically increasing your chances of securing a conversation."
        },
        {
          id: "faq3",          title: "What does your '100% of every deal' model mean for my profitability?",          content: "Unlike traditional lead generation services that take a percentage, our unique model ensures you retain 100% of the equity and profit from every deal successfully closed through our optimized systems. Your success is entirely yours."
        },
        {
          id: "faq4",          title: "How does DealflowAi ensure leads are qualified before they reach my calendar?",          content: "Our multi-stage qualification process uses AI-driven interactions and strategic follow-up to pre-vet leads, ensuring that only genuinely motivated and relevant sellers are scheduled for appointments on your calendar, saving you valuable time."
        }
      ]}
      sideTitle="Your Questions, Answered: Ready to Elevate Your Deal Flow?"
      sideDescription="We understand you might have questions about optimizing your real estate lead conversion and growing your agency. Receive a personalized strategy for optimizing your deal flow. Find clear, concise answers below, or connect with our team for a personalized discussion on how we can transform your business."
      buttons={[
        {
          text: "Book a Free Consultation",          href: "https://dealflowai.agency/book"
        }
      ]}
      faqsAnimation="blur-reveal"
      showCard={true}
      textPosition="left"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Ready to Transform Your Dealflow?"
      description="Schedule your complimentary 10-minute Fit Check. Discover how DealflowAi can convert your seller leads into high-quality, booked appointments. No obligations, just results."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email",          required: true
        },
        {
          name: "phone",          type: "tel",          placeholder: "Your Phone Number (Optional)",          required: false
        }
      ]}
      textarea={{
        name: "message",        placeholder: "Tell us about your agency's needs...",        rows: 4
      }}
      buttonText="Schedule My Fit Check"
      mediaPosition="right"
      onSubmit={(data) => console.log('Contact form submitted:', data)}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="DealflowAi"
      copyrightText="© 2024 DealflowAi. All rights reserved."
      socialLinks={[
        {
          icon: Twitter,
          href: "https://twitter.com/dealflowai",          ariaLabel: "Twitter"
        },
        {
          icon: Linkedin,
          href: "https://linkedin.com/company/dealflowai",          ariaLabel: "LinkedIn"
        },
        {
          icon: Facebook,
          href: "https://facebook.com/dealflowai",          ariaLabel: "Facebook"
        }
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
