import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

export type ThemeId = "light" | "dark" | "cyberpunk" | "ocean" | "sunset" | "emerald";

interface ThemeOption {
  id: ThemeId;
  label: string;
  colors: [string, string, string]; // preview swatches
}

const themes: ThemeOption[] = [
  { id: "light", label: "Light", colors: ["#ffffff", "#0891b2", "#1e293b"] },
  { id: "dark", label: "Dark", colors: ["#0f172a", "#06b6d4", "#e2e8f0"] },
  { id: "cyberpunk", label: "Cyberpunk", colors: ["#1a0a2e", "#ff3399", "#00ffaa"] },
  { id: "ocean", label: "Ocean", colors: ["#0a1929", "#00b4d8", "#2dd4a0"] },
  { id: "sunset", label: "Sunset", colors: ["#1a0f0a", "#e8762d", "#d94580"] },
  { id: "emerald", label: "Emerald", colors: ["#0a1a12", "#2eb872", "#8bc34a"] },
];

interface ThemeSwitcherProps {
  currentTheme: ThemeId;
  onThemeChange: (theme: ThemeId) => void;
}

export const ThemeSwitcher = ({ currentTheme, onThemeChange }: ThemeSwitcherProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="text-muted-foreground hover:text-foreground"
      >
        <Palette className="h-5 w-5" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-12 w-52 p-3 rounded-xl bg-card border border-border shadow-lg z-50"
          >
            <p className="text-xs font-medium text-muted-foreground mb-2 px-1">Choose Theme</p>
            <div className="space-y-1">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => {
                    onThemeChange(theme.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentTheme === theme.id
                      ? "bg-primary/15 text-primary"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  <div className="flex -space-x-1">
                    {theme.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 rounded-full border border-border"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  {theme.label}
                  {currentTheme === theme.id && (
                    <motion.div
                      layoutId="theme-check"
                      className="ml-auto w-1.5 h-1.5 rounded-full bg-primary"
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
