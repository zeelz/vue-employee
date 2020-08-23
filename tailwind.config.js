const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  theme: {
    extend: {
    	colors: {
	    	blue: {
	    		...colors.blue,
	    		'000': '#0366ee'
	    	}
    	},
    },
  },
  variants: {},
  plugins: [],
}