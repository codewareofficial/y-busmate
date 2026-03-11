import { motion } from "framer-motion";
import { MapPin, Clock, Smartphone } from "lucide-react";

const ProductExperience = () => {
  return (
    <section className="section-gradient py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Designed for Simple
            <br />
            <span className="text-gradient">Campus Travel</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            BusMate improves daily student commuting with a simple interface and
            real-time bus tracking — so you never miss your ride again.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: MapPin,
              title: "Real-Time Tracking",
              desc: "See exactly where your bus is at any moment.",
            },
            {
              icon: Clock,
              title: "Always On Time",
              desc: "Get accurate arrival times and never wait blindly.",
            },
            {
              icon: Smartphone,
              title: "Effortless UI",
              desc: "Designed for students — clean, fast, and intuitive.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center p-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-5">
                <item.icon className="text-accent-foreground" size={26} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductExperience;
