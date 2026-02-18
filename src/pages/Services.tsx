import { Link } from "react-router-dom";
import { TrendingUp, PiggyBank, Wallet, BarChart3, Target, Shield, GraduationCap, Briefcase, Landmark, CircleDollarSign, BookOpen, ArrowRight, Calculator } from "lucide-react";
import Layout from "@/components/Layout";

// AMC Logo imports
import sbiLogo from "@/assets/amc/sbi.jpg";
import hdfcLogo from "@/assets/amc/hdfc.jpg";
import iciciLogo from "@/assets/amc/icici.jpg";
import axisLogo from "@/assets/amc/axis.jpg";
import kotakLogo from "@/assets/amc/kotak.jpg";
import nipponLogo from "@/assets/amc/nippon.jpg";
import adityabirlaLogo from "@/assets/amc/adityabirla.jpg";
import dspLogo from "@/assets/amc/dsp.jpg";
import franklinLogo from "@/assets/amc/franklin.jpg";
import hsbcLogo from "@/assets/amc/hsbc.jpg";
import tataLogo from "@/assets/amc/tata.jpg";
import utiLogo from "@/assets/amc/uti.jpg";
import miraeLogo from "@/assets/amc/mirae.jpg";
import motilalLogo from "@/assets/amc/motilal.jpg";
import bandhanLogo from "@/assets/amc/bandhan.jpg";
import bajajLogo from "@/assets/amc/bajaj.jpg";
import boiLogo from "@/assets/amc/boi.jpg";
import edelweissLogo from "@/assets/amc/edelweiss.jpg";
import invescoLogo from "@/assets/amc/invesco.jpg";
import jmLogo from "@/assets/amc/jm.jpg";
import licLogo from "@/assets/amc/lic.jpg";
import naviLogo from "@/assets/amc/navi.jpg";
import quantLogo from "@/assets/amc/quant.jpg";
import whiteoakLogo from "@/assets/amc/whiteoak.jpg";
import abakkusLogo from "@/assets/amc/abakkus.jpg";
import angeloneLogo from "@/assets/amc/angelone.jpg";
import threesixtyoneLogo from "@/assets/amc/360one.jpg";

// Platform logos
import assetplus3 from "@/assets/platforms/assetplus3.jpg"; // Top highlighted
import assetplus1 from "@/assets/platforms/assetplus1.jpg";
import assetplus2 from "@/assets/platforms/assetplus2.jpg";
import platformsLogo from "@/assets/platforms/platforms.jpg";


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
  {
  id: "tax-awareness-facilitation",
  name: "Tax – Awareness & Facilitation (Through Partners)",
  icon: Calculator,
  desc: "Investment-related tax planning awareness and facilitation of ITR & GST services through licensed professionals."
},

];

const amcLogos = [
  { name: "SBI Mutual Fund", logo: sbiLogo },
  { name: "HDFC Mutual Fund", logo: hdfcLogo },
  { name: "ICICI Prudential", logo: iciciLogo },
  { name: "Axis Mutual Fund", logo: axisLogo },
  { name: "Kotak Mutual Fund", logo: kotakLogo },
  { name: "Nippon India", logo: nipponLogo },
  { name: "Aditya Birla Sun Life", logo: adityabirlaLogo },
  { name: "DSP Mutual Fund", logo: dspLogo },
  { name: "Franklin Templeton", logo: franklinLogo },
  { name: "HSBC Mutual Fund", logo: hsbcLogo },
  { name: "TATA Mutual Fund", logo: tataLogo },
  { name: "UTI Mutual Fund", logo: utiLogo },
  { name: "Mirae Asset", logo: miraeLogo },
  { name: "Motilal Oswal", logo: motilalLogo },
  { name: "Bandhan Mutual Fund", logo: bandhanLogo },
  { name: "Bajaj Finserv MF", logo: bajajLogo },
  { name: "Bank of India MF", logo: boiLogo },
  { name: "Edelweiss MF", logo: edelweissLogo },
  { name: "Invesco MF", logo: invescoLogo },
  { name: "JM Financial MF", logo: jmLogo },
  { name: "LIC Mutual Fund", logo: licLogo },
  { name: "Navi Mutual Fund", logo: naviLogo },
  { name: "Quant Mutual Fund", logo: quantLogo },
  { name: "WhiteOak Capital", logo: whiteoakLogo },
  { name: "Abakkus MF", logo: abakkusLogo },
  { name: "Angel One MF", logo: angeloneLogo },
  { name: "360 ONE MF", logo: threesixtyoneLogo },
];

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
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              <span className="gradient-emerald-text">Empanelled with Multiple AMCs in India</span>
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-4">
              {amcLogos.map((amc) => (
                <div
                  key={amc.name}
                  className="bg-white rounded-lg p-3 flex items-center justify-center aspect-square border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_15px_hsl(160_70%_42%/0.15)]"
                >
                  <img src={amc.logo} alt={amc.name} className="max-w-full max-h-full object-contain" />
                </div>
              ))}
            </div>
            <p className="text-[11px] text-muted-foreground/60 text-center mt-6 max-w-3xl mx-auto">
              Disclaimer: Logos displayed are for informational purposes only to indicate our empanelment with respective AMCs. We are not affiliated with, sponsored by, or endorsed by any Asset Management Company.
            </p>
          </div>

          {/* Distribution Platforms */}
          {/* Distribution Platforms */}
<div>
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
    <span className="gradient-emerald-text">
      Associated with National Distribution Platforms in India
    </span>
  </h2>

  <div className="flex flex-col items-center gap-8">
<p className="text-muted-foreground text-sm mb-4">
        In Associated With
      </p>
    {/* Top Highlighted Logo */}
    <div className="bg-white rounded-2xl p-6 px-10 shadow-lg">
      <img
        src={assetplus3}
        alt="AssetPlus"
        className="max-h-24 object-contain"
      />
    </div>

    {/* Primary Partner Section */}
    <div className="text-center">
      

      <div className="border-2 border-primary rounded-2xl p-6 px-10 glow-emerald transition-all duration-300">
        <div className="flex items-center justify-center gap-8 flex-wrap">

          <img
            src={assetplus1}
            alt="AssetPlus 1"
            className="h-14 object-contain"
          />

          <img
            src={assetplus2}
            alt="AssetPlus 2"
            className="h-14 object-contain"
          />

          <img
            src={platformsLogo}
            alt="Distribution Platform"
            className="h-14 object-contain"
          />

        </div>
      </div>
    </div>
    </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
