import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Shield, Heart, Zap, Star, CheckCircle, Clock, ArrowRight,
  Baby, Scissors, Sparkles, Phone, MessageCircle, ChevronRight,
  Plus, Minus, Stethoscope, Eye, Award
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import Layout from "@/components/Layout";

// Gallery images
import clinicBanner from "@/assets/gallery/clinic-banner.webp";
import dentalChair from "@/assets/gallery/dental-chair.webp";
import operatory from "@/assets/gallery/operatory.jpg";
import treatment1 from "@/assets/gallery/treatment-1.webp";
import treatment2 from "@/assets/gallery/treatment-2.webp";
import treatment3 from "@/assets/gallery/treatment-3.jpg";
import orthodontics from "@/assets/gallery/orthodontics.webp";
import reception from "@/assets/gallery/reception-desk.jpg";

const WHATSAPP_NUMBER = "2349038535214";
const CALL_NUMBER = "+2349024403837";

const serviceCategories = [
  {
    icon: Shield,
    title: "Preventive Dentistry",
    subtitle: "Stay Ahead of Problems",
    description: "Prevention is the foundation of great oral health. Our preventive services catch issues early and keep your smile healthy for life.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    image: reception,
    items: [
      "Scaling & polishing (professional cleaning)",
      "Routine dental checkups & oral exams",
      "Fluoride treatments",
      "Dental sealants",
      "Oral hygiene education",
      "Gum disease prevention",
      "Bad breath (halitosis) treatment",
    ],
  },
  {
    icon: Heart,
    title: "General Dentistry",
    subtitle: "Everyday Dental Care",
    description: "From fillings to extractions, our general dentistry services address your day-to-day dental needs with precision and care.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    image: dentalChair,
    items: [
      "Tooth fillings (composite/amalgam)",
      "Basic tooth extractions",
      "Gum treatment (gingivitis, early periodontitis)",
      "Treatment of tooth sensitivity",
      "Minor infections and oral conditions",
    ],
  },
  {
    icon: Zap,
    title: "Restorative Dentistry",
    subtitle: "Rebuild & Restore",
    description: "Lost a tooth or need repair? Our restorative treatments bring back function and beauty to your smile using modern techniques.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    image: treatment1,
    items: [
      "Root canal therapy (endodontics)",
      "Dental crowns (caps)",
      "Dental bridges",
      "Full and partial dentures",
      "Dental implants (tooth replacement)",
      "Tooth reconstruction",
    ],
  },
  {
    icon: Star,
    title: "Cosmetic Dentistry",
    subtitle: "Smile Makeover",
    description: "Transform your smile with our cosmetic treatments. From whitening to veneers, we'll help you achieve the smile you've always wanted.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    image: treatment2,
    items: [
      "Teeth whitening (in-office & take-home)",
      "Dental veneers (composite/porcelain)",
      "Smile design / smile makeover",
      "Teeth reshaping (contouring)",
      "Gap closure",
    ],
  },
  {
    icon: CheckCircle,
    title: "Orthodontics",
    subtitle: "Straighten & Align",
    description: "Achieve perfectly aligned teeth and a confident bite with our orthodontic solutions for all ages.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    image: orthodontics,
    items: [
      "Traditional braces (metal/ceramic)",
      "Clear aligners",
      "Bite correction (malocclusion)",
      "Teeth alignment for adults & teens",
    ],
  },
  {
    icon: Scissors,
    title: "Oral Surgery & Emergency Care",
    subtitle: "Expert Surgical Solutions",
    description: "When you need urgent care or surgical intervention, our experienced team is ready to provide immediate, expert treatment.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    image: operatory,
    items: [
      "Surgical tooth extraction (including wisdom teeth)",
      "Emergency pain relief",
      "Abscess drainage",
      "Trauma management (broken/chipped teeth)",
      "Infection control",
    ],
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    subtitle: "Kid-Friendly Care",
    description: "We make dental visits fun for kids! Our gentle, child-friendly approach ensures your little ones develop healthy dental habits early.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    image: treatment3,
    items: [
      "Child-friendly dental care",
      "Preventive care for kids",
      "Fluoride treatment for children",
      "Space maintainers",
      "Early orthodontic assessment",
      "Behavioral management (gentle approach)",
    ],
  },
];

const whyChooseUs = [
  { icon: Award, title: "Experienced Team", desc: "Our skilled dental professionals bring years of expertise to every procedure." },
  { icon: Stethoscope, title: "Modern Equipment", desc: "State-of-the-art technology for accurate diagnosis and comfortable treatments." },
  { icon: Shield, title: "NHIS Accepted", desc: "We accept NHIS insurance, making quality dental care accessible and affordable." },
  { icon: Heart, title: "Patient-First Approach", desc: "Your comfort and satisfaction are at the heart of everything we do." },
  { icon: Eye, title: "Transparent Pricing", desc: "No hidden costs — clear treatment plans and upfront pricing always." },
  { icon: Clock, title: "Flexible Scheduling", desc: "Open 6 days a week with convenient appointment times that fit your schedule." },
];

