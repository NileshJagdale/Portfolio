import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";

const Hero = () => {
  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#A855F7]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, I'm <span className="text-[#A855F7]">{config.hero.name}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className={`${styles.heroSubText} text-white-100 mt-2 mr-72 leading-10`}
          >
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </motion.p>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
