import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <span className="text-xl font-bold text-foreground">AutoBlur</span>
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link 
            to="/privacy" 
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
          >
            Privacy Policy
          </Link>
          <a 
            href="https://apps.apple.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-sm font-medium"
          >
            Download
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
