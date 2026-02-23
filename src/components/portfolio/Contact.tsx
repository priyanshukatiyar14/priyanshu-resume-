import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Download, ExternalLink, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { personal } = portfolioData;

  const whatsappNumber = personal.phone.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Priyanshu! I came across your portfolio and would love to connect.")}`;

  const contactItems = [
    { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
    { icon: MapPin, label: "Location", value: personal.location, href: null },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: personal.github },
    { icon: Linkedin, label: "LinkedIn", href: personal.linkedin },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="text-primary font-mono text-sm mb-4 block"
          >
            // LET'S CONNECT
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Always happy to connect and discuss ideas, backend architecture, or collaborations.
            If you have a question or want to start a conversation, feel free to reach out.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-3 gap-4 mb-10"
          >
            {contactItems.map((item) => (
              <motion.div key={item.label} variants={itemVariants}>
                {item.href ? (
                  <a
                    href={item.href}
                    className="block p-6 rounded-xl bg-card border border-border text-center card-hover group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="p-6 rounded-xl bg-card border border-border text-center">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-3">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* WhatsApp CTA Card */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block mb-10 p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30 hover:border-green-500/60 transition-all duration-300 group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="h-7 w-7 text-green-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">Message on WhatsApp</h4>
                  <p className="text-sm text-muted-foreground">Quick response • Available for chat</p>
                </div>
              </div>
              <Send className="h-5 w-5 text-green-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
          </motion.a>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-accent/5 border border-primary/20 text-center relative overflow-hidden"
          >
            {/* Animated background dots */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <div className="absolute top-4 left-8 w-2 h-2 rounded-full bg-primary animate-bounce-subtle" />
              <div className="absolute top-12 right-12 w-1.5 h-1.5 rounded-full bg-accent animate-float" />
              <div className="absolute bottom-8 left-1/4 w-2 h-2 rounded-full bg-primary/50 animate-pulse-slow" />
            </div>

            <div className="relative">
              <h3 className="text-2xl font-bold mb-3">Ready to work together?</h3>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Let's discuss how I can help build your next backend system, from architecture to deployment
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect px-8"
                  asChild
                >
                  <a href={`mailto:${personal.email}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="bg-green-600 text-white hover:bg-green-700 px-8"
                  asChild
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/50 hover:bg-primary/10 px-8"
                  asChild
                >
                  <a href={personal.resumeUrl} download>
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-4 mt-8">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 border border-transparent hover:border-primary/20"
                  >
                    <link.icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{link.label}</span>
                    <ExternalLink className="h-3 w-3" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
