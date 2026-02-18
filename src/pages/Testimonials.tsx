import Layout from "@/components/Layout";

const videos = [
  {
    title: "Systematic Withdrawal Plan (SWP)",
    url: "https://www.youtube.com/embed/CJNgjafiE9Q",
    desc: "Systematic Withdrawal Plan (SWP) is a facility offered by mutual fund schemes that allows investors to withdraw a fixed amount at regular intervals (monthly/quarterly) from their investment, instead of redeeming the entire amount at once. SWP can help plan periodic cash flows while the remaining investment continues to stay invested in the market, subject to scheme features and market performance. Withdrawals reduce the invested amount and are subject to applicable taxes and exit loads, as per prevailing regulations. Mutual fund investments are subject to market risks.",
  },
  {
    title: "Specialized Investment Funds (SIFs)",
    url: "https://www.youtube.com/embed/GPAWU1IgoYw",
    desc: "Specialized Investment Funds (SIFs) are new SEBI-regulated products designed for investment strategy-based participation across equity, debt, and hybrid asset classes, with the flexibility to take a maximum of 25% unhedged short derivative exposure in most investment strategies.",
  },
];

const testimonials = [
  { quote: "Alpha Asset Finserv helped me start my SIPs in a structured and disciplined way. The guidance was clear, simple, and aligned with my long-term financial goals. I now feel more confident about my investments.", name: "Ramesh K.", role: "IT Professional" },
  { quote: "I wanted a proper investment plan instead of random investments. They explained asset allocation and risk clearly and suggested suitable mutual fund options. The process was transparent and professional.", name: "Suresh M.", role: "Business Owner" },
  { quote: "As a first-time investor, I had many doubts. Alpha Asset Finserv patiently explained how mutual funds work and helped me start with SIPs comfortably. The onboarding process was smooth.", name: "Priya S.", role: "Working Professional" },
  { quote: "I was looking for better management of my retirement savings. They explained different options and risks properly before proceeding. I appreciate the honest and disciplined approach.", name: "Krishna Rao", role: "Retired Employee" },
  { quote: "We approached Alpha Asset Finserv for our child's future planning. The investment strategy was explained clearly, including risks and timelines. We value their systematic approach.", name: "Lakshmi & Rajesh", role: "Parents" },
  { quote: "When I needed temporary funds, they guided me about the Loan Against Mutual Funds facility. The process was well explained, including risks and terms. It helped me avoid redeeming my investments.", name: "Naveen T.", role: "Entrepreneur" },
];

const Testimonials = () => {
  return (
    <Layout>
      {/* YouTube Videos Section */}
      <section className="section-padding">
        <div className="container-main">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="gradient-emerald-text">Investor Awareness Videos</span>
          </h1>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Educational content as part of our Investor Awareness & Education initiative.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {videos.map((video) => (
              <div key={video.title} className="card-premium">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <iframe
                    src={video.url}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <h3 className="text-foreground font-bold text-lg mb-2">{video.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{video.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="section-padding bg-secondary/50">
        <div className="container-main">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="gradient-emerald-text">Client Testimonials</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="card-premium">
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

export default Testimonials;
