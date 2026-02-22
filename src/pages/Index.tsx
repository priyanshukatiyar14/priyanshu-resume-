import { useState, useEffect } from "react";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import type { ThemeId } from "@/components/portfolio/ThemeSwitcher";

const themeClasses: Record<ThemeId, string> = {
  light: "",
  dark: "dark",
  cyberpunk: "cyberpunk",
  ocean: "ocean",
  sunset: "sunset",
  emerald: "emerald",
};

const Index = () => {
  const [theme, setTheme] = useState<ThemeId>(() => {
    return (localStorage.getItem("portfolio-theme") as ThemeId) || "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    // Remove all theme classes
    root.classList.remove("dark", "cyberpunk", "ocean", "sunset", "emerald");
    const cls = themeClasses[theme];
    if (cls) root.classList.add(cls);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-400">
      <Header currentTheme={theme} onThemeChange={setTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
