import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Rocket, Users } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const iconMap = {
  trophy: Trophy,
  rocket: Rocket,
  users: Users,
};

export const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { achievements } = portfolioData;

  return (
    <section className="py-20 md:py-32 bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">// ACHIEVEMENTS</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Recognition & <span className="text-gradient">Awards</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.15, type: "spring" }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-6 rounded-xl bg-card border border-border text-center group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                  >
                    <IconComponent className="h-8 w-8 text-primary" />
                  </motion.div>
                  <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
