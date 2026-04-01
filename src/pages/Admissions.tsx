import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const courseOptions = [
  "QuickBooks", "Odoo Accounting", "Zoho Books", "Excel for Accounting",
  "Financial Accounting", "Cost Accounting", "Managerial Accounting",
  "Income Tax (Pakistan)", "Sales Tax (Pakistan)", "Corporate Tax UAE",
];

const AdmissionsPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Inquiry Submitted!", description: "We'll contact you shortly. Thank you for your interest!" });
    setForm({ name: "", phone: "", email: "", course: "", message: "" });
  };

  return (
    <Layout>
      <section className="bg-hero-gradient py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground">Admissions</h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Take the first step towards your accounting career. Submit your inquiry today.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container max-w-2xl">
          <div className="mb-8 flex items-center gap-3 rounded-lg border-2 border-primary/20 bg-primary/5 p-4">
            <AlertCircle className="h-5 w-5 text-primary shrink-0" />
            <p className="text-sm font-medium text-primary">Admissions are open now! Limited seats available for the upcoming batch.</p>
          </div>

          <SectionHeading title="Student Inquiry Form" description="Fill out the form below and our team will get back to you within 24 hours." />

          <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border bg-card p-8 shadow-card">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Full Name *</label>
              <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Enter your full name" maxLength={100} />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Phone Number *</label>
              <Input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+92 300 1234567" maxLength={20} />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email Address *</label>
              <Input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" maxLength={255} />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Select Course *</label>
              <select
                required
                value={form.course}
                onChange={(e) => setForm({ ...form, course: e.target.value })}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Choose a course...</option>
                {courseOptions.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Message</label>
              <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Any questions or specific requirements?" rows={4} maxLength={1000} />
            </div>
            <Button type="submit" variant="cta" className="w-full" size="lg">Submit Inquiry</Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm mb-3">Prefer to chat directly?</p>
            <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                <MessageCircle className="mr-2 h-5 w-5" /> Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdmissionsPage;
