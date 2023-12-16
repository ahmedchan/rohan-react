/** @type {import('tailwindcss').Config} */
import ShadowRoot from "tailwindcss"

export default {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}", "./stories/**/*.{ts,tsx}"],
  safelist: ["dark"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Noto Kufi Arabic", "sans-serif"]
      },
      colors: {
        // primary
        primary: "hsl(var(--primary-main) / <alpha-value>)",

        // secondary
        secondary: "hsl(var(--secondary-main) / <alpha-value>)",

        // grays
        "primary-gray": "hsl(var(--primary-gray) / <alpha-value>)",
        "secondary-gray": "hsl(var(--secondary-gray) / <alpha-value>)",
        "bluish-gray": "hsl(var(--bluish-gray) / <alpha-value>)",

        // text
        "primary-text": "var(--primary-text)",
        "secondary-text": "var(--secondary-text)",
        "muted-text": "var(--muted-text)",

        // input
        "input-bg-color": "hsl(var(--input-bg-color) / <alpha-value>)",
        "input-border-color": "hsl(var(--input-border-color) / <alpha-value>)",
        "input-disabled-color":
          "hsl(var(--input-disabled-color) / <alpha-value>)",

        // body
        "body-bg-color": "var(--body-bg-color)",

        // card
        "card-bg-color": "hsl(var(--card-bg-color) / <alpha-value>)",
        "card-border-color": "hsl(var(--card-border-color) / <alpha-value>)",

        // border
        "border-color": "hsl(var(--border-color) / <alpha-value>)",

        // alerts
        success: "hsl(var(--success) / <alpha-value>)",
        warning: "hsl(var(--warning) / <alpha-value>)",
        error: "hsl(var(--error) / <alpha-value>)",

        // backdrop and overlaps
        "backdrop-light": "var(--backdrop-light-color)",
        "backdrop-dark": "var(--backdrop-dark-color)"
      },
      boxShadow: {
        ...ShadowRoot,
        "card-shadow": "var(--card-shadow)",
        "overlap-shadow": "var(--overlap-shadow)"
      },
      keyframes: {
        loadingbar: {
          "0%": { left: "0", width: "0", "z-index": "100" },
          "33.3333%%": { left: "0", width: "100%", "z-index": "100" },
          "100%": { left: "0", width: "100%" }
        },
        slideDownAndFade: {
          from: { opacity: 0, transform: "translateY(-30px)" },
          to: { opacity: 1, transform: "translateY(0)" }
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: "translateX(2px)" },
          to: { opacity: 1, transform: "translateX(0)" }
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: "translateY(0px)" },
          to: { opacity: 1, transform: "translateY(-30px)" }
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: "translateX(-2px)" },
          to: { opacity: 1, transform: "translateX(0)" }
        },
        confirmDialogShow: {
          from: { opacity: 0, transform: "scale(0.90)" },
          to: { opacity: 1, transform: "scale(1)" }
        },
        confirmDialogHide: {
          from: { opacity: 1, transform: "scale(1)" },
          to: { opacity: 0, transform: "scale(0.90)" }
        }
      },
      animation: {
        loadingbar: "loadingbar 1s linear infinite",
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        confirmDialogShow:
          "confirmDialogShow 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        confirmDialogHide:
          "confirmDialogHide 400ms cubic-bezier(0.16, 1, 0.3, 1)"
      }
    }
  },
  variants: {
    space: ["responsive", "direction"],
    extend: {}
  },
  plugins: []
}
