// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Home, FileText, Star, User, Phone, Menu, X } from "lucide-react";
// import logo from "@/assets/logo.png";

// const navItems = [
//   { label: "Home", path: "/", icon: Home },
//   { label: "About Us", path: "/about", icon: User },
//   { label: "Services", path: "/services", icon: FileText },
//   { label: "Testimonials", path: "/testimonials", icon: Star },
//   { label: "Contact Us", path: "/contact", icon: Phone },
// ];

// const Header = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const location = useLocation();

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
//       <div className="container-main flex items-center justify-between h-20 md:h-24 px-4 md:px-8">

//         {/* LOGO — REFERENCE MATCHED */}
//         <Link to="/" className="flex items-center h-full">
//           <div className="w-40 md:w-52 lg:w-56 flex items-center">
//             <img
//               src={logo}
//               alt="Alpha Asset Finserv"
//               className="w-full h-auto object-contain"
//             />
//           </div>
//         </Link>

//         {/* DESKTOP NAV */}
//         <nav className="hidden md:flex items-center gap-1">
//           {navItems.map((item) => {
//             const Icon = item.icon;
//             return (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
//                   isActive(item.path)
//                     ? "text-primary glow-emerald-sm"
//                     : "text-muted-foreground hover:text-primary"
//                 }`}
//               >
//                 <Icon className="w-4 h-4" />
//                 {item.label}
//               </Link>
//             );
//           })}
//         </nav>

//         {/* DESKTOP CTA */}
//         <a
//           href="https://www.assetplus.in/mfd/ARN-264745"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-emerald text-primary-foreground font-semibold text-sm transition-all duration-300 hover:opacity-90 glow-emerald-sm"
//         >
//           Start Your Journey Now →
//         </a>

//         {/* MOBILE MENU BUTTON */}
//         <button
//           className="md:hidden text-foreground p-2"
//           onClick={() => setMobileOpen(!mobileOpen)}
//           aria-label="Toggle menu"
//         >
//           {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </div>

//       {/* MOBILE NAV */}
//       {mobileOpen && (
//         <div className="md:hidden bg-background border-b border-border animate-fade-in-up">
//           <nav className="flex flex-col p-4 gap-1">
//             {navItems.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <Link
//                   key={item.path}
//                   to={item.path}
//                   onClick={() => setMobileOpen(false)}
//                   className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
//                     isActive(item.path)
//                       ? "text-primary bg-primary/10"
//                       : "text-muted-foreground hover:text-primary hover:bg-primary/5"
//                   }`}
//                 >
//                   <Icon className="w-4 h-4" />
//                   {item.label}
//                 </Link>
//               );
//             })}

//             {/* MOBILE CTA */}
//             <a
//               href="https://www.assetplus.in/mfd/ARN-264745"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center justify-center gap-2 mt-2 px-5 py-3 rounded-lg gradient-emerald text-primary-foreground font-semibold text-sm"
//             >
//               Start Your Journey Now →
//             </a>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;


import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, FileText, Star, User, Phone, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", path: "/", icon: Home },
  { label: "About Us", path: "/about", icon: User },
  { label: "Services", path: "/services", icon: FileText },
  { label: "Testimonials", path: "/testimonials", icon: Star },
  { label: "Contact Us", path: "/contact", icon: Phone },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container-main flex items-center justify-between h-20 md:h-24 px-4 md:px-8">

        {/* LOGO */}
        <Link to="/" className="flex items-center h-full">
          <div className="w-40 md:w-52 lg:w-56 flex items-center">
            <img
              src={logo}
              alt="Alpha Asset Finserv"
              className="w-full h-auto object-contain"
            />
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-primary font-bold glow-emerald-sm"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                <Icon className="w-5 h-5" strokeWidth={2.5} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* DESKTOP CTA */}
        <a
          href="https://www.assetplus.in/mfd/ARN-264745"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-emerald text-primary-foreground font-semibold text-sm transition-all duration-300 hover:opacity-90 glow-emerald-sm"
        >
          Start Your Journey Now →
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" strokeWidth={2.5} />
          ) : (
            <Menu className="w-6 h-6" strokeWidth={2.5} />
          )}
        </button>
      </div>

      {/* MOBILE NAV */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in-up">
          <nav className="flex flex-col p-4 gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                    isActive(item.path)
                      ? "text-primary font-bold bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  <Icon className="w-5 h-5" strokeWidth={2.5} />
                  {item.label}
                </Link>
              );
            })}

            {/* MOBILE CTA */}
            <a
              href="https://www.assetplus.in/mfd/ARN-264745"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-2 px-5 py-3 rounded-lg gradient-emerald text-primary-foreground font-semibold text-sm"
            >
              Start Your Journey Now →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
