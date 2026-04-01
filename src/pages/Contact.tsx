import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "Thank you for reaching out. We'll respond within 24 hours." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <section className="bg-hero-gradient py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground">Contact Us</h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <SectionHeading title="Get in Touch" center={false} />
              <div className="space-y-5">
                {[
                  { icon: Phone, label: "Phone", value: "+92 300 1234567", href: "tel:+923001234567" },
                  { icon: MessageCircle, label: "WhatsApp", value: "+92 300 1234567", href: "https://wa.me/923001234567" },
                  { icon: Mail, label: "Email", value: "info@acculearnacademy.com", href: "mailto:info@acculearnacademy.com" },
                  { icon: MapPin, label: "Address", value: "Office #12, Business Center, Main Boulevard, Lahore, Pakistan" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border bg-card p-8 shadow-card">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Your Name *</label>
                    <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full name" maxLength={100} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Email Address *</label>
                    <Input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" maxLength={255} />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Subject *</label>
                  <Input required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="How can we help?" maxLength={200} />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Message *</label>
                  <Textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Your message..." rows={5} maxLength={2000} />
                </div>
                <Button type="submit" variant="cta" size="lg" className="w-full sm:w-auto px-12">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="h-80">
        <iframe
          title="AccuLearn Academy Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.0!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMxJzEzLjQiTiA3NMKwMjEnMzEuMyJF!5e0!3m2!1sen!2s!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </Layout>
  );
};

export default ContactPage;
