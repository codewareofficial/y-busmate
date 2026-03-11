import { motion } from "framer-motion";
import phoneMockup from "@/assets/phone-mockup.png";

const Hero = () => {
  return (
    <section className="hero-gradient pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold text-foreground mb-4"
        >
          Y<span className="text-gradient">BusMate</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-xl md:text-2xl font-semibold text-foreground/80 mb-4"
        >
          Know Your Bus. Right on Time.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10"
        >
          BusMate helps students track their college buses, view route numbers,
          and make daily campus travel easier and stress-free.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          {/* App Store Button */}
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-foreground text-background px-5 py-3 rounded-xl hover:opacity-90 transition-opacity"
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
            </svg>
            <div className="text-left">
              <div className="text-[10px] leading-tight opacity-80">Download on the</div>
              <div className="text-lg font-semibold leading-tight">App Store</div>
            </div>
          </a>

          {/* Google Play Button */}
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-foreground text-background px-5 py-3 rounded-xl hover:opacity-90 transition-opacity"
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.61 1.814L13.793 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .61-.92zm1.644-.776L16.06 6.95l-2.97 2.97L5.254 1.038zM17.445 7.6L20.39 9.27a1 1 0 0 1 0 1.74l-2.945 1.67-3.266-3.266L17.445 7.6zM5.254 22.962L13.09 14.08l2.97 2.97L5.254 22.962z"/>
            </svg>
            <div className="text-left">
              <div className="text-[10px] leading-tight opacity-80">Get it on</div>
              <div className="text-lg font-semibold leading-tight">Google Play</div>
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="flex justify-center mb-10"
        >
          <img
            src={phoneMockup}
            alt="BusMate App Interface"
            className="w-64 md:w-80 animate-float drop-shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="text-xs text-muted-foreground space-y-1"
        >
          <p>A project by <span className="font-semibold text-foreground/70">Innovate X</span></p>
          <p>Presented by <span className="font-semibold text-foreground/70">CodeWare</span> & <span className="font-semibold text-foreground/70">Department of Computer Technology</span></p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
