import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const tutors = [
  {
    name: "Ahmad Khan",
    specialization: "Tax & Compliance Expert",
    bio: "Ahmad brings over 12 years of experience in Pakistan and UAE taxation. He specializes in income tax, sales tax compliance, and corporate tax advisory. His practical teaching approach helps students master tax filing with confidence.",
    experience: "12+ Years",
    courses: ["Income Tax (Pakistan)", "Sales Tax (Pakistan)", "Corporate Tax UAE"],
  },
  {
    name: "Sara Malik",
    specialization: "Accounting Software Specialist",
    bio: "Sara is an expert in accounting software implementation and training. With 8+ years of hands-on experience, she has trained hundreds of students in QuickBooks, Odoo, and Zoho Books for efficient business accounting.",
    experience: "8+ Years",
    courses: ["QuickBooks", "Odoo Accounting", "Zoho Books"],
  },
  {
    name: "Usman Ali",
    specialization: "Financial Accounting Instructor",
    bio: "Usman holds a deep passion for financial accounting and IFRS standards. His decade of teaching experience ensures students build strong conceptual foundations alongside practical skills.",
    experience: "10+ Years",
    courses: ["Financial Accounting", "Excel for Accounting"],
  },
  {
    name: "Fatima Noor",
    specialization: "Cost & Managerial Accounting",
    bio: "Fatima specializes in cost analysis, budgeting, and managerial decision-making. Her 7+ years of corporate and academic experience make complex topics accessible and engaging for all learners.",
    experience: "7+ Years",
    courses: ["Cost Accounting", "Managerial Accounting"],
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
