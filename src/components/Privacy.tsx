import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <section id="privacy" className="py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-5">
            <Shield className="text-accent-foreground" size={26} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Your Privacy Matters</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            BusMate collects minimal data — only what's needed to give you a great experience. We never sell or share your information.
          </p>
          <Link
            to="/privacy"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity"
          >
            Read Full Privacy Policy
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Privacy;
