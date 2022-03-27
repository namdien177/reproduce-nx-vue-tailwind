module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: {
    content: [
      './apps/**/*.{html,ts,css,scss,sass,vue,tsx,less,styl}',
      './libs/**/*.{html,ts,css,scss,sass,vue,tsx,less,styl}',
    ],
  },
  theme: {
    extend: {
      spacing: {
        inherit: 'inherit',
        none: 'none',
        13: '3.25rem',
        120: '30rem',
        128: '32rem',
        256: '64rem',
      },
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
      maxHeight: (theme) => ({
        ...theme('spacing'),
      }),
      minWidth: (theme) => ({
        ...theme('spacing'),
      }),
      maxWidth: (theme) => ({
        ...theme('spacing'),
      }),
      colors: {
        // main background
        background: 'rgb(30,30,30)',
        'background-20': 'rgb(40,40,40)',
        // Primary highlight logo
        primary: '#DC2626',
        // Secondary highlight effect
        secondary: '#D44D5C',
        'almost-white': '#FCFCFC',
        // Sidebars background
        highlighted: '#1098F7',
        // main black background. Use for leveled/focused element on background.
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
