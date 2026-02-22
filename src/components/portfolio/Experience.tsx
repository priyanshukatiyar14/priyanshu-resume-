import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 md:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">// CAREER</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building impactful products across fintech, SaaS, and enterprise domains
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px origin-top"
          />

          {experience.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.2, type: "spring" }}
                className={`absolute top-1 w-3 h-3 rounded-full bg-primary ${
                  index % 2 === 0
                    ? "left-0 md:left-1/2 md:-translate-x-1.5"
                    : "left-0 md:left-1/2 md:-translate-x-1.5"
                }`}
                style={{
                  boxShadow: `0 0 0 4px hsl(var(--background)), 0 0 0 6px hsl(var(--primary) / 0.3)`,
                }}
              />

              <div className={`${index % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`p-6 rounded-xl bg-card border border-border card-hover relative overflow-hidden ${
                    exp.type === "current" ? "border-primary/30" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/3 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div className={index % 2 === 0 ? "md:text-right" : ""}>
                        <h3 className="font-bold text-lg">{exp.role}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <div className={`flex items-center gap-2 text-sm text-muted-foreground mt-1 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                          <span>•</span>
                          {exp.period}
                        </div>
                      </div>
                    </div>
                    <div className={`space-y-3 ${index % 2 === 0 ? "md:text-left" : ""}`}>
                      {exp.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="text-sm">
                          <span className="font-medium text-foreground">{highlight.title}:</span>{" "}
                          <span className="text-muted-foreground">{highlight.description}</span>
                        </div>
                      ))}
                    </div>
                    {exp.type === "current" && (
                      <div className={`mt-4 flex ${index % 2 === 0 ? "md:justify-start" : ""}`}>
                        <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium bg-green-500/10 text-green-600 dark:text-green-400 rounded-full">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                          Current
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
