import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Star } from "lucide-react";

const reviews = [
  { name: "Joseph", country: "🇺🇸 USA", course: "Management Accounting", tutor: "Saleem Ali", text: "A great, knowledgeable teacher! He knows everything about accounting.", rating: 5 },
  { name: "Kim", country: "🇯🇵 Japan", course: "Management Accounting", tutor: "Saleem Ali", text: "I highly recommend Saleem to any student/level who wants to learn with him. He is well prepared in every lesson, very resourceful and knowledgeable. He has an understandable way of guiding me step by step in solving equations and never fails to ask me questions to check my understanding. For a student like me who is interested in studying Accounting hence has zero background in the field, Saleem was patient in explaining the accounting jargons in detail but at the same time is also straightforward in providing reinforcement and criticism when necessary in keeping me focused and has helped me have fast track in learning the subject.", rating: 5 },
  { name: "Hamza", country: "🇨🇦 Canada", course: "Management Accounting", tutor: "Saleem Ali", text: "Amazing tutor that will help with any questions you have about accounting and help pass your exams and assignments.", rating: 5 },
  { name: "Helena", country: "🇺🇸 USA", course: "Management Accounting", tutor: "Saleem Ali", text: "Saleem is always patient, encouraging and helpful. I am beginning in accounting and I am happy with my accomplishments. I recommend him.", rating: 5 },
  { name: "Asma", country: "🇴🇲 Oman", course: "Management Accounting", tutor: "Saleem Ali", text: "Saleem has a clear method to help students in accounting and he is eager to improve their level and expand their knowledge to achieve their goals in the Accounting field. Thank you Saleem for your understanding and support.", rating: 5 },
  { name: "Aleksandra", country: "🇵🇱 Poland", course: "Management Accounting", tutor: "Saleem Ali", text: "Saleem is a good teacher, he was preparing for a lesson and clearly explains difficult areas. I strongly recommend him!", rating: 5 },
  { name: "Paul", country: "🇳🇱 Netherlands", course: "Management Accounting", tutor: "Saleem Ali", text: "Very professional. Instructs to your needs. Engaging. Knows everything about accountancy. For all exams like BBA, MBA, Management Accounting. Very kind and attentive. Please take a try. You will not be disappointed.", rating: 5 },
  { name: "Yasha", country: "🇧🇪 Belgium", course: "Accounting", tutor: "Saleem Ali", text: "Took trial class with him, he knew concepts and taught me BBA level accounts of Belgium. I would recommend everyone to try taking a class with him and hopefully you won't be disappointed.", rating: 5 },
  { name: "Roy", country: "🇺🇸 USA", course: "Accounting", tutor: "Saleem Ali", text: "He was the best and learned a lot from him!!", rating: 5 },
  { name: "Faisal", country: "🇸🇦 Saudi Arabia", course: "Accounting", tutor: "Saleem Ali", text: "Saleem is on top! He's the best!", rating: 5 },
  { name: "Takhmina", country: "🇨🇦 Canada", course: "Cost Accounting", tutor: "Saleem Ali", text: "Gives good teaching outcomes, efficient and simple.", rating: 5 },
  { name: "Antonio", country: "🇺🇸 USA", course: "Accounting", tutor: "Saleem Ali", text: "Awesome experience working with you!", rating: 5 },
  { name: "Shakira", country: "🇪🇸 Spain", course: "Accounting", tutor: "Saleem Ali", text: "Very helpful and kind.", rating: 5 },
  { name: "Ronald", country: "🇨🇦 Canada", course: "Accounting", tutor: "Saleem Ali", text: "He is very hard working teacher.", rating: 5 },
  { name: "Ann", country: "🇬🇧 UK", course: "Accounting", tutor: "Saleem Ali", text: "A great tutor, easy to follow - with a talent to explain difficult concepts in an understandable way.", rating: 5 },
  { name: "Kelvin", country: "🇩🇪 Germany", course: "Accounting", tutor: "Saleem Ali", text: "He teaches in a simple way that makes the student understand easily, give him a try and thank me later.", rating: 5 },
  { name: "Neesham", country: "🇵🇰 Pakistan", course: "Management Accounting", tutor: "Saleem Ali", text: "I have had the pleasure of being tutored by Saleem in Accounting and Corporate Finance, and I can confidently say that he is an outstanding tutor. His passion for teaching, combined with his extensive knowledge and experience make him an invaluable resource for students seeking to gain a thorough understanding of Managerial Accounting, Financial Accounting, Cost Accounting and Corporate Finance. His patience, encouragement and support have created a learning environment that is rewarding. I strongly recommend him to anyone seeking to succeed in Accounting and Finance, whether at the undergraduate level, graduate level or any level.", rating: 5 },
  { name: "Ali Raza", country: "🇵🇰 Pakistan", course: "Income Tax (Pakistan)", tutor: "Saleem Ali", text: "Saleem Sir explained income tax laws and return filing in a very practical way. His real-world examples made complex tax concepts easy to grasp. Highly recommended for anyone preparing for tax exams.", rating: 5 },
  { name: "Usman Tariq", country: "🇵🇰 Pakistan", course: "Sales Tax (Pakistan)", tutor: "Saleem Ali", text: "I learned sales tax registration, FBR portal filing, and input/output adjustments thoroughly. Saleem Sir's step-by-step approach made everything clear. Best tax tutor I've had.", rating: 5 },
  { name: "Ayesha Khan", country: "🇵🇰 Pakistan", course: "Income Tax (Pakistan)", tutor: "Saleem Ali", text: "Saleem Sir's income tax course helped me understand withholding tax and compliance requirements in detail. His teaching style is clear, patient, and highly professional.", rating: 5 },
  { name: "Hassan Rauf", country: "🇵🇰 Pakistan", course: "Financial Accounting", tutor: "Muhammad Ahmad", text: "Ahmad Sir's knowledge of IFRS and financial statements is remarkable. He explains complex standards in a very structured way.", rating: 5 },
  { name: "Sarah Mitchell", country: "🇨🇦 Canada", course: "Excel for Accounting", tutor: "Muhammad Ahmad", text: "I enrolled from Canada and Ahmad Sir's Excel for Accounting course gave me the foundation I needed. His pivot table and VLOOKUP lessons are incredibly practical.", rating: 5 },
  { name: "Bilal Mehmood", country: "🇵🇰 Pakistan", course: "QuickBooks", tutor: "Zia Ur Rehman", text: "Zia Sir made QuickBooks so simple. I went from zero knowledge to managing my company's entire bookkeeping independently.", rating: 5 },
  { name: "Fatima Noor", country: "🇵🇰 Pakistan", course: "Odoo Accounting", tutor: "Zia Ur Rehman", text: "The Odoo ERP course was hands-on and practical. Zia Sir's patient teaching style helped me master the software quickly.", rating: 4 },
  { name: "Omar Al-Rashid", country: "🇦🇪 UAE", course: "UAE Corporate Tax & VAT", tutor: "Jagruthi Chopra", text: "Jagruthi Ma'am's UAE corporate tax and VAT course was exactly what I needed before relocating to Dubai. Her knowledge of free zone regulations and VAT compliance is excellent.", rating: 5 },
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
                <p className="font-bold text-sm">{r.name} <span className="text-xs font-normal text-muted-foreground">— {r.country}</span></p>
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
