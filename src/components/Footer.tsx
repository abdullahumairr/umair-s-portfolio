import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-800 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-slate-400 text-sm">© 2025 Abdullah Umair</p>
          <p className="text-slate-500 text-sm mt-1 flex items-center justify-center gap-1">
            Built with <Heart size={14} className="text-red-500 inline" /> using
            React & Vite.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
