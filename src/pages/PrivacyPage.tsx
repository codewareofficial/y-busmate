import { motion } from "framer-motion";
import { Shield, Eye, Lock, UserCheck, Server, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const policies = [
  {
    icon: FileText,
    title: "Information We Collect",
    content: "BusMate collects limited personal information to provide you with a personalized experience:",
    items: ["Full Name", "Gender", "Bus Route Number"],
  },
  {
    icon: Eye,
    title: "How We Use Your Data",
    content: "Your information is used exclusively to:",
    items: [
      "Improve your user experience",
      "Personalize bus tracking services",
      "Display relevant route information",
    ],
  },
  {
    icon: Lock,
    title: "Data Protection",
    content: "We take your privacy seriously. BusMate does not sell or share your personal data with any third parties. All user information is stored securely and handled with strict confidentiality.",
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    content: "You have the right to access, update, or request deletion of your personal information at any time by contacting our support team.",
  },
  {
    icon: Server,
    title: "Data Storage",
    content: "All data is stored on secure servers with industry-standard encryption. We retain your information only as long as necessary to provide our services.",
  },
];

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-6">
              <Shield className="text-accent-foreground" size={30} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              Transparency and trust are at the core of BusMate. Here's how we handle your data.
            </p>
            <p className="text-sm text-muted-foreground mt-3">Last updated: March 2026</p>
          </motion.div>

          <div className="space-y-6">
            {policies.map((policy, i) => (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="rounded-2xl border border-border bg-card p-8 card-elevated"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center shrink-0 mt-0.5">
                    <policy.icon className="text-accent-foreground" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">{policy.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{policy.content}</p>
                    {policy.items && (
                      <ul className="mt-3 space-y-1.5">
                        {policy.items.map((item) => (
                          <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center text-sm text-muted-foreground"
          >
            <p>Questions about our privacy practices? Contact us at{" "}
              <a href="mailto:codewareofficial@gmail.com" className="text-primary font-medium hover:underline">
                codewareofficial@gmail.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
