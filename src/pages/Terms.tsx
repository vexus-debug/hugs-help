import SectionReveal from "@/components/SectionReveal";
import Layout from "@/components/Layout";

const Terms = () => (
  <Layout>
    <section className="bg-muted py-24">
      <div className="container mx-auto px-6 text-center">
        <SectionReveal>
          <h1 className="font-display text-5xl font-extrabold text-foreground">Terms & Conditions</h1>
          <p className="font-body text-muted-foreground mt-4">Last updated: March 2026</p>
        </SectionReveal>
      </div>
    </section>
    <section className="bg-background py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="prose prose-slate max-w-none font-body text-muted-foreground leading-relaxed space-y-8">
          <SectionReveal>
            <h2 className="font-display text-2xl font-bold text-foreground">1. Services</h2>
            <p>Rubi Smile Dental Clinic provides dental healthcare services including preventive, restorative, cosmetic, surgical, orthodontic, and pediatric dentistry. All treatments are provided by qualified dental professionals.</p>
          </SectionReveal>
          <SectionReveal>
            <h2 className="font-display text-2xl font-bold text-foreground">2. Appointments</h2>
            <p>Appointments can be booked via phone, WhatsApp, or in person. We request at least 24 hours notice for cancellations. Repeated no-shows may affect future scheduling priority.</p>
          </SectionReveal>
          <SectionReveal>
            <h2 className="font-display text-2xl font-bold text-foreground">3. Payment</h2>
            <p>Payment is due at the time of service unless covered by NHIS. We accept cash, bank transfers, and applicable insurance. Treatment plans with associated costs will be discussed before procedures begin.</p>
          </SectionReveal>
          <SectionReveal>
            <h2 className="font-display text-2xl font-bold text-foreground">4. NHIS Patients</h2>
            <p>NHIS coverage is subject to the terms of your insurance plan. Some treatments may not be covered and will require out-of-pocket payment. We will inform you of any costs not covered before proceeding.</p>
          </SectionReveal>
          <SectionReveal>
            <h2 className="font-display text-2xl font-bold text-foreground">5. Patient Responsibilities</h2>
            <p>Patients are responsible for providing accurate medical history, following post-treatment instructions, and attending scheduled follow-up appointments.</p>
          </SectionReveal>
          <SectionReveal>
            <h2 className="font-display text-2xl font-bold text-foreground">6. Limitation of Liability</h2>
            <p>While we strive for the best outcomes, dental procedures carry inherent risks. Rubi Smile Dental Clinic will not be liable for complications arising from patient non-compliance with treatment instructions.</p>
          </SectionReveal>
        </div>
      </div>
    </section>
  </Layout>
);

export default Terms;
