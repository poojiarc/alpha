import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import founderImg from "@/assets/founder.jpeg";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Name: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/919700505046?text=${text}`, "_blank");
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-main">
          {/* Top Text */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-emerald-text">Contact Us</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Take the first step towards informed investing with Alpha Asset Finserv. Explore mutual fund options aligned with your financial goals and risk profile.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Connect with Alpha Asset Finserv to understand mutual fund investing and make informed, goal-based investment decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Founder Card */}
            <div className="card-premium text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary/30 mx-auto mb-4">
                <img src={founderImg} alt="Hemanth Prasad Peta" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Hemanth Prasad Peta</h3>
              <p className="text-silver text-sm mb-4">Founder, Alpha Asset Finserv</p>
              <p className="text-muted-foreground text-sm mb-4">
                AMFI Registered | NISM Certified | FMVA Certified
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 text-primary" /> 9700505046, 9121796816
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 text-primary" /> alphaassetfinserv.in@gmail.com
                </p>
                <p className="flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" /> Nellore, AP
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-premium">
              <h3 className="text-xl font-bold text-foreground mb-6">Get In Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-1">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-1">Phone</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-1">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Your Message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg gradient-emerald text-primary-foreground font-semibold transition-all hover:opacity-90 glow-emerald-sm"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Google Map */}
          <div className="card-premium overflow-hidden p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.5!2d79.97!3d14.41!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI0JzM4LjEiTiA3OcKwNTUnMTQuNCJF!5e0!3m2!1sen!2sin!4v1"
              className="w-full h-[300px] md:h-[400px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Alpha Asset Finserv Location"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
