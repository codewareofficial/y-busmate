import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/50 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <h3 className="text-xl font-bold text-foreground">YBusMate</h3>
        <p className="text-sm text-muted-foreground">A project by Innovate X</p>
        <p className="text-xs text-muted-foreground">
          Presented by CodeWare & Department of Computer Technology
        </p>

        <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground pt-2">
          <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
        </div>

        <p className="text-xs text-muted-foreground pt-4">© 2026 YBusMate</p>
      </div>
    </footer>
  );
};

export default Footer;
