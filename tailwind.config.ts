import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      black: {
        DEFAULT: '#000000',
      },
      white: {
        DEFAULT: '#FFFFFF',
      },
      blue: {
        DEFAULT: '#0525c6',
        dark: '#051d34',
      },
      gray: {
        light: '#eeeeee',
        base: '#b9bcc3'
      },
      orange: {
        DEFAULT: '#FC5741',
      },
    },
    fontFamily: {
      travels: ['Travels', 'sans-serif'],
    },
    screens: {
      sm: '355px',
      md: '768px',
      lg: '984px',
      xl: '1300px',
      '2xl': '1800px',
    },
    extend: {
      spacing: {
        7.5: '1.875rem',
        13: '3.25rem',
        15: '3.75rem',
        18: '4.5rem',
        25: '6.25rem',
        30: '7.5rem',
      },
      fontSize: {
        'xs': '0.75rem',
        'md': '1.3125rem',
        'lg': '1.6875rem',
        'xl': '2.5rem',
        '5xl': '8.75rem',
      },
      textShadow: {
        sm: "rgba(255, 255, 255, 0.35) 1px 1px 12px",
      },
    },
  },
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
  ],
}
