import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{mdx,md}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        // Personalizar conforme necessário
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // ========================================
      // ANIMAÇÕES CUSTOMIZADAS
      // ========================================
      animation: {
        // Fade animations
        "fade-in": "fadeIn 0.5s ease-in forwards",
        "fade-out": "fadeOut 0.5s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in-down": "fadeInDown 0.6s ease-out forwards",

        // Slide animations
        "slide-in-left":
          "slideInLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "slide-in-right":
          "slideInRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "slide-in-up": "slideInUp 0.6s ease-out forwards",
        "slide-in-down": "slideInDown 0.6s ease-out forwards",
        "slide-out-left": "slideOutLeft 0.3s ease-in forwards",
        "slide-out-right": "slideOutRight 0.3s ease-in forwards",

        // Scale animations
        "scale-in":
          "scaleIn 0.4s cubic-bezier(0.17, 0.67, 0.83, 0.67) forwards",
        "scale-up": "scaleUp 0.5s ease-out forwards",
        "scale-down": "scaleDown 0.5s ease-in forwards",

        // Subtle animations
        "pulse-subtle": "pulseSubtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 3s ease-in-out infinite",
        "bounce-subtle": "bounceSubtle 2s ease-in-out infinite",

        // Spin & rotate
        "spin-slow": "spin 3s linear infinite",
        "spin-fast": "spin 0.8s linear infinite",
        "rotate-in": "rotateIn 0.5s ease-out forwards",

        // Shimmer effect (skeleton)
        shimmer: "shimmer 2s infinite",

        // Blur animations
        "blur-in": "blurIn 0.6s ease-out forwards",
        "blur-out": "blurOut 0.3s ease-in forwards",

        // Text animations
        typewriter: "typewriter 0.1s steps(1, end) forwards",
        "blink-cursor": "blinkCursor 0.7s step-end infinite",
      },

      // ========================================
      // KEYFRAMES
      // ========================================
      keyframes: {
        // Fade animations
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },

        // Slide animations
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideOutLeft: {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(-30px)" },
        },
        slideOutRight: {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(30px)" },
        },

        // Scale animations
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        scaleUp: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        scaleDown: {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.9)" },
        },

        // Subtle animations
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },

        // Rotate animations
        rotateIn: {
          "0%": { opacity: "0", transform: "rotate(-10deg)" },
          "100%": { opacity: "1", transform: "rotate(0deg)" },
        },

        // Shimmer effect
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },

        // Blur animations
        blurIn: {
          "0%": { opacity: "0", filter: "blur(10px)" },
          "100%": { opacity: "1", filter: "blur(0px)" },
        },
        blurOut: {
          "0%": { opacity: "1", filter: "blur(0px)" },
          "100%": { opacity: "0", filter: "blur(10px)" },
        },

        // Text animations
        typewriter: {
          to: { left: "100%" },
        },
        blinkCursor: {
          "0%, 49%": { borderRightColor: "transparent" },
          "50%, 100%": { borderRightColor: "white" },
        },
      },

      // ========================================
      // TRANSITIONS
      // ========================================
      transitionDuration: {
        0: "0ms",
        250: "250ms",
        350: "350ms",
        400: "400ms",
        500: "500ms",
        600: "600ms",
        700: "700ms",
        800: "800ms",
        900: "900ms",
        1000: "1000ms",
      },

      // ========================================
      // BACKDROP EFFECTS
      // ========================================
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },

      // ========================================
      // BOX SHADOWS (para profundidade)
      // ========================================
      boxShadow: {
        glow: "0 0 20px rgba(59, 130, 246, 0.5)",
        "glow-lg": "0 0 40px rgba(59, 130, 246, 0.6)",
        "glow-purple": "0 0 20px rgba(147, 51, 234, 0.5)",
        soft: "0 4px 20px rgba(0, 0, 0, 0.08)",
        "soft-lg": "0 20px 40px rgba(0, 0, 0, 0.12)",
      },

      // ========================================
      // Z-INDEX
      // ========================================
      zIndex: {
        hide: "-1",
        auto: "auto",
        0: "0",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
        dropdown: "1000",
        sticky: "1020",
        fixed: "1030",
        modal: "1040",
        popover: "1050",
        tooltip: "1060",
      },
    },
  },
  plugins: [
    // Custom plugin para efeitos avançados
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".animate-shimmer": {
          backgroundImage:
            "linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0) 100%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 2s infinite",
        },
        ".will-change-transform": {
          willChange: "transform",
        },
        ".will-change-opacity": {
          willChange: "opacity",
        },
        ".will-change-auto": {
          willChange: "auto",
        },
      };

      addUtilities(newUtilities);
    },
  ],
} satisfies Config;
