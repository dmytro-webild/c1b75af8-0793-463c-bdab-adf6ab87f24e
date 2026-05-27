"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Award, Cog, DollarSign, HelpCircle, MessageSquare, Rocket, Sparkles, Star, User, Zap } from "lucide-react";

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
          imageSrc: "http://img.b2bpic.net/free-photo/representation-user-experience-interface-design_23-2150169842.jpg",          imageAlt: "AI interface displaying real estate data"},
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
          id: "1",          name: "Alex R.",          date: "2023-11-01",          title: "Game Changer for Our Dealflow!",          quote: "DealflowAi completely transformed how we handle seller leads. The speed-to-lead and automated follow-up brought us deals we would have otherwise missed. Highly recommend!",          tag: "Wholesaler",          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-confident-saleswoman-working-office-sitting-business-room-reading-writing-down_1258-193622.jpg",          avatarAlt: "Alex R. avatar",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-real-estate-agent-showing-house_23-2150225262.jpg",          imageAlt: "Real estate deal closing"},
        {
          id: "2",          name: "Sarah K.",          date: "2023-10-15",          title: "Increased Our Conversion Rates Significantly",          quote: "Before DealflowAi, we were struggling with lead response times. Now, our conversion rates have soared, and our team can focus on closing, not chasing. Fantastic service!",          tag: "Investor",          avatarSrc: "http://img.b2bpic.net/free-photo/young-gorgeous-stylish-businesswoman-with-cellphone-intently-looking-away-coffee-break-cafe-street_574295-4058.jpg",          avatarAlt: "Sarah K. avatar",          imageSrc: "http://img.b2bpic.net/free-photo/flat-statistics-presentation-with-arrows_23-2149023772.jpg",          imageAlt: "Lead conversion graph"},
        {
          id: "3",          name: "Michael L.",          date: "2023-09-28",          title: "Missed Calls are a Thing of the Past",          quote: "The missed call recovery system is genius. We were losing so many potential deals, and now every call is a new opportunity. It's truly a seamless process.",          tag: "Developer",          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-man-smiling_23-2148729669.jpg",          avatarAlt: "Michael L. avatar",          imageSrc: "http://img.b2bpic.net/free-photo/happy-young-asian-man-standing-indoors_171337-10599.jpg",          imageAlt: "Phone with missed call recovery UI"},
        {
          id: "4",          name: "Jessica T.",          date: "2023-09-10",          title: "Finally, Qualified Appointments!",          quote: "The best part is the quality of the appointments we receive. Leads are thoroughly vetted, so our time is spent on highly motivated sellers. This agency understands real estate.",          tag: "Entrepreneur",          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-happy-successful-businessman-standing-restaurant-with-crossed-arm_23-2147955259.jpg",          avatarAlt: "Jessica T. avatar",          imageSrc: "http://img.b2bpic.net/free-photo/calendar-planner-agenda-schedule-concept_53876-132201.jpg",          imageAlt: "Calendar with booked appointments"},
        {
          id: "5",          name: "David M.",          date: "2023-08-22",          title: "Keeping 100% of Our Deals is Huge",          quote: "The model where we keep all of our equity is unbeatable. Coupled with their efficient lead conversion, DealflowAi has become an indispensable partner for our business.",          tag: "Real Estate Investor",          avatarSrc: "http://img.b2bpic.net/free-photo/businessman-wearing-coat_1098-3778.jpg",          avatarAlt: "David M. avatar",          imageSrc: "http://img.b2bpic.net/free-photo/business-man-show-money-bank-note-make-financial-plan-invite-people-sell-buy-house-car-monetary-properties-loan-credit-insurance-concept_1150-13576.jpg",          imageAlt: "Stack of cash and sold sign"},
      ]}
      title="Hear From Our Happy Clients"
      description="Our clients consistently see significant improvements in their deal flow and conversion rates. Their success is our success."
      tag="Success Stories"
      tagIcon={MessageSquare}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Real Estate Pros Inc.",        "Property Invest Co.",        "Wholesale Empire Group",        "Acquisition Masters LLC",        "Deal Maker Capital",        "Elite Investor Network",        "Home Buyer Solutions",        "Growth Property Ventures"]}
      title="Trusted by Leading Real Estate Professionals"
      description="Join the ranks of successful investors and wholesalers who rely on DealflowAi to optimize their lead conversion."
      tag="Our Partners"
      tagIcon={DollarSign}
      speed={40}
      showCard={true}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",          title: "What kind of leads do you work with?",          content: "We work with various types of seller leads, including cold leads, missed calls, and no-response leads. Our systems are designed to engage and qualify them for you."},
        {
          id: "faq2",          title: "How quickly do you follow up with leads?",          content: "Our speed-to-lead system ensures immediate follow-up, typically within the first 5 minutes, significantly increasing the chances of engagement."},
        {
          id: "faq3",          title: "What does '100% of every deal' mean?",          content: "Unlike traditional lead services that take a cut, our model ensures you retain 100% of the equity and profit from every deal closed through our systems."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/copy-space-light-bulb_23-2148519441.jpg"
      imageAlt="Question mark turning into a lightbulb"
      mediaAnimation="slide-up"
      mediaPosition="left"
      title="Frequently Asked Questions"
      description="Have more questions? We're here to provide clear answers about our process and how we can help your agency."
      tag="Get Answers"
      tagIcon={HelpCircle}
      faqsAnimation="blur-reveal"
      showCard={true}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient"}}
      tag="Ready to Grow?"
      tagIcon={Rocket}
      title="Stop Losing Deals. Start Booking Appointments."
      description="It's time to supercharge your lead conversion. Book a quick 10-minute fit check with us to see how DealflowAi can transform your business."
      buttons={[
        {
          text: "Book My Fit Check Now",          href: "https://dealflowai.agency/book"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Company",          items: [
            {
              label: "Home",              href: "#home"},
            {
              label: "About Us",              href: "#about"},
            {
              label: "Services",              href: "#features"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "FAQ",              href: "#faq"},
            {
              label: "Contact Us",              href: "#contact"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
      logoText="DealflowAi"
      copyrightText="© 2024 DealflowAi. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
