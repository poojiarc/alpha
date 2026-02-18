import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";

const serviceData: Record<string, { title: string; content: string[] }> = {
  "mutual-fund-distribution": {
    title: "Mutual Fund Distribution",
    content: [
      "Facilitating access to mutual fund schemes offered by respective Asset Management Companies (AMCs), based on investors' financial goals and risk profile, in line with applicable SEBI and AMFI guidelines.",
      "We help investors understand the various mutual fund categories — equity, debt, hybrid — and facilitate investments through a transparent and compliant process.",
      "Our role is to act as a bridge between investors and AMCs, ensuring smooth onboarding and ongoing support.",
    ],
  },
  "sip-facilitation": {
    title: "SIP (Systematic Investment Plan) Facilitation",
    content: [
      "Assistance in understanding and starting SIPs in mutual fund schemes to promote disciplined, long-term investing habits.",
      "SIPs allow investors to invest a fixed amount regularly, helping build wealth over time through the power of compounding and rupee cost averaging.",
      "We guide investors in selecting appropriate SIP amounts and frequencies based on their financial goals.",
    ],
  },
  "lumpsum-investment": {
    title: "Lumpsum Investment",
    content: [
      "Facilitating one-time investments in mutual fund schemes for investors seeking to invest surplus funds, subject to market risks.",
      "Lumpsum investments can be suitable for investors who have a significant amount to invest at once and are comfortable with market volatility.",
      "We help investors understand the risks and potential of lumpsum investing across different asset classes.",
    ],
  },
  "swp-awareness": {
    title: "SWP (Systematic Withdrawal Plan) Awareness",
    content: [
      "Providing information and facilitation related to SWP options in mutual funds for investors who wish to plan periodic withdrawals, subject to scheme features and market conditions.",
      "SWP allows investors to withdraw a fixed amount at regular intervals from their investment, instead of redeeming the entire amount at once.",
      "SWP can help plan periodic cash flows while the remaining investment continues to stay invested in the market.",
      "Withdrawals reduce the invested amount and are subject to applicable taxes and exit loads, as per prevailing regulations.",
    ],
  },
  "portfolio-review": {
    title: "Portfolio Review & Investment Awareness",
    content: [
      "Helping investors understand their existing mutual fund portfolio and providing general investment awareness related to asset allocation, diversification, and long-term investing concepts.",
      "No investment advice or return assurance is provided.",
      "We focus on educating investors about the importance of periodic portfolio review and rebalancing.",
    ],
  },
  "goal-based-investing": {
    title: "Goal-Based Investment Awareness",
    content: [
      "Creating awareness around goal-based investing — education, retirement, wealth planning — and the importance of aligning investments with individual financial goals and risk tolerance.",
      "We help investors identify their financial goals and understand how different investment strategies can be aligned with these goals.",
      "Goal-based investing promotes a disciplined approach to wealth creation over the long term.",
    ],
  },
  "investor-education": {
    title: "Investor Education & Financial Literacy",
    content: [
      "Conducting awareness sessions, webinars, and one-on-one discussions to improve understanding of mutual funds, market-linked investments, risks involved, and long-term investing discipline.",
      "We believe that an informed investor is an empowered investor. Our sessions cover basic to advanced topics in mutual fund investing.",
      "We regularly conduct workshops and seminars across Andhra Pradesh and Telangana to promote financial literacy.",
    ],
  },
  "pms-distribution": {
    title: "PMS (Portfolio Management Services) Distribution",
    content: [
      "Facilitating Distribution services to PMS products offered by SEBI Registered Portfolio Managers, subject to eligibility criteria and regulatory guidelines.",
      "PMS is designed for high net-worth individuals seeking customized portfolio management with higher minimum investment thresholds.",
      "We help eligible investors understand PMS offerings and facilitate access through compliant channels.",
    ],
  },
  "aif-distribution": {
    title: "AIF (Alternative Investment Funds) Distribution",
    content: [
      "Facilitating Distribution services to AIF products offered by SEBI Registered Alternative Investment Fund Managers, subject to suitability and regulatory norms.",
      "AIFs offer exposure to alternative asset classes and strategies not typically available through traditional mutual fund routes.",
      "We assist qualified investors in understanding and accessing AIF opportunities.",
    ],
  },
  "sif-distribution": {
    title: "SIF (Specialized Investment Funds) Distribution",
    content: [
      "Specialized Investment Funds (SIFs) are a SEBI-regulated, intermediate investment category in India designed for sophisticated investors, bridging the gap between mutual funds and Portfolio Management Services (PMS).",
      "They offer higher flexibility for strategies like long-short, sectoral rotation, and dynamic asset allocation with a minimum investment of ₹10 lakh.",
      "SIFs provide access to more complex investment strategies while maintaining regulatory oversight and investor protection measures.",
    ],
  },
  "loan-against-mf": {
    title: "Loan Against Mutual Funds",
    content: [
      "At Alpha Asset Finserv, we facilitate Loan Against Mutual Funds (LAMF) through partnered banks and NBFCs, enabling investors to access short-term funds without redeeming their mutual fund holdings.",
      "This helps investors meet urgent financial needs while their investments continue to remain invested in the market.",
      "Loan Against Mutual Funds is a facility provided by banks/NBFCs where investors can pledge their mutual fund units as collateral and avail a loan against them.",
      "The loan amount depends on: Type of mutual fund (Equity / Debt / Hybrid), Net Asset Value (NAV), Lender's margin requirements, and Regulatory guidelines.",
      "Key benefits include: No need to redeem investments, quick processing, competitive interest rates, and flexible repayment options.",
    ],
  },
    "tax-awareness-facilitation": {
    title: "Tax – Awareness & Facilitation (Through Partners)",
    content: [
      "We provide awareness regarding tax aspects related to investments and facilitate tax-related services through qualified and licensed professionals.",
      "1. Tax Planning Awareness related to Investments – Understanding tax-saving investment options such as ELSS, capital gains implications, and long-term tax-efficient investment strategies.",
      "2. Capital Gains Tax Harvesting Awareness – General awareness regarding capital gains taxation in mutual funds and tax harvesting strategies within regulatory limits.",
      "3. ITR Filing & GST Services Facilitation – Facilitation of Income Tax Return (ITR) filing and GST services through licensed professionals.",
    ],  
  },

};

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const service = id ? serviceData[id] : null;

  if (!service) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container-main text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Service Not Found</h1>
            <Link to="/services" className="text-primary hover:underline">← Back to Services</Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-main max-w-3xl">
          <Link to="/services" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="gradient-emerald-text">{service.title}</span>
          </h1>
          <div className="space-y-4">
            {service.content.map((para, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">{para}</p>
            ))}
          </div>
          <div className="mt-10">
            <a
              href="https://www.assetplus.in/mfd/ARN-264745"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-emerald text-primary-foreground font-semibold transition-all hover:opacity-90 glow-emerald-sm"
            >
              Start Your Journey Now →
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
