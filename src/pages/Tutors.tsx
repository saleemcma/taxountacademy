import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const tutors = [
  {
    name: "Saleem Ali",
    specialization: "CMA Finalist | Certified Tax Advisor | Certified International Accounting Tutor",
    bio: "Saleem is a CMA Finalist and Certified Tax Advisor with deep expertise in taxation, cost & management accounting, and international accounting standards. His practical teaching methodology bridges the gap between theory and real-world application, empowering students to excel in professional exams and careers.",
    experience: "10+ Years",
    courses: ["Income Tax (Pakistan)", "Sales Tax (Pakistan)", "Corporate Tax UAE", "Cost Accounting"],
  },
  {
    name: "Muhammad Ahmad",
    specialization: "CA Finalist",
    bio: "Muhammad Ahmad is a CA Finalist with strong foundations in auditing, financial reporting, and accounting standards. His structured approach to teaching ensures students develop the analytical thinking and technical skills demanded by the profession.",
    experience: "8+ Years",
    courses: ["Financial Accounting", "Managerial Accounting", "Excel for Accounting"],
  },
  {
    name: "Zia Ur Rehman",
    specialization: "M.COM",
    bio: "Zia Ur Rehman holds a Master of Commerce degree and specializes in commerce subjects and accounting software training. His patient teaching style and focus on hands-on practice make complex software tools accessible to learners at all levels.",
    experience: "7+ Years",
    courses: ["QuickBooks", "Odoo Accounting", "Zoho Books"],
  },
  {
    name: "Jagruthi Chopra",
    specialization: "CA Finalist | M.COM",
    bio: "Jagruthi is a CA Finalist and M.COM graduate with expertise in financial accounting, taxation, and business analysis. Her ability to simplify advanced concepts and provide personalized mentorship makes her a favorite among students seeking career growth.",
    experience: "9+ Years",
    courses: ["Financial Accounting", "Cost Accounting", "Income Tax (Pakistan)"],
  },
];

const TutorsPage = () => (
  <Layout>
    <section className="bg-hero-gradient py-16">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground">Our Tutors</h1>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Learn from experienced professionals who are passionate about teaching.
        </p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container">
        <SectionHeading badge="Expert Faculty" title="Meet the Team" description="Our small, dedicated team ensures every student gets personalized attention and mentorship." />
        <div className="grid md:grid-cols-2 gap-8">
          {tutors.map((t) => (
            <div key={t.name} className="rounded-xl border bg-card p-8 shadow-card hover:shadow-card-hover transition-all">
              <div className="flex items-center gap-5 mb-5">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl shrink-0">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{t.name}</h3>
                  <p className="text-sm text-primary font-medium">{t.specialization}</p>
                  <p className="text-xs text-muted-foreground">{t.experience} Experience</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t.bio}</p>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Teaches</p>
                <div className="flex flex-wrap gap-2">
                  {t.courses.map((c) => (
                    <span key={c} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default TutorsPage;
