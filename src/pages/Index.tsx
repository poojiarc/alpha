import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Target, BookOpen, PiggyBank, BarChart3, GraduationCap, Shield, Briefcase, Landmark, CircleDollarSign, Wallet } from "lucide-react";
import Layout from "@/components/Layout";
import logo from "@/assets/logo.png";
import founderImg from "@/assets/founder.jpg";

const services = [
  { name: "Mutual Fund Distribution", icon: TrendingUp, desc: "Facilitating access to mutual fund schemes offered by respective AMCs." },
  { name: "SIP Facilitation", icon: PiggyBank, desc: "Assistance in understanding and starting SIPs for disciplined investing." },
  { name: "Lumpsum Investments", icon: Wallet, desc: "One-time investments in mutual fund schemes for surplus funds." },
  { name: "SWP Awareness", icon: BarChart3, desc: "Information on Systematic Withdrawal Plan options in mutual funds." },
  { name: "Portfolio Review", icon: Target, desc: "Understanding your mutual fund portfolio and asset allocation." },
  { name: "Goal-Based Investing", icon: Shield, desc: "Awareness around aligning investments with financial goals." },
  { name: "Investor Education", icon: GraduationCap, desc: "Sessions and discussions to improve understanding of mutual funds." },
  { name: "PMS Distribution", icon: Briefcase, desc: "Distribution services for Portfolio Management Services products." },
  { name: "AIF Distribution", icon: Landmark, desc: "Distribution services for Alternative Investment Fund products." },
  { name: "SIF Distribution", icon: CircleDollarSign, desc: "SEBI-regulated intermediate investment category distribution." },
  { name: "Loan Against Mutual Funds", icon: BookOpen, desc: "Unlock liquidity without redeeming your investments." },
];

const testimonials = [
  { quote: "Alpha Asset Finserv helped me start my SIPs in a structured and disciplined way. The guidance was clear, simple, and aligned with my long-term financial goals. I now feel more confident about my investments.", name: "Ramesh K.", role: "IT Professional" },
  { quote: "I wanted a proper investment plan instead of random investments. They explained asset allocation and risk clearly and suggested suitable mutual fund options. The process was transparent and professional.", name: "Suresh M.", role: "Business Owner" },
  { quote: "As a first-time investor, I had many doubts. Alpha Asset Finserv patiently explained how mutual funds work and helped me start with SIPs comfortably. The onboarding process was smooth.", name: "Priya S.", role: "Working Professional" },
  { quote: "I was looking for better management of my retirement savings. They explained different options and risks properly before proceeding. I appreciate the honest and disciplined approach.", name: "Krishna Rao", role: "Retired Employee" },
  { quote: "We approached Alpha Asset Finserv for our child's future planning. The investment strategy was explained clearly, including risks and timelines. We value their systematic approach.", name: "Lakshmi & Rajesh", role: "Parents" },
  { quote: "When I needed temporary funds, they guided me about the Loan Against Mutual Funds facility. The process was well explained, including risks and terms. It helped me avoid redeeming my investments.", name: "Naveen T.", role: "Entrepreneur" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container-main relative text-center">
          <div className="animate-fade-in-up">
            <img src={logo} alt="Alpha Asset Finserv" className="h-24 md:h-32 mx-auto mb-6" />
            <p className="text-muted-foreground text-lg mb-2">Our Authorised Partner</p>
            <a
              href="https://www.assetplus.in/mfd/ARN-264745"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-primary font-semibold text-xl hover:underline mb-8"
            >
              ASSETPLUS
            </a>
            <div>
              <a
                href="https://www.assetplus.in/mfd/ARN-264745"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-emerald text-primary-foreground font-bold text-lg transition-all duration-300 hover:opacity-90 glow-emerald"
              >
                Start Your Journey Now <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Founder Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-primary/30 glow-emerald-sm">
                <img src={founderImg} alt="Hemanth Prasad Peta" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-emerald-text">Hemanth Prasad Peta</span>
              </h2>
              <p className="text-silver font-medium mb-2">Founder, Alpha Asset Finserv</p>
              <p className="text-muted-foreground leading-relaxed">
                Hemanth Prasad Peta is an Authorized Partner of AssetPlus and Registered under Association of Mutual Funds in India (AMFI), National Stock Exchange (NSE) and NISM Certified Expert under SEBI Regulations & FMVA Certified Professional by CFI, Canada with Extensive Experience on Capital Markets for more than 10 Years.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                His approach emphasizes ethical practices, transparency, and investor education, helping investors make informed financial decisions based on their financial goals and risk profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-main">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="gradient-emerald-text">Our Services</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Comprehensive mutual fund distribution and investor awareness services.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.name} className="card-premium flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-emerald flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold text-sm mb-1">{service.name}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-semibold transition-all duration-300 hover:bg-primary/10"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Auto-scroll */}
      <section className="section-padding bg-secondary/50 overflow-hidden">
        <div className="container-main mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="gradient-emerald-text">What Our Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-center">Trusted by investors across Andhra Pradesh & Telangana</p>
        </div>
        <div className="relative">
          <div className="flex animate-scroll-testimonials gap-6" style={{ width: "max-content" }}>
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="card-premium w-[340px] flex-shrink-0">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{t.quote}"</p>
                <div className="border-t border-border pt-3">
                  <p className="text-foreground font-semibold text-sm">{t.name}</p>
                  <p className="text-primary text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
