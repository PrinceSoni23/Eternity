import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1300px",
      },
    },
    extend: {
      colors: {
        
          AAprimary: "#0b192f",
          AAsecondary: "#64ffda",
          AAError: "#ff6489",
          AAtertiary: "#112340",
          ResumeButtonHover: "#153040",
          MobileNavBarColor: "#112340",
          StartupBackground: "#020c1b",
        
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				"loading": {
					"to": {
						transform: "rotate(360deg)"
					},
				},
				flip: {
					to: {
						transform: "rotate(360deg)",
					},
				},
				rotate: {
					to: {
						transform: "rotate(90deg)",
					},
				},
				orbit: {
					"0%": {
						transform:
							"rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))",
					},
					"100%": {
						transform:
							"rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))",
					},
				},
				ripple: {
					"0%, 100%": {
						transform: "translate(-50%, -50%) scale(1)",
					},
					"50%": {
						transform: "translate(-50%, -50%) scale(0.9)",
					},
				},
				blob: {
					"0%": {
						transform: "translate(-50%, -50%) rotate(0deg) scale(1)",
					},
					"33%": {
						transform: "translate(-50%, -50%) rotate(120deg) scale(1.1)",
					},
					"66%": {
						transform: "translate(-50%, -50%) rotate(240deg) scale(0.9)",
					},
					"100%": {
						transform: "translate(-50%, -50%) rotate(360deg) scale(1)",
					},
				},
				"image-glow": {
					"0%": {
						"opacity": "0",
						"animation-timing-function": "cubic-bezier(.74, .25, .76, 1)",
					},
					"10%": {
						"opacity": "0.5",
						"animation-timing-function": "cubic-bezier(.12, .01, .08, .99)",
					},
					"100%": {
						"opacity": "1",
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'loading': 'loading 0.6s linear infinite',
				flip: "flip 6s infinite steps(2, end)",
				rotate: "rotate 3s linear infinite both",
				orbit: "orbit calc(var(--duration)*1s) linear infinite",
				ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
				blob: "blob 7s infinite",
				"image-glow": "image-glow 6s ease-out 0.6s forwards",
			},
			spacing: {
				"1/8": "12.5%",
			},
			fontFamily: {
				heading: ['var(--font-heading)'],
				subheading: ['var(--font-subheading)'],
				base: ['var(--font-base)'],
			},
    },
  },

  





  plugins: [animate, typography],
} satisfies Config;


export default config;
