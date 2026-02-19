import { Target, Compass, Eye, ShieldCheck, Users, BookOpen, TrendingUp, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import founderImg from "@/assets/founder.jpeg";

const whyChoose = [
  { icon: ShieldCheck, title: "Transparency", desc: "We follow ethical practices and transparency in all interactions." },
  { icon: BookOpen, title: "Compliance", desc: "Registered under AMFI, NSE, and NISM certified under SEBI regulations." },
  { icon: Users, title: "Investor Awareness", desc: "Focus on helping investors understand products and risks involved." },
  { icon: TrendingUp, title: "Disciplined Investing", desc: "Promoting long-term, disciplined investing approaches." },
  { icon: Heart, title: "Long-Term Focus", desc: "Building relationships based on trust and informed decision-making." },
];

const About = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-main">
          {/* Founder */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="flex justify-center">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-primary/30 glow-emerald-sm">
                <img src={founderImg} alt="Peta Hemanth Prasad " className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="gradient-emerald-text">Peta Hemanth Prasad</span>
              </h1>
              <p className="text-silver font-medium mb-4">Founder, Alpha Asset Finserv & Tax Zone Financial Services</p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Authorized Partner of AssetPlus and Registered under Association of Mutual Funds in India (AMFI), National Stock Exchange (NSE) and NISM Certified Expert under SEBI Regulations & FMVA Certified Professional by CFI, Canada with Extensive Experience on Capital Markets for more than 10 Years.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                His approach emphasizes ethical practices, transparency, and investor education, helping investors make informed financial decisions based on their financial goals and risk profile.
              </p>
            </div>
          </div>

          {/* Goal, Mission, Vision */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { icon: Target, title: "Our Goal", text: "To promote financial awareness and responsible investing through transparent and ethical mutual fund distribution services. We aim to support individuals and businesses in understanding financial products and making informed investment decisions based on their financial goals and risk profile." },
              { icon: Compass, title: "Our Mission", text: "To facilitate access to mutual fund schemes and other financial products with a strong focus on investor education, transparency, and long-term financial discipline. We strive to help clients understand market-linked investments and the importance of goal-based investing." },
              { icon: Eye, title: "Our Vision", text: "To be recognized as a trusted mutual fund distribution partner known for ethical practices, investor-first approach, and consistent investor education. We aspire to contribute towards improving financial literacy in the community." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card-premium text-center">
                  <div className="w-14 h-14 rounded-xl gradient-emerald flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>

          {/* Why Choose */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            <span className="gradient-emerald-text">Why Choose Alpha Asset Finserv</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card-premium flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-emerald flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
