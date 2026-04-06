import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Star } from "lucide-react";

const reviews = [
  { name: "Ali Raza", course: "QuickBooks Training", text: "Taxount Academy transformed my career. The QuickBooks course was extremely practical and I landed an accounting job within weeks of completing it.", rating: 5 },
  { name: "Hira Siddiqui", course: "Income Tax Course", text: "The tax courses are incredibly practical. I now file tax returns confidently for my clients. The tutors explain complex tax laws in simple terms.", rating: 5 },
  { name: "Bilal Ahmed", course: "Financial Accounting", text: "Best accounting training in the city. The tutors are patient and truly knowledgeable. I finally understand IFRS standards thanks to Usman Sir.", rating: 5 },
  { name: "Ayesha Tariq", course: "Zoho Books", text: "Sara Ma'am's teaching style is exceptional. She made accounting software so easy to learn. I'm now managing my company's books on Zoho independently.", rating: 5 },
  { name: "Hassan Rauf", course: "Cost Accounting", text: "Fatima Ma'am explains cost accounting concepts with real-world examples. The course helped me ace my university exams and also prepared me for my job.", rating: 5 },
  { name: "Zainab Khalid", course: "Corporate Tax UAE", text: "Ahmad Sir's knowledge of UAE corporate tax is outstanding. As someone planning to work in Dubai, this course gave me exactly the skills I needed.", rating: 4 },
  { name: "Kamran Shah", course: "Excel for Accounting", text: "I thought I knew Excel until I took this course. The advanced formulas and pivot table techniques have made my work so much more efficient.", rating: 5 },
  { name: "Nadia Parveen", course: "Sales Tax Course", text: "The FBR portal training was incredibly helpful. I can now handle sales tax filings for multiple clients without any confusion.", rating: 5 },
  { name: "Farhan Iqbal", course: "Odoo Accounting", text: "Excellent course on Odoo ERP. The hands-on practice with real scenarios made all the difference. Highly recommend for aspiring ERP consultants.", rating: 4 },
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
                <p className="text-xs text-primary">{r.course}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default TestimonialsPage;
