/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      animation: {
        'bounce-s': 'bounces 1s ease-in-out 5',
        'bounce-l': 'bouncel 1s ease-in-out 5',
        'bounce-r': 'bouncer 1s ease-in-out 5'
      },
      colors: {
        'bm-gold': '#ECA800',
        'bm-amber': '#FDBE01',
        'bm-flax': '#EED789',

        'bm-federal': '#000052',
        'bm-oxford': '#000029',

        'bm-flash': '#F4F5F6',
        'bm-platinum': '#E7E8EA',
      },
      keyframes: {
        bounces: {
          '0%, 100%': {
            transform: 'translateY(-25%)'
          },
          '50%': { transform: 'translateY(0)' },
        },
        bouncel: {
          '0%, 100%': {
            transform: 'translateX(-25%)'
          },
          '50%': { transform: 'translateX(0)' },
        },
        bouncer: {
          '0%, 100%': {
            transform: 'translateX(25%)'
          },
          '50%': { transform: 'translateX(0)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
