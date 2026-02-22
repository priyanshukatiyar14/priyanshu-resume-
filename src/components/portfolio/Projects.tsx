import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Folder } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { projects } = portfolioData;

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">// PORTFOLIO</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Production-grade systems solving real-world problems in fintech, security, and SaaS
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + index * 0.15 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative grid lg:grid-cols-2 gap-6 lg:gap-10">
                  {/* Left: Project Info */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ rotate: 8, scale: 1.1 }}
                        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                      >
                        <Folder className="h-5 w-5 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                      </div>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-medium text-foreground">Problem: </span>
                        <span className="text-muted-foreground">{project.problem}</span>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Solution: </span>
                        <span className="text-muted-foreground">{project.solution}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Tech & Impact */}
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Tech Stack</span>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <motion.span
                            key={tech}
                            whileHover={{ scale: 1.08 }}
                            className="px-3 py-1 text-xs font-mono bg-secondary rounded-md border border-border hover:border-primary/50 transition-colors cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider mb-1 block">Impact</span>
                      <p className="text-sm text-muted-foreground">{project.impact}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl font-semibold mb-6 text-center"
            >
              Other Notable Projects
            </motion.h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-xl bg-card border border-border group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <Folder className="h-8 w-8 text-primary" />
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{project.solution}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-xs text-muted-foreground font-mono">{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
