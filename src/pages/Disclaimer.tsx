import SectionReveal from "@/components/SectionReveal";
import Layout from "@/components/Layout";

const Disclaimer = () => (
  <Layout>
    <section className="bg-muted py-24">
      <div className="container mx-auto px-6 text-center">
        <SectionReveal>
          <h1 className="font-display text-5xl font-extrabold text-foreground">Disclaimer</h1>
          <p className="font-body text-muted-foreground mt-4">Last updated: March 2026</p>
        </SectionReveal>
      </div>
    </section>
    <section className="bg-background py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="prose prose-slate max-w-none font-body text-muted-foreground leading-relaxed space-y-8">
          <SectionReveal>
            <h2 className="font-display text-2xl font-bold text-foreground">Medical Disclaimer</h2>
            <p>The information provided on this website is for general informational purposes only and does not constitute medical or dental advice. It should not be used as a substitute for professional dental consultation, diagnosis, or treatment.</p>
          </SectionReveal>
          <SectionReveal>
            <h2 className="font-display text-2xl font-bold text-foreground">No Doctor-Patient Relationship</h2>
            <p>Browsing this website or contacting us through our website does not create a doctor-patient relationship. A professional relationship is only established through an in-person consultation at our clinic.</p>
          </SectionReveal>
          <SectionReveal>
            <h2 className="font-display text-2xl font-bold text-foreground">Treatment Outcomes</h2>
            <p>Results from dental treatments vary by individual. Images or descriptions of treatments on this website are for illustrative purposes and do not guarantee specific outcomes. Your dentist will discuss realistic expectations during your consultation.</p>
          </SectionReveal>
          <SectionReveal>
            <h2 className="font-display text-2xl font-bold text-foreground">External Links</h2>
            <p>This website may contain links to external websites. Rubi Smile Dental Clinic is not responsible for the content or accuracy of external sites.</p>
          </SectionReveal>
          <SectionReveal>
            <h2 className="font-display text-2xl font-bold text-foreground">Emergency Notice</h2>
            <p>If you are experiencing a dental emergency, please call us directly at +234 800 000 0000 or visit our clinic immediately. Do not rely on website information for emergency situations.</p>
          </SectionReveal>
        </div>
      </div>
    </section>
  </Layout>
);

export default Disclaimer;
