import { Link } from "react-router-dom";
import { TrendingUp, PiggyBank, Wallet, BarChart3, Target, Shield, GraduationCap, Briefcase, Landmark, CircleDollarSign, BookOpen, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const services = [
  { id: "mutual-fund-distribution", name: "Mutual Fund Distribution", icon: TrendingUp, desc: "Facilitating access to mutual fund schemes offered by respective Asset Management Companies (AMCs), based on investors' financial goals and risk profile, in line with applicable SEBI and AMFI guidelines." },
  { id: "sip-facilitation", name: "SIP Facilitation", icon: PiggyBank, desc: "Assistance in understanding and starting SIPs in mutual fund schemes to promote disciplined, long-term investing habits." },
  { id: "lumpsum-investment", name: "Lumpsum Investment", icon: Wallet, desc: "Facilitating one-time investments in mutual fund schemes for investors seeking to invest surplus funds, subject to market risks." },
  { id: "swp-awareness", name: "SWP Awareness", icon: BarChart3, desc: "Providing information and facilitation related to SWP options in mutual funds for investors who wish to plan periodic withdrawals." },
  { id: "portfolio-review", name: "Portfolio Review & Investment Awareness", icon: Target, desc: "Helping investors understand their existing mutual fund portfolio and providing general investment awareness. No investment advice or return assurance is provided." },
  { id: "goal-based-investing", name: "Goal-Based Investment Awareness", icon: Shield, desc: "Creating awareness around goal-based investing (education, retirement, wealth planning) and the importance of aligning investments with individual financial goals." },
  { id: "investor-education", name: "Investor Education & Financial Literacy", icon: GraduationCap, desc: "Conducting awareness sessions, webinars, and one-on-one discussions to improve understanding of mutual funds and long-term investing discipline." },
  { id: "pms-distribution", name: "PMS Distribution", icon: Briefcase, desc: "Facilitating Distribution services to PMS products offered by SEBI Registered Portfolio Managers, subject to eligibility criteria and regulatory guidelines." },
  { id: "aif-distribution", name: "AIF Distribution", icon: Landmark, desc: "Facilitating Distribution services to AIF products offered by SEBI Registered Alternative Investment Fund Managers, subject to suitability and regulatory norms." },
  { id: "sif-distribution", name: "SIF Distribution", icon: CircleDollarSign, desc: "Specialized Investment Funds (SIFs) are a SEBI-regulated, intermediate investment category designed for sophisticated investors, bridging the gap between mutual funds and PMS." },
  { id: "loan-against-mf", name: "Loan Against Mutual Funds", icon: BookOpen, desc: "Unlock liquidity without redeeming your investments. We facilitate LAMF through partnered banks and NBFCs." },
];

const amcNames = [
  "SBI Mutual Fund", "HDFC Mutual Fund", "ICICI Prudential", "Axis Mutual Fund", "Kotak Mutual Fund",
  "Nippon India", "Aditya Birla Sun Life", "DSP Mutual Fund", "Franklin Templeton", "HSBC Mutual Fund",
  "Tata Mutual Fund", "UTI Mutual Fund", "Mirae Asset", "Motilal Oswal", "Bandhan Mutual Fund",
  "Bajaj Finserv", "Bank of India MF", "Edelweiss MF", "Invesco MF", "JM Financial MF",
  "LIC Mutual Fund", "Navi Mutual Fund", "Quant Mutual Fund", "WhiteOak Capital", "Abakkus MF",
  "Angel One MF", "360 ONE MF",
];

const platforms = ["NJ Wealth", "Prudent", "Wealthy"];

const Services = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-main">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="gradient-emerald-text">Services Offered</span>
          </h1>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Comprehensive mutual fund distribution and investor awareness services aligned with SEBI & AMFI guidelines.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link to={`/services/${service.id}`} key={service.id} className="card-premium group">
                  <div className="w-12 h-12 rounded-lg gradient-emerald flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-foreground font-semibold mb-2 group-hover:text-primary transition-colors">{service.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{service.desc}</p>
                  <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>

          {/* AMC Logos Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              <span className="gradient-emerald-text">Empanelled with Multiple AMCs in India</span>
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
              {amcNames.map((name) => (
                <div key={name} className="bg-card border border-border rounded-lg p-3 flex items-center justify-center text-center min-h-[60px]">
                  <span className="text-muted-foreground text-xs font-medium">{name}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-muted-foreground/60 text-center mt-4">
              Disclaimer: Logos displayed are for informational purposes only to indicate our empanelment with respective AMCs. We are not affiliated with, sponsored by, or endorsed by any Asset Management Company.
            </p>
          </div>

          {/* Distribution Platforms */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              <span className="gradient-emerald-text">Associated with National Distribution Platforms</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {platforms.map((name) => (
                <div key={name} className="bg-card border border-border rounded-lg p-4 px-8 text-center">
                  <span className="text-muted-foreground text-sm font-medium">{name}</span>
                </div>
              ))}
              <a
                href="https://www.assetplus.in/mfd/ARN-264745"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary rounded-lg p-4 px-8 text-center glow-emerald-sm hover:bg-primary/10 transition-all"
              >
                <span className="text-primary font-bold text-sm">ASSETPLUS ⭐</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
