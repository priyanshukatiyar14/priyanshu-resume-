import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ArrowUpRight, Code2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export const PersonalProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { personalProjects, personal } = portfolioData;

  return (
    <section id="personal-projects" className="py-20 md:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">// OPEN SOURCE</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Personal Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Side projects and experiments from my GitHub — exploring AI, automation and backend tooling.
          </p>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:underline"
          >
            <Github className="h-4 w-4" />
            github.com/priyanshukatiyar14
          </a>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalProjects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-xl bg-card border border-border card-hover relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Code2 className="h-5 w-5 text-primary" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors break-words">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 min-h-[60px]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs font-mono bg-secondary rounded-md border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
