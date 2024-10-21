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
  			harmonia: ['Harmonia Sans Pro Cyr', 'sans-serif']
  		},
  		fontSize: {
  			h1: ['55px', { lineHeight: '1.2', fontWeight: '400' }],
  			h2: ['40px', { lineHeight: '1.2', fontWeight: '400' }],
  			h3: ['16px', { lineHeight: '1.2', fontWeight: '400' }],
  			h4: ['14px', { lineHeight: '1.2', fontWeight: '400' }],
  			h5: ['12px', { lineHeight: '1.2', fontWeight: '400' }]
  		},
  		colors: {
  			main: '#0E9EFF',
  			accent: '#FFC000',
  			headers: '#29383D',
  			textsmain: '#50636A',
  			textonblue: '#EEF5F7',
  			maskform: '#A4AFB5',
  			secondaryButton: '#70C6FD',
  			secondaryButtonGradient: {
  				start: '#70C6FD',
  				middle: '#02B6F1',
  				end: '#70B4FF'
  			},
  			backgroundGradient: {
  				start: '#70DBFC',
  				end: '#70B3FF'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
