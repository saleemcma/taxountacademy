import { Link } from "react-router-dom";
import { GraduationCap, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy text-navy-foreground">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2 font-heading font-bold text-xl mb-4">
            <GraduationCap className="h-6 w-6" />
            Taxount Academy
          </Link>
          <p className="text-sm text-navy-foreground/70 leading-relaxed">
            Learn Accounting, Software, and Tax Skills with Confidence. Practical training by industry experts.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-navy-foreground/70">
            {[
              { to: "/courses", label: "Courses" },
              { to: "/about", label: "About Us" },
              { to: "/tutors", label: "Our Tutors" },
              { to: "/admissions", label: "Admissions" },
              { to: "/testimonials", label: "Testimonials" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-navy-foreground transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Our Courses</h4>
          <ul className="space-y-2 text-sm text-navy-foreground/70">
            <li>Accounting Software Training</li>
            <li>Accounting Subjects Teaching</li>
            <li>Tax Courses</li>
            <li>Excel for Accounting</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-navy-foreground/70">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 shrink-0" />
              +92 304 0790303
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 shrink-0" />
              saleem@taxountacademy.com
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              Street No. 8, Peer Kariyan, Pakpattan, Pakistan
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10 mt-10 pt-6 text-center text-sm text-navy-foreground/50">
        © {new Date().getFullYear()} Taxount Academy. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
