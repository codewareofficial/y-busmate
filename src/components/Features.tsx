import { motion } from "framer-motion";
import { Navigation, Route, Users, Bell } from "lucide-react";

const features = [
  {
    icon: Navigation,
    title: "Live Bus Tracking",
    desc: "Track your college bus in real time.",
  },
  {
    icon: Route,
    title: "Route Identification",
    desc: "Quickly find the correct bus route.",
  },
  {
    icon: Users,
    title: "Student Friendly Interface",
    desc: "Simple and easy-to-use design.",
  },
  {
    icon: Bell,
    title: "Reliable Updates",
    desc: "Stay informed about bus movements.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold text-foreground text-center mb-16"
        >
          Features
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-8 card-elevated"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5">
                <f.icon className="text-accent-foreground" size={22} />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
