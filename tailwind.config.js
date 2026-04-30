/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Satoshi', 'Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Geist Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      colors: {
        surface: {
          950: '#050505',
          900: '#090909',
          800: '#0d0d0d'
        }
      },
      boxShadow: {
        glow: '0 0 45px rgba(255,255,255,0.08)',
        card: '0 24px 80px rgba(0,0,0,0.45)'
      },
      keyframes: {
        floatSoft: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-14px,0)' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120%)' }
        }
      },
      animation: {
        floatSoft: 'floatSoft 8s ease-in-out infinite',
        shimmer: 'shimmer 2.8s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
