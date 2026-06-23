import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Terminal, Code, Braces } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";
import { useRef, useEffect } from "react";

export const Hero = () => {
  const { personal } = portfolioData;
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll parallax
  const { scrollY } = useScroll();
  const yBg1 = useTransform(scrollY, [0, 600], [0, 150]);
  const yBg2 = useTransform(scrollY, [0, 600], [0, -120]);
  const yContent = useTransform(scrollY, [0, 600], [0, 80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.4]);

  // Mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 15 });
  const smy = useSpring(my, { stiffness: 60, damping: 15 });
  const tiltX = useTransform(smy, [-0.5, 0.5], [10, -10]);
  const tiltY = useTransform(smx, [-0.5, 0.5], [-10, 10]);
  const layer1X = useTransform(smx, [-0.5, 0.5], [-25, 25]);
  const layer1Y = useTransform(smy, [-0.5, 0.5], [-25, 25]);
  const layer2X = useTransform(smx, [-0.5, 0.5], [15, -15]);
  const layer2Y = useTransform(smy, [-0.5, 0.5], [15, -15]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      mx.set(e.clientX / w - 0.5);
      my.set(e.clientY / h - 0.5);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mx, my]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center relative overflow-hidden hero-gradient pt-20 pb-12"
      style={{ perspective: "1200px" }}
    >
      {/* Parallax background blobs */}
      <motion.div
        style={{ y: yBg1, x: layer1X }}
        className="absolute top-1/4 -left-1/4 w-[28rem] h-[28rem] bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: yBg2, x: layer2X }}
        className="absolute bottom-1/4 -right-1/4 w-[28rem] h-[28rem] bg-primary/15 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: yBg1 }}
        className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
      />

      {/* Grid pattern with parallax */}
      <motion.div
        style={{ y: yContent }}
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Location badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">{personal.location}</span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">Open to meaningful conversations</span>
          </motion.div>

      <motion.div
        style={{ y: yContent, opacity }}
        className="section-container relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6"
            >
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">{personal.location}</span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-muted-foreground">Available</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight"
            >
              {personal.name.split(" ")[0]}{" "}
              <span className="text-gradient">{personal.name.split(" ")[1]}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light mb-4"
            >
              {personal.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-6"
            >
              {personal.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8"
            >
              {["Python", "Django REST", "AWS", "PostgreSQL", "LangChain"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono bg-secondary/50 text-muted-foreground rounded-md border border-border"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 glow-effect" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" size="lg" className="border-border hover:border-primary/50 px-8" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
                <Github className="h-5 w-5" />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={`mailto:${personal.email}`} className="p-3 rounded-full bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </div>

          {/* Right: 3D Code Visual with tilt parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              rotateX: tiltX,
              rotateY: tiltY,
              transformStyle: "preserve-3d",
            }}
            className="order-1 lg:order-2 h-[360px] sm:h-[440px] lg:h-[560px] w-full relative flex items-center justify-center"
          >
            {/* Glow behind visual */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-3/4 h-3/4 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
            </div>

            {/* Floating code elements */}
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 right-8 lg:right-12 p-3 rounded-xl bg-card/80 border border-border backdrop-blur-sm shadow-lg"
              style={{ transform: "translateZ(60px)" }}
            >
              <Code className="h-6 w-6 text-primary" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-8 -left-4 lg:left-0 p-3 rounded-xl bg-card/80 border border-border backdrop-blur-sm shadow-lg"
              style={{ transform: "translateZ(40px)" }}
            >
              <Braces className="h-6 w-6 text-primary" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0], x: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/3 -right-4 lg:right-4 p-2.5 rounded-lg bg-primary/10 border border-primary/20"
              style={{ transform: "translateZ(80px)" }}
            >
              <Terminal className="h-5 w-5 text-primary" />
            </motion.div>

            {/* Main code window */}
            <div
              className="relative w-[90%] max-w-md rounded-2xl overflow-hidden border border-border bg-card/90 backdrop-blur-sm shadow-2xl"
              style={{ transform: "translateZ(30px)" }}
            >
              {/* Window header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">developer.py</span>
              </div>
              {/* Code content */}
              <div className="p-5 font-mono text-sm leading-relaxed">
                <div className="flex">
                  <span className="text-muted-foreground select-none w-6 text-right mr-4">1</span>
                  <span><span className="text-purple-500">class</span> <span className="text-yellow-500">Developer</span>:</span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground select-none w-6 text-right mr-4">2</span>
                  <span className="pl-4"><span className="text-purple-500">def</span> <span className="text-blue-500">__init__</span>(<span className="text-orange-500">self</span>):</span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground select-none w-6 text-right mr-4">3</span>
                  <span className="pl-8"><span className="text-orange-500">self</span>.name = <span className="text-green-500">&quot;Priyanshu&quot;</span></span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground select-none w-6 text-right mr-4">4</span>
                  <span className="pl-8"><span className="text-orange-500">self</span>.stack = [<span className="text-green-500">&quot;Python&quot;</span>, <span className="text-green-500">&quot;AWS&quot;</span>]</span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground select-none w-6 text-right mr-4">5</span>
                  <span className="pl-8"><span className="text-orange-500">self</span>.passion = <span className="text-green-500">&quot;Backend&quot;</span></span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground select-none w-6 text-right mr-4">6</span>
                  <span className="pl-4"><span className="text-purple-500">def</span> <span className="text-blue-500">build</span>(<span className="text-orange-500">self</span>, idea):</span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground select-none w-6 text-right mr-4">7</span>
                  <span className="pl-8"><span className="text-purple-500">return</span> <span className="text-green-500">&quot;Production Ready&quot;</span></span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};
