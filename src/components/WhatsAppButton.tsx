// import { MessageCircle } from "lucide-react";

// const WhatsAppButton = () => {
//   return (
//     <a
//       href="https://wa.me/919700505046"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-emerald flex items-center justify-center glow-emerald transition-transform duration-300 hover:scale-110"
//       aria-label="Chat on WhatsApp"
//     >
//       <MessageCircle className="w-7 h-7 text-primary-foreground" />
//     </a>
//   );
// };

// export default WhatsAppButton;

import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919700505046"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7 text-white" />
    </a>
  );
};

export default WhatsAppButton;

