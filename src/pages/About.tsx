import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Target, BookOpen, Users, Award } from "lucide-react";

const values = [
  { icon: Target, title: "Our Mission", desc: "To bridge the gap between theoretical knowledge and practical accounting skills, preparing students for real-world challenges in finance and taxation." },
  { icon: BookOpen, title: "Practical Learning", desc: "Every course includes hands-on exercises, real case studies, and software practice so you can apply what you learn from day one." },
  { icon: Users, title: "Personalized Guidance", desc: "With only 4 dedicated tutors and small batch sizes, every student receives individual attention and mentorship." },
  { icon: Award, title: "Career & Exam Support", desc: "We provide career counseling, job placement assistance, and exam preparation support to help you achieve your professional goals." },
];

const AboutPage = () => (
  <Layout>
    <section className="bg-hero-gradient py-16">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground">About Us</h1>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Learn about our mission, values, and commitment to quality education.
        </p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container max-w-4xl">
        <SectionHeading badge="Our Story" title="Who We Are" />
        <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
          <p>
            Taxount Academy was founded with a simple belief: accounting education should be practical, accessible, and career-oriented. Too many students graduate with theoretical knowledge but struggle to apply it in real workplaces.
          </p>
          <p>
            We set out to change that. Our academy provides comprehensive training in accounting software, core accounting subjects, and taxation — all taught by experienced industry professionals who understand what employers expect.
          </p>
          <p>
            With a team of 4 dedicated tutors, small batch sizes, and a hands-on teaching approach, we ensure every student receives personalized guidance. Whether you're a commerce student, a job seeker, or a working professional looking to upskill, Taxount Academy is your partner in career growth.
          </p>
        </div>
      </div>
    </section>

    <section className="py-20 bg-surface-warm">
      <div className="container">
        <SectionHeading badge="What Drives Us" title="Our Values" />
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((v) => (
            <div key={v.title} className="flex gap-5 p-6 rounded-xl bg-card shadow-card">
              <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <v.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
