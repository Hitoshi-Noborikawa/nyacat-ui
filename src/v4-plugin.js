/**
 * Nyacat UI - TailwindCSS v4 Plugin
 * Native v4 plugin implementation
 */

import { plugin } from '@tailwindcss/core'

export default plugin({
  theme: {
    extend: {
      colors: {
        nyacat: {
          pink: '#FFB6C1',
          salmon: '#FFA07A',
          cream: '#FFF8DC',
          brown: '#D2B48C',
          gray: '#A9A9A9',
          black: '#2F2F2F',
        }
      },
      spacing: {
        paw: '0.75rem',
        whisker: '0.25rem',
      },
      borderRadius: {
        paw: '1rem',
        ear: '50% 50% 0 0',
      },
      animation: {
        'nyacat-spin': 'nyacat-spin 2s linear infinite',
        'nyacat-groom': 'nyacat-groom 3s ease-in-out infinite',
        'tail-wag': 'tail-wag 1s ease-in-out infinite',
        'purr': 'purr 2s ease-in-out infinite',
      },
      keyframes: {
        'nyacat-spin': {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' }
        },
        'nyacat-groom': {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
          '25%': { transform: 'translate(-50%, -60%) scale(0.9) rotate(-10deg)' },
          '50%': { transform: 'translate(-50%, -40%) scale(1.1) rotate(5deg)' },
          '75%': { transform: 'translate(-50%, -50%) scale(0.95) rotate(-5deg)' }
        },
        'tail-wag': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(10deg)' },
          '75%': { transform: 'rotate(-10deg)' }
        },
        'purr': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' }
        }
      }
    }
  }
}, {
  base: `
    /* Nyacat UI Base Styles */
    .btn-nyacat {
      padding: 0.75rem 1.5rem;
      border-radius: theme(borderRadius.paw);
      font-weight: 500;
      transition: all 0.2s;
      cursor: pointer;
      background: linear-gradient(135deg, theme(colors.nyacat.pink), theme(colors.nyacat.salmon));
      color: theme(colors.nyacat.black);
      border: 2px solid transparent;
      position: relative;
      overflow: hidden;
    }
    
    .btn-nyacat:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 20px color-mix(in srgb, theme(colors.nyacat.pink) 40%, transparent);
    }
    
    .loading-nyacat {
      display: inline-block;
      position: relative;
      width: 2.5rem;
      height: 2.5rem;
    }
    
    .loading-nyacat::before {
      content: "🐱";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 24px;
      animation: theme(animation.nyacat-spin);
    }
  `
})