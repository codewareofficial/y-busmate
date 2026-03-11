import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-gradient py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-5">
            <Mail className="text-accent-foreground" size={26} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Contact</h2>
          <p className="text-muted-foreground mb-6">For queries or feedback:</p>
          <a
            href="mailto:codewareofficial@gmail.com"
            className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:underline"
          >
            codewareofficial@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
