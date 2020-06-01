const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        serif: ['chaparral-pro', ...defaultTheme.fontFamily.serif],
        titling: ['jaf-domus-titling-web', ...defaultTheme.fontFamily.sans],
        display: ['jaf-domus', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/ui'), require('tailwindcss-typography')],
  purge: ['./src/**/*.html'],
}
