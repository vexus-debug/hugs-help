import SectionReveal from "@/components/SectionReveal";
import Layout from "@/components/Layout";

const Privacy = () => (
  <Layout>
    <section className="bg-muted py-24">
      <div className="container mx-auto px-6 text-center">
        <SectionReveal>
          <h1 className="font-display text-5xl font-extrabold text-foreground">Privacy Policy</h1>
          <p className="font-body text-muted-foreground mt-4">Last updated: March 2026</p>
        </SectionReveal>
      </div>
    </section>
    <section className="bg-background py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="prose prose-slate max-w-none font-body text-muted-foreground leading-relaxed space-y-8">
          <SectionReveal>
            <h2 className="font-display text-2xl font-bold text-foreground">1. Information We Collect</h2>
            <p>We collect personal information you provide when booking appointments, including your name, phone number, email address, and medical/dental history relevant to your treatment. We may also collect information automatically when you visit our website, such as your IP address and browsing behavior.</p>
          </SectionReveal>
          <SectionReveal>
            <h2 className="font-display text-2xl font-bold text-foreground">2. How We Use Your Information</h2>
            <p>Your information is used to: provide dental care and treatment, schedule and manage appointments, communicate with you about your care, process NHIS claims where applicable, improve our services, and comply with legal obligations.</p>
          </SectionReveal>
          <SectionReveal>
            <h2 className="font-display text-2xl font-bold text-foreground">3. Data Protection</h2>
            <p>We implement appropriate security measures to protect your personal and medical information. Access to patient records is restricted to authorized dental professionals involved in your care.</p>
          </SectionReveal>
          <SectionReveal>
            <h2 className="font-display text-2xl font-bold text-foreground">4. Third-Party Sharing</h2>
            <p>We do not sell your personal information. We may share information with NHIS for insurance processing, dental laboratories for treatment purposes, or as required by Nigerian law.</p>
          </SectionReveal>
          <SectionReveal>
            <h2 className="font-display text-2xl font-bold text-foreground">5. Your Rights</h2>
            <p>You have the right to access, correct, or request deletion of your personal information. Contact us at rubiismiledentalclinic@gmail.com for any privacy-related requests.</p>
          </SectionReveal>
          <SectionReveal>
            <h2 className="font-display text-2xl font-bold text-foreground">6. Contact</h2>
            <p>For questions about this privacy policy, contact Rubi Smile Dental Clinic at rubiismiledentalclinic@gmail.com or +234 902 440 3837.</p>
          </SectionReveal>
        </div>
      </div>
    </section>
  </Layout>
);

export default Privacy;
