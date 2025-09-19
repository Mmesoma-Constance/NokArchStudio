import React from "react";
import { useState } from "react";
import Navigation from './../components/Navbar';
import Footer from './../components/Footer';

// Simple Accordion Components
const Accordion = ({ children }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full">
      {children.map((child, index) =>
        // Clone children to pass props
        React.cloneElement(child, {
          isOpen: openIndex === index,
          onToggle: () => setOpenIndex(openIndex === index ? null : index),
        })
      )}
    </div>
  );
};

const AccordionItem = ({ title, children, isOpen, onToggle }) => (
  <div className=" border border-border rounded-lg px-6 py-2 mb-4 bg-card hover:bg-accent/50 transition-colors">
    <button
      onClick={onToggle}
      className="w-full flex justify-between items-center text-left font-medium text-foreground py-6"
    >
      {title}
      <span className="ml-2">{isOpen ? "−" : "+"}</span>
    </button>
    {isOpen && (
      <div className="text-muted-foreground leading-relaxed pb-6">
        {children}
      </div>
    )}
  </div>
);

const FAQ = () => {
  const faqs = [
    {
      id: "item-1",
      question: "What services does NokArchStudio offer?",
      answer:
        "We offer comprehensive architectural services including residential design, commercial architecture, institutional projects, heritage restoration, interior design, and project management. Our team specializes in creating innovative designs that blend modern functionality with cultural sensitivity.",
    },
    {
      id: "item-2",
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on scope and complexity. A residential project typically takes 3-6 months for design development, while larger commercial or institutional projects may take 6-12 months. We provide detailed timelines during our initial consultation phase.",
    },
    {
      id: "item-3",
      question: "Do you work on projects outside Nigeria?",
      answer:
        "Yes, while we're based in Lagos, Nigeria, we work with clients globally. We have experience managing international projects and can coordinate with local consultants and contractors as needed to ensure successful project delivery.",
    },
    {
      id: "item-4",
      question: "What is your design process?",
      answer:
        "Our design process follows five key phases: Discovery & Programming, Conceptual Design, Design Development, Construction Documentation, and Construction Administration. Each phase includes client collaboration to ensure the final design meets your vision and requirements.",
    },
    {
      id: "item-5",
      question: "How do you determine project fees?",
      answer:
        "Our fees are based on project scope, complexity, and timeline. We offer both fixed-fee and percentage-based pricing models. After our initial consultation, we provide a detailed proposal outlining all costs, deliverables, and project phases.",
    },
    {
      id: "item-6",
      question: "Do you handle construction management?",
      answer:
        "Yes, we offer construction administration services to ensure your project is built according to our design intent. This includes regular site visits, contractor coordination, quality control, and addressing any construction-related questions that arise.",
    },
    {
      id: "item-7",
      question: "Can you work within my budget?",
      answer:
        "Absolutely. We work with clients across various budget ranges. During our initial consultation, we discuss your budget parameters and develop design solutions that maximize value while meeting your spatial and aesthetic goals.",
    },
    {
      id: "item-8",
      question: "What makes NokArchStudio unique?",
      answer:
        "Our approach combines contemporary design thinking with deep respect for local culture and context. We prioritize sustainable design practices, innovative use of materials, and creating spaces that enhance the human experience while responding to Nigeria's unique climate and cultural heritage.",
    },
    {
      id: "item-9",
      question: "Do you provide interior design services?",
      answer:
        "Yes, we offer comprehensive interior design services that complement our architectural work. This includes space planning, material selection, custom furniture design, lighting design, and coordination with contractors and vendors.",
    },
    {
      id: "item-10",
      question: "How do I get started with a project?",
      answer:
        "Getting started is simple! Contact us through our website, email, or phone to schedule an initial consultation. We'll discuss your project goals, timeline, and budget, then provide a proposal outlining how we can help bring your vision to life.",
    },
  ];

  return (
    <div className=" min-h-screen bg-background">
      <Navigation />

      <main className=" pt-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
          {/* Header */}
          <div className=" text-center mb-16">
            <h1 className="text-4xl font-light tracking-loose text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="font-inconsolata text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services, process, and
              approach to architectural design.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="font-inconsolata space-y-4">
            <Accordion>
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} title={faq.question}>
                  {faq.answer}
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center p-8 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-3xl font-light tracking-loose text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="font-inconsolata text-muted-foreground mb-6">
              We're here to help. Contact us directly for personalized
              assistance.
            </p>
            <a
              href="/contact"
              className="font-inconsolata inline-flex items-center justify-center px-6 py-3 bg-[#1f5c89] text-white hover:bg-[#1f5c89dd] transition-colors font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