const Services = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const bookingMessage = selectedServices.length > 0
    ? `Hello Rubi Smile! I'd like to book an appointment for the following services:\n\n${selectedServices.map((s) => `• ${s}`).join("\n")}\n\nPlease let me know available times. Thank you!`
    : "Hello Rubi Smile! I'd like to book an appointment. Please let me know available times.";

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(bookingMessage)}`;

  return (
    <Layout>
      {/* Hero with gallery image */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={clinicBanner} alt="Rubi Smile Dental Clinic" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>
        <div className="container mx-auto px-6 relative z-10 py-32">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 font-display text-sm font-semibold text-accent backdrop-blur-sm border border-accent/20">
              <Sparkles className="h-4 w-4" /> Comprehensive Dental Care
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground mt-6 max-w-3xl leading-[1.1]">
              Expert Care for Every <span className="text-accent">Smile</span>
            </h1>
            <p className="font-body text-lg text-primary-foreground/80 mt-6 max-w-xl leading-relaxed">
              From routine cleanings to advanced procedures — 7 specialized service categories tailored to your family's needs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-display text-sm font-bold text-accent-foreground transition-all duration-300 hover:-translate-y-px hover:shadow-xl active:scale-95"
              >
                <MessageCircle className="h-4 w-4" /> Book on WhatsApp
              </a>
              <a
                href={`tel:${CALL_NUMBER}`}
                className="flex items-center gap-2 rounded-full border-2 border-primary-foreground/30 px-8 py-4 font-display text-sm font-bold text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/10"
              >
                <Phone className="h-4 w-4" /> Call for Enquiry
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Service Selection Bar */}
      {selectedServices.length > 0 && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="sticky top-20 z-40 bg-accent/95 backdrop-blur-md shadow-lg"
        >
          <div className="container mx-auto px-6 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent-foreground/20 font-display text-sm font-bold text-accent-foreground">
                {selectedServices.length}
              </span>
              <span className="font-display text-sm font-semibold text-accent-foreground truncate">
                {selectedServices.length === 1 ? "service selected" : "services selected"}
              </span>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-2 rounded-full bg-accent-foreground px-6 py-2.5 font-display text-sm font-bold text-accent transition-all duration-200 hover:-translate-y-px active:scale-95"
            >
              Book Now <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      )}

      {/* Service Cards - Detailed */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="font-display text-sm font-semibold text-accent uppercase tracking-wider">What We Offer</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground mt-3">
                Our Full Range of Services
              </h2>
              <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
                Select the services you're interested in, then book directly via WhatsApp. You can choose multiple services at once.
              </p>
            </div>
          </SectionReveal>

          <div className="space-y-6">
            {serviceCategories.map((cat, i) => {
              const isExpanded = expandedCard === i;
              const isSelected = selectedServices.includes(cat.title);

              return (
                <SectionReveal key={cat.title} delay={i * 0.05}>
                  <div
                    className={`rounded-card overflow-hidden transition-all duration-300 ${
                      isSelected
                        ? "ring-2 ring-accent shadow-hover-lift"
                        : "shadow-card hover:shadow-hover-lift"
                    }`}
                  >
                    {/* Card Header */}
                    <div className="flex flex-col lg:flex-row">
                      {/* Image */}
                      <div className="lg:w-72 h-48 lg:h-auto shrink-0 overflow-hidden">
                        <img
                          src={cat.image}
                          alt={cat.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-6 lg:p-8">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <div className={`flex h-10 w-10 items-center justify-center rounded-inner ${cat.bgColor}`}>
                                <cat.icon className={`h-5 w-5 ${cat.color}`} />
                              </div>
                              <div>
                                <h3 className="font-display text-xl font-bold text-foreground">{cat.title}</h3>
                                <p className="font-display text-xs font-semibold text-accent uppercase tracking-wider">{cat.subtitle}</p>
                              </div>
                            </div>
                            <p className="font-body text-sm text-muted-foreground mt-3 leading-relaxed max-w-xl">{cat.description}</p>
                          </div>

                          {/* Select button */}
                          <button
                            onClick={() => toggleService(cat.title)}
                            className={`shrink-0 flex items-center gap-2 rounded-full px-5 py-2.5 font-display text-xs font-bold transition-all duration-200 active:scale-95 ${
                              isSelected
                                ? "bg-accent text-accent-foreground"
                                : "bg-muted text-foreground hover:bg-accent/10"
                            }`}
                          >
                            {isSelected ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                            {isSelected ? "Selected" : "Select"}
                          </button>
                        </div>

                        {/* Expand toggle */}
                        <button
                          onClick={() => setExpandedCard(isExpanded ? null : i)}
                          className="mt-4 flex items-center gap-1 font-display text-xs font-semibold text-accent hover:text-accent/80 transition-colors"
                        >
                          {isExpanded ? "Hide details" : "View all treatments"}
                          <ChevronRight className={`h-3.5 w-3.5 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`} />
                        </button>

                        {/* Expanded treatments list */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="grid sm:grid-cols-2 gap-2 mt-4 pt-4 border-t border-border/50">
                                {cat.items.map((item) => (
                                  <div key={item} className="flex items-start gap-2">
                                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                                    <span className="font-body text-sm text-muted-foreground">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-gradient-teal py-24">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="font-display text-sm font-semibold text-accent uppercase tracking-wider">Why Rubi Smile</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground mt-3">
                Why Patients Trust Us
              </h2>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.08}>
                <div className="rounded-card bg-background p-8 shadow-card h-full group hover:shadow-hover-lift transition-all duration-300">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-inner bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Showcase Strip */}
      <section className="py-16 bg-background overflow-hidden">
        <div className="container mx-auto px-6 mb-8">
          <SectionReveal>
            <h2 className="font-display text-2xl font-extrabold text-foreground text-center">
              Inside Our Clinic
            </h2>
            <p className="font-body text-muted-foreground text-center mt-2">
              Modern facilities designed for your comfort
            </p>
          </SectionReveal>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 px-6 snap-x snap-mandatory scrollbar-hide">
          {[clinicBanner, dentalChair, operatory, treatment1, orthodontics, reception, treatment2, treatment3].map((img, i) => (
            <SectionReveal key={i} delay={i * 0.05}>
              <div className="shrink-0 w-72 h-48 rounded-card overflow-hidden snap-center">
                <img src={img} alt={`Clinic view ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Treatment Process */}
      <section className="section-gradient-dark py-24">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="font-display text-sm font-semibold text-accent uppercase tracking-wider">How It Works</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary-foreground mt-3">
                Your Treatment Journey
              </h2>
              <p className="font-body text-primary-foreground/60 mt-4 max-w-xl mx-auto">
                From your first call to your brightest smile — here's what to expect.
              </p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Book", desc: "Reach out via WhatsApp or call to schedule your appointment.", icon: MessageCircle },
              { num: "02", title: "Consult", desc: "Meet our dentist for a thorough examination and personalized treatment plan.", icon: Stethoscope },
              { num: "03", title: "Treat", desc: "Receive expert, gentle care using state-of-the-art equipment.", icon: Heart },
              { num: "04", title: "Smile", desc: "Walk out with a healthier, more confident smile you'll love.", icon: Sparkles },
            ].map((step, i) => (
              <SectionReveal key={step.num} delay={i * 0.1}>
                <div className="relative text-center">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 border border-accent/25">
                    <step.icon className="h-7 w-7 text-accent" />
                  </div>
                  <div className="font-display text-xs font-bold text-accent mb-2">STEP {step.num}</div>
                  <h3 className="font-display text-xl font-bold text-primary-foreground">{step.title}</h3>
                  <p className="font-body text-sm text-primary-foreground/60 mt-2 leading-relaxed">{step.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={treatment2} alt="Dental treatment" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/85" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <SectionReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary-foreground max-w-2xl mx-auto">
              Ready to Book Your Appointment?
            </h2>
            <p className="font-body text-primary-foreground/70 mt-4 max-w-lg mx-auto leading-relaxed">
              {selectedServices.length > 0
                ? `You've selected ${selectedServices.length} service${selectedServices.length > 1 ? "s" : ""}. Book now via WhatsApp or call us for enquiries.`
                : "Select services above or contact us directly. We're here to help you smile brighter."}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-display text-sm font-bold text-accent-foreground transition-all duration-300 hover:-translate-y-px hover:shadow-xl active:scale-95"
              >
                <MessageCircle className="h-4 w-4" />
                {selectedServices.length > 0 ? `Book ${selectedServices.length} Service${selectedServices.length > 1 ? "s" : ""}` : "Book on WhatsApp"}
              </a>
              <a
                href={`tel:${CALL_NUMBER}`}
                className="flex items-center gap-2 rounded-full border-2 border-primary-foreground/30 px-8 py-4 font-display text-sm font-bold text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/10"
              >
                <Phone className="h-4 w-4" /> Call for Enquiry
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
