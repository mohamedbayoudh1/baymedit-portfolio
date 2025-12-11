import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold">
              <span className="text-primary">Mohamed</span>
              <span className="text-foreground">.dev</span>
            </a>
            <p className="text-muted-foreground text-sm mt-2">
              Full-Stack Web Developer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mohamedbayoudh1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamedbayoudh/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:mohamed.bayoudhit@gmail.com"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Mail size={18} />
            </a>
          </div>

          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} — Designed & Developed by <span className="font-medium">Mohamed Bayoudh</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;