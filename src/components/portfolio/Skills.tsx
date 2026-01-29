import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolio";

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { skills } = portfolioData;

  const skillCategories = [
    { title: "Languages", items: skills.languages, color: "from-cyan-500 to-blue-500" },
    { title: "Frameworks", items: skills.frameworks, color: "from-emerald-500 to-teal-500" },
    { title: "Databases", items: skills.databases, color: "from-violet-500 to-purple-500" },
    { title: "Cloud & AWS", items: skills.cloud, color: "from-orange-500 to-amber-500" },
    { title: "Tools & DevOps", items: skills.tools, color: "from-pink-500 to-rose-500" },
    { title: "Payments", items: skills.payments, color: "from-green-500 to-emerald-500" },
  ];

  return (
    <section id="skills" className="py-20 md:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">// TECH STACK</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building robust backend systems with modern technologies and cloud-native architectures
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + categoryIndex * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border card-hover group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}
                />
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.2 + categoryIndex * 0.1 + skillIndex * 0.03,
                    }}
                    className="skill-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "1.5+", label: "Years Experience" },
            { value: "10+", label: "Projects Delivered" },
            { value: "5+", label: "Products Built" },
            { value: "15+", label: "AWS Services" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-secondary/50 border border-border"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
