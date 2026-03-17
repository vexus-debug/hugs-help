import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/2349038535214?text=Hello%20Rubi%20Smile!%20I'd%20like%20to%20book%20an%20appointment."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-hover-lift transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="h-6 w-6 text-primary-foreground" />
  </a>
);

export default WhatsAppButton;
