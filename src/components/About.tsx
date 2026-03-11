import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section-gradient py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold text-foreground mb-6"
        >
          Built by Students,
          <br />
          <span className="text-gradient">for Students</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-4 text-muted-foreground text-base md:text-lg"
        >
          <p>
            BusMate is developed under <span className="font-semibold text-foreground">Innovate X</span>, an initiative encouraging innovative student projects.
          </p>
          <p>
            The project is proudly presented by <span className="font-semibold text-foreground">CodeWare</span> and the <span className="font-semibold text-foreground">Department of Computer Technology</span>, supporting student-driven technology solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
