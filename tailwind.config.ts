import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        harmonia: ['"Harmonia Sans Pro Cyr"', 'sans-serif'],
      },
      fontSize: {
        'h1': ['55px', { lineHeight: '1.2', fontWeight: '400' }],
        'h2': ['40px', { lineHeight: '1.2', fontWeight: '400' }],
        'h3': ['16px', { lineHeight: '1.2', fontWeight: '400' }],
        'h4': ['14px', { lineHeight: '1.2', fontWeight: '400' }],
        'h5': ['12px', { lineHeight: '1.2', fontWeight: '400' }],
      },
      colors: {
        main: '#0E9EFF',  // Основной цвет
        accent: '#FFC000',  // Акцентный цвет
        headers: '#29383D',  // Цвет заголовков
        textsmain: '#50636A',  // Основной текст
        textonblue: '#EEF5F7',  // Текст на синем фоне
        maskform: '#A4AFB5',  // Цвет маски
        secondaryButton: '#70C6FD',  // Второстепенная кнопка основной цвет
        secondaryButtonGradient: {
          start: '#70C6FD',  // Цвет начала
          middle: '#02B6F1',  // Средний цвет
          end: '#70B4FF',  // Цвет конца
        },
        backgroundGradient: {
          start: '#70DBFC',  // Цвет начала
          end: '#70B3FF',  // Цвет конца
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
