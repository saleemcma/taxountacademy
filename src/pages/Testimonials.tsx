import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Star } from "lucide-react";

const reviews = [
  { name: "Usman Tariq", course: "Income Tax", tutor: "Saleem Ali", text: "Saleem Sir made income tax laws so easy to understand. I can now confidently file returns for my clients. His real-world examples were extremely helpful.", rating: 5 },
  { name: "David Thompson", course: "Management Accounting", tutor: "Saleem Ali", text: "Taking the Management Accounting course from Pakistan was a great decision. Saleem Sir's expertise in CMA topics is outstanding.", rating: 5 },
  { name: "Amna Riaz", course: "Income Tax", tutor: "Saleem Ali", text: "The FBR portal training with Saleem Sir was incredibly practical. I now handle withholding tax and return filing independently for multiple clients.", rating: 4 },
  { name: "James Wilson", course: "Cost Accounting", tutor: "Saleem Ali", text: "As someone based in the UK, I found Saleem Sir's cost accounting course very thorough. His variance analysis teaching is world-class.", rating: 5 },
  { name: "Hassan Rauf", course: "Financial Accounting", tutor: "Muhammad Ahmad", text: "Ahmad Sir's knowledge of IFRS and financial statements is remarkable. He explains complex standards in a very structured way.", rating: 5 },
  { name: "Sarah Mitchell", course: "Excel for Accounting", tutor: "Muhammad Ahmad", text: "I enrolled from Canada and Ahmad Sir's Excel for Accounting course gave me the foundation I needed. His pivot table and VLOOKUP lessons are incredibly practical.", rating: 5 },
  { name: "Bilal Mehmood", course: "QuickBooks", tutor: "Zia Ur Rehman", text: "Zia Sir made QuickBooks so simple. I went from zero knowledge to managing my company's entire bookkeeping independently.", rating: 5 },
  { name: "Fatima Noor", course: "Odoo Accounting", tutor: "Zia Ur Rehman", text: "The Odoo ERP course was hands-on and practical. Zia Sir's patient teaching style helped me master the software quickly.", rating: 4 },
  { name: "Omar Al-Rashid", course: "UAE Corporate Tax & VAT", tutor: "Jagruthi Chopra", text: "Jagruthi Ma'am's UAE corporate tax and VAT course was exactly what I needed before relocating to Dubai. Her knowledge of free zone regulations and VAT compliance is excellent.", rating: 5 },
];

const TestimonialsPage = () => (
  <Layout>
    <section className="bg-hero-gradient py-16">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground">Testimonials</h1>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Read what our students have to say about their learning experience.
        </p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container">
        <SectionHeading badge="Student Reviews" title="Success Stories" description="Our students' success is our greatest achievement." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-xl border bg-card p-6 shadow-card hover:shadow-card-hover transition-all">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < r.rating ? "fill-amber-400 text-amber-400" : "text-muted"}`} />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic mb-4">"{r.text}"</p>
              <div>
                <p className="font-bold text-sm">{r.name}</p>
                <p className="text-xs text-secondary">{r.course}</p>
                <p className="text-xs text-muted-foreground">Tutor: {r.tutor}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default TestimonialsPage;
