"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FaqSplitText from "@/components/sections/faq/FaqSplitText";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import FooterCard from "@/components/sections/footer/FooterCard";
import HeroBillboardCarousel from "@/components/sections/hero/HeroBillboardCarousel";
import InlineImageSplitTextAbout from "@/components/sections/about/InlineImageSplitTextAbout";
import MetricCardTwo from "@/components/sections/metrics/MetricCardTwo";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import TestimonialCardFive from "@/components/sections/testimonial/TestimonialCardFive";
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
          name: "Home",          id: "/#home"},
        {
          name: "About",          id: "/#about"},
        {
          name: "Features",          id: "/#features"},
        {
          name: "Metrics",          id: "/#metrics"},
        {
          name: "Case Studies",          id: "/#testimonials"},
        {
          name: "FAQ",          id: "/#faq"},
        {
          name: "Contact",          id: "/#contact"},
        {
          name: "Privacy Policy",          id: "/privacy-policy"},
        {
          name: "Terms of Service",          id: "/terms-of-service"}
      ]}
      button={{
        text: "Book Fit Check",        href: "https://calendly.com/abdul-dealflowai"}}
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
          text: "Book Fit Check (10 min)",          href: "https://calendly.com/abdul-dealflowai"},
        {
          text: "Text “PILOT”",          href: "/#contact"},
      ]}
      mediaItems={[
        {
          imageSrc: "https://images.unsplash.com/photo-1598460671490-57c2e25d48a5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",          imageAlt: "Modern office building exterior"},
        {
          imageSrc: "https://images.unsplash.com/photo-1560518883-ffcd1afe8088?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",          imageAlt: "Real estate agent showing a modern house to clients"},
        {
          imageSrc: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",          imageAlt: "Interior shot of a stylish, staged living room in a modern home"},
        {
          imageSrc: "https://images.unsplash.com/photo-1490518705335-b28615ce6754?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",          imageAlt: "Team of real estate agents collaborating in a modern meeting room"},
        {
          imageSrc: "https://images.unsplash.com/photo-1549490349-86253457199c?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",          imageAlt: "Overhead view of a city skyline with various commercial buildings"},
        {
          imageSrc: "https://images.unsplash.com/photo-1582236528751-f7614d9b3a3c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",          imageAlt: "House with 'for sale' sign in front of it, indicating a property listing"}
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
          text: "Understand the Problem",          href: "/#features"},
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
      testimonials={[]}
      title="Building Case Studies With Our Founding Clients"
      description="We are actively seeking visionary real estate agencies and investors to partner with us as founding clients. Collaborate with us to develop powerful case studies that highlight your accelerated deal flow and optimized lead conversion. Benefit from bespoke support, direct influence on product development, and exclusive recognition as we build our success narratives together."
      tag="Founding Client Program"
      tagIcon={User}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "NY Wholesalers",        "NJ Investors",        "Local Property Buyers",        "Real Estate Acquisition Firms"]}
      title="Built for NY/NJ Wholesalers and Investors"
      description="We specialize in empowering real estate wholesalers and investors in New York and New Jersey to maximize their deal flow and acquire more properties, faster."
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
          id: "founding-client-phase",          title: "What is the 'founding-client phase' and how does it benefit my agency?",          content: "As we roll out DealflowAi, we're inviting a select group of founding clients to partner with us. During this phase, you'll receive enhanced support, direct input into feature development, and exclusive pricing, all while securing your competitive advantage in lead conversion."
        },
        {
          id: "faq0",          title: "Do you have case studies or testimonials demonstrating your results?",          content: "We are currently building compelling case studies with our founding clients. While our platform has a strong track record, we are focused on showcasing the impact of our cutting-edge solutions through new, in-depth client success stories. Join our Founding Client Program to be part of our next success narrative and gain exclusive benefits."
        },
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
      sideDescription="We understand you might have questions about optimizing your real estate lead conversion and growing your agency. Receive a personalized strategy for optimizing your deal flow. Find clear, concise answers below, or connect with our team for a personalized discussion on how we can transform your business. You can reach Abdul Soloku at 347-652-5313 or abdul.dealflowai@gmail.com."
      buttons={[
        {
          text: "Book a Free Consultation",          href: "https://calendly.com/abdul-dealflowai"
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
      description="Schedule your complimentary 10-minute Fit Check with Abdul Soloku on Calendly: calendly.com/abdul-dealflowai. Discover how DealflowAi can convert your seller leads into high-quality, booked appointments. No obligations, just results. You can also reach us at 347-652-5313 or abdul.dealflowai@gmail.com."
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
      onSubmit={(data) => {
        console.log('Contact form submitted:', data);
        // In a real application, you would send this data to a backend endpoint.
        // For example, using fetch or axios:
        // fetch('/api/contact', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(data),
        // }).then(response => response.json())
        //   .then(result => console.log('Success:', result))
        //   .catch(error => console.error('Error:', error));
        alert(`Thanks for reaching out, ${data.name}! We'll be in touch at ${data.email} or ${data.phone}.`);
      }}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="DealflowAi"
      copyrightText="© 2026 DealflowAi. All rights reserved."
      socialLinks={[]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
