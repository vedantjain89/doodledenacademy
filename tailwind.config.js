/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        doodle: {
          yellow: '#FFCA28',
          yellowDark: '#F59E0B',
          coral: '#FF6B6B',
          coralDark: '#E04848',
          purple: '#8B5CF6',
          purpleDark: '#6D28D9',
          teal: '#14B8A6',
          tealDark: '#0D9488',
          sky: '#38BDF8',
          skyDark: '#0284C7',
          orange: '#FF8A00',
          cream: '#FFFDF9',
          card: '#FFFFFF',
          dark: '#1E1B4B'
        }
      },
      fontFamily: {
        display: ['"Fredoka"', 'cursive', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      boxShadow: {
        'bubbly': '0 8px 0 0 rgba(0, 0, 0, 0.08), 0 20px 25px -5px rgba(0, 0, 0, 0.05)',
        'bubbly-lg': '0 12px 0 0 rgba(0, 0, 0, 0.08), 0 25px 35px -5px rgba(0, 0, 0, 0.08)',
        'bubbly-yellow': '0 6px 0 0 #D97706',
        'bubbly-coral': '0 6px 0 0 #DC2626',
        'bubbly-purple': '0 6px 0 0 #5B21B6',
        'bubbly-teal': '0 6px 0 0 #0F766E',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 5s ease-in-out infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
        'pulse-gentle': 'pulseGentle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.92, transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}
