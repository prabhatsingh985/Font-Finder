/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        void: '#08090a',
        carbon: '#0f1011',
        obsidian: '#161718',
        graphite: '#383b44',
        smoke: '#4a4e58',
        ash: '#62666d',
        fog: '#8a8f98',
        mist: '#d0d6e0',
        bone: '#e5e5e6',
        paper: '#ffffff',
        acid: {
          DEFAULT: '#e4f222',
          lime: '#e4f222'
        },
        pulse: {
          DEFAULT: '#27a644',
          green: '#27a644'
        },
        coral: {
          DEFAULT: '#eb5757',
          red: '#eb5757'
        },
        teal: {
          DEFAULT: '#02b8cc',
          signal: '#02b8cc'
        },
        iris: {
          DEFAULT: '#6366f1',
          violet: '#6366f1'
        },
        lavender: '#8b5cf6',
        border: '#383b44',
        background: '#08090a',
        foreground: '#d0d6e0'
      },
      fontFamily: {
        sans: ["'Inter Variable'", 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ["'Berkeley Mono'", "'JetBrains Mono'", 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
      },
      borderRadius: {
        cards: '12px',
        buttons: '6px',
        inputs: '6px',
        badges: '4px',
        pills: '9999px',
        small: '2px',
        pill: '9999px',
        card: '12px',
        input: '6px',
        code: '6px'
      },
      boxShadow: {
        sm: 'rgba(0, 0, 0, 0.4) 0px 2px 4px 0px',
        md: 'rgba(0, 0, 0, 0.2) 0px 0px 12px 0px inset',
        subtle: 'rgb(35, 37, 42) 0px 0px 0px 1px inset',
        'subtle-2': 'rgba(0, 0, 0, 0.2) 0px 0px 0px 1px',
        xl: 'rgba(8, 9, 10, 0.6) 0px 4px 32px 0px',
        'acid-btn': 'rgba(0, 0, 0, 0.01) 0px 5px 2px 0px, rgba(0, 0, 0, 0.04) 0px 3px 2px 0px, rgba(0, 0, 0, 0.07) 0px 1px 1px 0px'
      },
      letterSpacing: {
        display: '-0.022em',
        'heading-lg': '-0.022em',
        subheading: '-0.012em',
        body: '-0.010em'
      }
    }
  },
  plugins: []
};
