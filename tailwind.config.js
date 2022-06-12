module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '31.375rem',
      },
      backgroundImage: {
        'check': "url('./components/Filter/check.svg')",
      }
    },
    minHeight: {
      'big': '34.5625rem',
      'small': '14.9375rem',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1290px',
      '2xl': '1536px',
    }
  },
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
   },
  plugins: [],
}
