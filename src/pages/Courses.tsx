import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Banknote } from "lucide-react";

interface Course {
  title: string;
  desc: string;
  duration: string;
  fee: string;
  feeUsd: string;
}

const courseCategories: { category: string; courses: Course[] }[] = [
  {
    category: "Accounting Software Training",
    courses: [
      { title: "QuickBooks", desc: "Complete QuickBooks training covering invoicing, expense tracking, payroll, and financial reporting.", duration: "8 Weeks", fee: "PKR 8,000", feeUsd: "USD 29" },
      { title: "Odoo Accounting", desc: "Learn Odoo ERP accounting module including journal entries, bank reconciliation, and reporting.", duration: "8 Weeks", fee: "PKR 8,000", feeUsd: "USD 29" },
      { title: "Zoho Books", desc: "Learn Zoho Books for invoicing, expense management, bank reconciliation, and GST-compliant reporting.", duration: "8 Weeks", fee: "PKR 8,000", feeUsd: "USD 29" },
      { title: "Xero", desc: "Master Xero for invoicing, inventory management, bank feeds, and cloud-based accounting.", duration: "8 Weeks", fee: "PKR 8,000", feeUsd: "USD 29" },
      { title: "Excel for Accounting", desc: "Advanced Excel formulas, pivot tables, VLOOKUP, and financial modeling for accountants.", duration: "8 Weeks", fee: "PKR 8,000", feeUsd: "USD 29" },
    ],
  },
  {
    category: "Accounting Subjects Teaching",
    courses: [
      { title: "Financial Accounting", desc: "Comprehensive coverage of IFRS, journal entries, ledger, trial balance, and financial statements.", duration: "3 Months", fee: "PKR 15,000", feeUsd: "USD 54" },
      { title: "Cost Accounting", desc: "Learn cost analysis, budgeting, variance analysis, and cost allocation techniques.", duration: "3 Months", fee: "PKR 12,000", feeUsd: "USD 43" },
      { title: "Managerial Accounting", desc: "Decision-making tools, CVP analysis, performance evaluation, and strategic planning.", duration: "3 Months", fee: "PKR 15,000", feeUsd: "USD 54" },
    ],
  },
  {
    category: "Tax Courses",
    courses: [
      { title: "Income Tax (Pakistan)", desc: "Pakistan income tax laws, return filing, withholding tax, and compliance requirements.", duration: "8 Weeks", fee: "PKR 10,000", feeUsd: "USD 36" },
      { title: "Sales Tax (Pakistan)", desc: "Sales tax registration, return filing, input/output adjustments, and FBR portal training.", duration: "8 Weeks", fee: "PKR 7,000", feeUsd: "USD 25" },
      { title: "UAE Corporate Tax", desc: "UAE corporate tax framework, compliance requirements, and free zone regulations.", duration: "8 Weeks", fee: "PKR 12,000", feeUsd: "USD 43" },
      { title: "UAE VAT", desc: "UAE Value Added Tax registration, return filing, compliance, and input tax recovery.", duration: "8 Weeks", fee: "PKR 12,000", feeUsd: "USD 43" },
    ],
  },
];

const CoursesPage = () => (
  <Layout>
    <section className="bg-hero-gradient py-16">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground">Our Courses</h1>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Industry-relevant courses designed to build practical skills for career success.
        </p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container">
        {courseCategories.map((cat) => (
          <div key={cat.category} className="mb-16 last:mb-0">
            <SectionHeading title={cat.category} />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.courses.map((course) => (
                <div key={course.title} className="rounded-xl border bg-card p-6 shadow-card hover:shadow-card-hover transition-all flex flex-col">
                  <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{course.desc}</p>
                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" /> {course.duration}
                    </div>
                    <div className="flex items-center gap-2 font-semibold text-foreground">
                      <Banknote className="h-4 w-4 text-primary" /> {course.fee}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Banknote className="h-4 w-4 text-green-600" /> {course.feeUsd} <span className="text-xs">(for international students)</span>
                    </div>
                  </div>
                  <Link to="/admissions" className="mt-4">
                    <Button variant="cta" className="w-full">Enroll Now</Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default CoursesPage;
