import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Monitor, BookOpen, Receipt, Users, Award, Clock, CheckCircle,
  ArrowRight, Star, ChevronRight
} from "lucide-react";

const categories = [
  {
    icon: Monitor,
    title: "Accounting Software Training",
    desc: "Hands-on training in QuickBooks, Odoo, Zoho Books, and Excel for real-world accounting tasks.",
  },
  {
    icon: BookOpen,
    title: "Accounting Subjects Teaching",
    desc: "Master Financial, Cost, and Managerial Accounting with conceptual clarity and exam preparation.",
  },
  {
    icon: Receipt,
    title: "Tax Courses",
    desc: "Learn Income Tax, Sales Tax (Pakistan) and Corporate Tax (UAE) with practical filing experience.",
  },
];

const whyUs = [
  { icon: Users, title: "Expert Tutors", desc: "Learn from 4 experienced industry professionals." },
  { icon: Award, title: "Practical Learning", desc: "Real-world projects and hands-on exercises." },
  { icon: Clock, title: "Flexible Schedule", desc: "Weekend and evening batches available." },
  { icon: CheckCircle, title: "Career Support", desc: "Job placement assistance and career guidance." },
];

const tutorsPreview = [
  { name: "Saleem Ali", role: "CMA Finalist, Certified Tax Advisor, Certified International Accounting Tutor", exp: "Tax & Accounting Expert" },
  { name: "Muhammad Ahmad", role: "CA Finalist", exp: "Chartered Accountancy Professional" },
  { name: "Zia Ur Rehman", role: "M.COM", exp: "Commerce & Accounting Specialist" },
  { name: "Jagruthi Chopra", role: "CA Finalist, M.COM", exp: "Accounting & Finance Expert" },
];

const testimonials = [
  { name: "Ali Raza", text: "Taxount Academy transformed my career. I landed an accounting job within weeks of completing the QuickBooks course.", rating: 5 },
  { name: "Hira Siddiqui", text: "The tax courses are incredibly practical. I now file tax returns confidently for my clients.", rating: 5 },
  { name: "Bilal Ahmed", text: "Best accounting training in the city. The tutors are patient and truly knowledgeable.", rating: 5 },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
      <div className="container relative py-20 md:py-32 text-center">
        <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-primary-foreground/10 text-primary-foreground rounded-full border border-primary-foreground/20">
          Admissions Open — Enroll Today
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground max-w-4xl mx-auto leading-tight">
          Professional Training in Accounting, Software, and Tax
        </h1>
        <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Join Taxount Academy to gain practical skills in accounting software, accounting subjects, and tax courses with expert tutor guidance.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/admissions">
            <Button variant="hero" size="lg" className="text-base px-8">
              Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/courses">
            <Button variant="hero-outline" size="lg" className="text-base px-8">
              View Courses
            </Button>
          </Link>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-primary-foreground/70 text-sm">
          <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> 500+ Students Trained</span>
          <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> 4 Expert Tutors</span>
          <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> 12+ Courses</span>
        </div>
      </div>
    </section>

    {/* Categories */}
    <section className="py-20 bg-background">
      <div className="container">
        <SectionHeading badge="What We Offer" title="Our Training Categories" description="Comprehensive courses designed to give you practical skills for the real world of accounting and finance." />
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div key={cat.title} className="group rounded-xl border bg-card p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <cat.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{cat.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{cat.desc}</p>
              <Link to="/courses" className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:gap-2 transition-all">
                Learn More <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 bg-surface-warm">
      <div className="container">
        <SectionHeading badge="Why Taxount" title="Why Choose Us" description="We combine expert instruction with practical exercises to ensure you're job-ready from day one." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((item) => (
            <div key={item.title} className="text-center p-6 rounded-xl bg-card shadow-card">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Tutors Preview */}
    <section className="py-20 bg-background">
      <div className="container">
        <SectionHeading badge="Our Team" title="Meet Our Tutors" description="Learn from dedicated professionals who bring years of industry experience to the classroom." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tutorsPreview.map((t) => (
            <div key={t.name} className="rounded-xl border bg-card p-6 text-center shadow-card hover:shadow-card-hover transition-all">
              <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl">
                {t.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="font-bold">{t.name}</h3>
              <p className="text-sm text-primary font-medium">{t.role}</p>
              <p className="text-xs text-muted-foreground mt-1">{t.exp}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/tutors">
            <Button variant="outline">View All Tutors <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-surface-warm">
      <div className="container">
        <SectionHeading badge="Testimonials" title="What Our Students Say" description="Hear from our graduates who have transformed their careers through our training programs." />
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl bg-card p-8 shadow-card">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm italic">"{t.text}"</p>
              <p className="mt-4 font-bold text-sm">{t.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/testimonials">
            <Button variant="outline">Read More Reviews <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Contact CTA */}
    <section className="bg-hero-gradient py-20">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Ready to Start Your Journey?</h2>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl mx-auto">
          Join Taxount Academy and gain the practical skills employers are looking for. Admissions are open now.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/admissions">
            <Button variant="hero" size="lg" className="text-base px-8">Apply Now</Button>
          </Link>
          <Link to="/contact">
            <Button variant="hero-outline" size="lg" className="text-base px-8">Contact Us</Button>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
