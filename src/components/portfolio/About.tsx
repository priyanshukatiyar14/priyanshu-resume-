import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Cloud, Shield } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { about, education } = portfolioData;

  const features = [
    {
      icon: Code2,
      title: "Backend Engineering",
      description: "Production-grade Python systems with Django REST & Flask",
    },
    {
      icon: Database,
      title: "Data Architecture",
      description: "PostgreSQL, MongoDB, DynamoDB for scalable solutions",
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "AWS infrastructure with Lambda, EC2, and serverless",
    },
    {
      icon: Shield,
      title: "Security Focus",
      description: "Document forensics and fraud detection systems",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">// ABOUT ME</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {about.headline}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Description & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {about.description}
            </p>

            <div className="space-y-4">
              {about.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-primary mt-1.5">▹</span>
                  <span className="text-foreground">{highlight}</span>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 p-6 rounded-xl bg-card border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{education.degree}</h4>
                  <p className="text-muted-foreground text-sm">{education.field}</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    {education.institution} • CGPA: {education.cgpa}
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">{education.period}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border card-hover group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
