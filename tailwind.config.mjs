/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ember: {
          orange: '#ff4d00',
          glow: '#fcddcc',
          wash: '#febec2'
        },
        gridline: '#e5e7eb',
        ink: '#262626',
        vellum: '#f9f9f9',
        slate: '#727272',
        graphite: '#616161',
        ash: '#949494',
        stone: '#c7c7c7',
        mist: '#b5b5b5',
        pebble: '#838383',
        border: '#e5e7eb',
        background: '#ffffff',
        foreground: '#262626'
      },
      fontFamily: {
        sans: ['Suisse', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'monospace']
      },
      borderRadius: {
        pill: '999px',
        card: '16px',
        input: '8px',
        code: '8px'
      },
      boxShadow: {
        'ember-glow': '0 0 0 6px #fcddcc',
        'vellum-ring': 'rgb(249, 249, 249) 0px 0px 0px 6px',
        'subtle-ambient': 'rgba(0, 0, 0, 0.02) 0px 40px 48px -20px, rgba(0, 0, 0, 0.03) 0px 0px 0px 1px',
        'code-window': 'rgb(253, 253, 253) 0px 0px 0px 8px'
      },
      letterSpacing: {
        display: '-0.26px',
        'display-xl': '-0.6px',
        'heading-lg': '-0.2px'
      }
    }
  },
  plugins: []
};
