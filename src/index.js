import plugin from 'tailwindcss/plugin'

export default plugin(function({ addComponents, addUtilities, addBase }) {
  // キーフレームアニメーションを追加
  addBase({
    '@keyframes nyacat-spin': {
      '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
      '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' }
    },
    '@keyframes nyacat-groom': {
      '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
      '25%': { transform: 'translate(-50%, -60%) scale(0.9) rotate(-10deg)' },
      '50%': { transform: 'translate(-50%, -40%) scale(1.1) rotate(5deg)' },
      '75%': { transform: 'translate(-50%, -50%) scale(0.95) rotate(-5deg)' }
    }
  })

  // NyacatButton コンポーネント
  addComponents({
    '.btn-nyacat': {
      '@apply px-6 py-3 rounded-paw font-medium transition-all duration-200 cursor-pointer': {},
      'background': 'linear-gradient(135deg, #FFB6C1, #FFA07A)',
      'color': '#2F2F2F',
      'border': '2px solid transparent',
      'position': 'relative',
      'overflow': 'hidden',
      
      '&:hover': {
        'transform': 'scale(1.05)',
        'box-shadow': '0 8px 20px rgba(255, 182, 193, 0.4)',
        'animation': 'paw-bounce 0.3s ease-in-out'
      },
      
      '&:active': {
        'transform': 'scale(0.98)',
        'animation': 'paw-print 0.2s ease-out'
      },
      
      '&::before': {
        'content': '""',
        'position': 'absolute',
        'top': '50%',
        'left': '50%',
        'width': '0',
        'height': '0',
        'background': 'rgba(255, 255, 255, 0.3)',
        'border-radius': '50%',
        'transform': 'translate(-50%, -50%)',
        'transition': 'width 0.3s ease, height 0.3s ease'
      },
      
      '&:hover::before': {
        'width': '100px',
        'height': '100px'
      }
    },

    // ハチワレ猫
    '.btn-nyacat-tuxedo': {
      '@apply border-2 font-medium': {},
      'background': 'linear-gradient(135deg, white 0%, white 40%, #1f2937 40%, #1f2937 60%, white 60%, white 100%)',
      'color': '#000000',
      'border-color': '#1f2937',
      
      '&:hover': {
        'background': 'linear-gradient(135deg, #f9fafb 0%, #f9fafb 40%, #111827 40%, #111827 60%, #f9fafb 60%, #f9fafb 100%)',
        'box-shadow': '0 8px 20px rgba(31, 41, 55, 0.4)',
        'transform': 'scale(1.05)'
      },
      
      '&:active': {
        'transform': 'scale(0.98)'
      }
    },

    // 茶トラ猫
    '.btn-nyacat-orange': {
      'background': 'repeating-linear-gradient(45deg, #FF8C00, #FF8C00 8px, #FFA500 8px, #FFA500 16px)',
      'color': '#FFFFFF',
      '&:hover': {
        'box-shadow': '0 8px 20px rgba(255, 140, 0, 0.4)',
      }
    },

    // グレー猫
    '.btn-nyacat-gray': {
      'background': 'repeating-linear-gradient(90deg, #A9A9A9, #A9A9A9 6px, #808080 6px, #808080 12px)',
      'color': '#FFFFFF',
      '&:hover': {
        'box-shadow': '0 8px 20px rgba(169, 169, 169, 0.4)',
      }
    },

    // 三毛猫
    '.btn-nyacat-calico': {
      '@apply border-2 font-medium': {},
      'background': `
        radial-gradient(ellipse at 20% 30%, #ea580c 0%, transparent 50%),
        radial-gradient(ellipse at 70% 60%, #1f2937 0%, transparent 40%),
        radial-gradient(ellipse at 40% 80%, #f97316 0%, transparent 30%),
        radial-gradient(ellipse at 80% 20%, #1f2937 0%, transparent 25%),
        white
      `,
      'color': '#374151',
      'border-color': '#d1d5db',
      
      '&:hover': {
        'background': `
          radial-gradient(ellipse at 20% 30%, #dc2626 0%, transparent 50%),
          radial-gradient(ellipse at 70% 60%, #111827 0%, transparent 40%),
          radial-gradient(ellipse at 40% 80%, #ea580c 0%, transparent 30%),
          radial-gradient(ellipse at 80% 20%, #111827 0%, transparent 25%),
          #f9fafb
        `,
        'box-shadow': '0 8px 20px rgba(234, 88, 12, 0.3)',
        'transform': 'scale(1.05)'
      },
      
      '&:active': {
        'transform': 'scale(0.98)'
      }
    },

    // 黒猫
    '.btn-nyacat-black': {
      'background': 'linear-gradient(135deg, #2F2F2F, #1a1a1a)',
      'color': '#FFFFFF',
      'box-shadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      
      '&:hover': {
        'box-shadow': '0 8px 20px rgba(47, 47, 47, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        'background': 'linear-gradient(135deg, #3a3a3a, #2F2F2F)'
      }
    },

    // 白猫
    '.btn-nyacat-white': {
      'background': 'linear-gradient(135deg, #FFFFFF, #F5F5F5)',
      'color': '#2F2F2F',
      'border': '2px solid #E0E0E0',
      'box-shadow': '0 2px 4px rgba(0, 0, 0, 0.1)',
      
      '&:hover': {
        'box-shadow': '0 8px 20px rgba(255, 255, 255, 0.8), 0 2px 8px rgba(0, 0, 0, 0.15)',
        'background': 'linear-gradient(135deg, #FFFFFF, #FAFAFA)'
      }
    },

    // 尻尾パーツ
    '.btn-nyacat-tail': {
      'position': 'relative',
      
      '&::after': {
        'content': '""',
        'position': 'absolute',
        'right': '-20px',
        'top': '50%',
        'width': '30px',
        'height': '8px',
        'background': 'currentColor',
        'border-radius': '50px 50px 50px 20px',
        'opacity': '0.8',
        'transform': 'translateY(-50%) rotate(-15deg)',
        'transition': 'transform 0.3s ease'
      },
      
      '&:hover::after': {
        'transform': 'translateY(-50%) rotate(15deg)'
      }
    },

    // 肉球パーツ（絵文字版）
    '.btn-nyacat-paws': {
      'position': 'relative',
      
      '&::before': {
        'content': '"🐾"',
        'position': 'absolute',
        'bottom': '-15px',
        'left': '50%',
        'transform': 'translateX(-50%)',
        'font-size': '12px',
        'opacity': '0.6',
        'transition': 'transform 0.1s ease'
      },
      
      '&:active::before': {
        'transform': 'translateX(-50%) scale(1.3)'
      }
    },

    // 肉球パーツ（CSS版）
    '.btn-nyacat-paws-css': {
      'position': 'relative',
      
      '&::before': {
        'content': '""',
        'position': 'absolute',
        'bottom': '-12px',
        'left': '50%',
        'transform': 'translateX(-50%)',
        'width': '20px',
        'height': '16px',
        'background': `
          radial-gradient(circle at 30% 30%, currentColor 3px, transparent 3px),
          radial-gradient(circle at 70% 30%, currentColor 3px, transparent 3px),
          radial-gradient(circle at 50% 70%, currentColor 6px, transparent 6px)
        `,
        'opacity': '0.5',
        'transition': 'transform 0.1s ease'
      },
      
      '&:active::before': {
        'transform': 'translateX(-50%) scale(1.3)'
      }
    },

    // NekoInput ラッパー
    '.nyacat-input-wrapper': {
      'position': 'relative',
      'display': 'inline-block',
      'width': '100%'
    },

    // NekoInput 基本スタイル
    '.nyacat-input-wrapper input, .nyacat-input-wrapper select, .nyacat-input-wrapper textarea': {
      '@apply w-full px-4 py-2 border-2 border-gray-300 rounded-lg': {},
      'transition': 'all 0.3s ease',
      'outline': 'none',
      
      '&:focus': {
        'border-color': '#fb923c',
        'box-shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }
    },

    // 猫耳
    '.nyacat-ears::before, .nyacat-ears::after': {
      'content': '""',
      'position': 'absolute',
      'top': '-12px',
      'width': '0',
      'height': '0',
      'opacity': '0',
      'transition': 'opacity 0.3s ease, transform 0.3s ease',
      'pointer-events': 'none',
      'transform-origin': 'bottom center'
    },

    '.nyacat-ears::before': {
      'left': '25px',
      'border-left': '12px solid transparent',
      'border-right': '6px solid transparent', 
      'border-bottom': '16px solid #fb923c',
      'transform': 'rotate(-10deg)',
      'box-shadow': 'inset -3px -4px 0 #ff8fa3, 0 2px 4px rgba(0, 0, 0, 0.1)'
    },

    '.nyacat-ears::after': {
      'right': '25px',
      'border-left': '6px solid transparent',
      'border-right': '12px solid transparent',
      'border-bottom': '16px solid #fb923c', 
      'transform': 'rotate(10deg)',
      'box-shadow': 'inset 3px -4px 0 #ff8fa3, 0 2px 4px rgba(0, 0, 0, 0.1)'
    },

    // 尻尾
    '.nyacat-tail': {
      'position': 'absolute',
      'right': '-25px',
      'top': '50%',
      'transform': 'translateY(-50%)',
      'width': '40px',
      'height': '12px',
      'background': 'linear-gradient(45deg, #fb923c 0%, #f97316 100%)',
      'border-radius': '20px 8px 8px 4px',
      'opacity': '0',
      'transition': 'opacity 0.3s ease, transform 0.3s ease',
      'pointer-events': 'none',
      'transform-origin': 'left center',
      'clip-path': 'polygon(0% 20%, 100% 0%, 100% 40%, 95% 50%, 100% 60%, 100% 100%, 0% 80%)',
      'box-shadow': '0 2px 4px rgba(0, 0, 0, 0.1), inset 0 -2px 0 rgba(0, 0, 0, 0.1)'
    },

    // フォーカス時の猫パーツ表示
    '.nyacat-input-wrapper input:focus ~ .nyacat-ears::before, .nyacat-input-wrapper input:focus ~ .nyacat-ears::after': {
      'opacity': '1'
    },

    '.nyacat-input-wrapper input:focus ~ .nyacat-ears::before': {
      'animation': 'ear-wiggle 0.8s ease-in-out'
    },

    '.nyacat-input-wrapper input:focus ~ .nyacat-ears::after': {
      'animation': 'ear-wiggle-right 0.8s ease-in-out'
    },

    '.nyacat-input-wrapper input:focus ~ .nyacat-tail': {
      'opacity': '1',
      'animation': 'tail-wag-input 1.2s ease-in-out infinite'
    },

    // selectとtextarea用
    '.nyacat-input-wrapper select:focus ~ .nyacat-ears::before, .nyacat-input-wrapper select:focus ~ .nyacat-ears::after': {
      'opacity': '1'
    },

    '.nyacat-input-wrapper select:focus ~ .nyacat-ears::before': {
      'animation': 'ear-wiggle 0.8s ease-in-out'
    },

    '.nyacat-input-wrapper select:focus ~ .nyacat-ears::after': {
      'animation': 'ear-wiggle-right 0.8s ease-in-out'
    },

    '.nyacat-input-wrapper select:focus ~ .nyacat-tail': {
      'opacity': '1',
      'animation': 'tail-wag-input 1.2s ease-in-out infinite'
    },

    '.nyacat-input-wrapper textarea:focus ~ .nyacat-ears::before, .nyacat-input-wrapper textarea:focus ~ .nyacat-ears::after': {
      'opacity': '1'
    },

    '.nyacat-input-wrapper textarea:focus ~ .nyacat-ears::before': {
      'animation': 'ear-wiggle 0.8s ease-in-out'
    },

    '.nyacat-input-wrapper textarea:focus ~ .nyacat-ears::after': {
      'animation': 'ear-wiggle-right 0.8s ease-in-out'
    },

    '.nyacat-input-wrapper textarea:focus ~ .nyacat-tail': {
      'opacity': '1',
      'animation': 'tail-wag-input 1.2s ease-in-out infinite'
    },

    // NyacatCard コンポーネント - 段ボール箱から猫が顔を出すカード
    '.card-nyacat': {
      '@apply bg-white rounded-lg shadow-md border-2 border-gray-200 p-6 relative overflow-hidden': {},
      '@apply transition-all duration-300 ease-in-out': {},
      'min-height': '200px',
      
      // 段ボール箱のテクスチャ
      'background': `
        linear-gradient(90deg, #f5f5f0 0%, #f0f0eb 50%, #f5f5f0 100%),
        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)
      `,
      
      // 箱の折り目ライン
      '&::before': {
        'content': '""',
        'position': 'absolute',
        'top': '0',
        'left': '50%',
        'width': '1px',
        'height': '100%',
        'background': 'rgba(0,0,0,0.1)',
        'transform': 'translateX(-50%)'
      },
      
      // 猫の顔（初期状態は隠れている）
      '&::after': {
        'content': '"🐱"',
        'position': 'absolute',
        'top': '-30px',
        'left': '50%',
        'transform': 'translateX(-50%)',
        'font-size': '32px',
        'transition': 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'opacity': '0'
      }
    },

    // ホバー時に猫が箱から顔を出す
    '.card-nyacat:hover': {
      '@apply shadow-lg': {},
      'transform': 'translateY(-2px)',
      
      '&::after': {
        'top': '10px',
        'opacity': '1'
      }
    },

    // 猫種バリエーション - 箱の色も変更
    '.card-nyacat-orange': {
      'background': `
        linear-gradient(90deg, #fff5e6 0%, #ffedd5 50%, #fff5e6 100%),
        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,140,0,0.1) 2px, rgba(255,140,0,0.1) 4px)
      `,
      
      '&::after': {
        'content': '"🐱"',
        'color': '#ff8c00'
      }
    },

    '.card-nyacat-tuxedo': {
      'background': `
        linear-gradient(90deg, #fafafa 0%, #f5f5f5 50%, #fafafa 100%),
        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)
      `,
      
      '&::after': {
        'content': '"🐱"',
        'background': 'linear-gradient(45deg, #000 50%, #fff 50%)',
        '-webkit-background-clip': 'text',
        'background-clip': 'text',
        'color': 'transparent'
      }
    },

    '.card-nyacat-gray': {
      'background': `
        linear-gradient(90deg, #f8f9fa 0%, #f1f3f4 50%, #f8f9fa 100%),
        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(169,169,169,0.1) 2px, rgba(169,169,169,0.1) 4px)
      `,
      
      '&::after': {
        'content': '"🐱"',
        'color': '#6b7280'
      }
    },

    '.card-nyacat-calico': {
      'background': `
        radial-gradient(ellipse at 20% 30%, rgba(255,140,0,0.1) 0%, transparent 50%),
        radial-gradient(ellipse at 70% 60%, rgba(0,0,0,0.08) 0%, transparent 40%),
        linear-gradient(90deg, #fff5e6 0%, #ffedd5 50%, #fff5e6 100%),
        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,140,0,0.05) 2px, rgba(255,140,0,0.05) 4px)
      `,
      
      '&::after': {
        'content': '"🐱"',
        'background': 'linear-gradient(45deg, #ff8c00 33%, #000 33%, #000 66%, #ff8c00 66%)',
        '-webkit-background-clip': 'text',
        'background-clip': 'text',
        'color': 'transparent'
      }
    },

    '.card-nyacat-black': {
      'background': `
        linear-gradient(90deg, #f9fafb 0%, #f3f4f6 50%, #f9fafb 100%),
        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)
      `,
      
      '&::after': {
        'content': '"🐱"',
        'color': '#1f2937'
      }
    },

    '.card-nyacat-white': {
      'background': `
        linear-gradient(90deg, #ffffff 0%, #fafafa 50%, #ffffff 100%),
        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px)
      `,
      'border-color': '#e5e7eb',
      
      '&::after': {
        'content': '"🐱"',
        'color': '#ffffff',
        'text-shadow': '1px 1px 2px rgba(0,0,0,0.3)'
      }
    },

    // サイズバリエーション - Small
    '.card-nyacat-sm': {
      '@apply p-4': {},
      'min-height': '120px',
      
      '&::after': {
        'font-size': '24px'
      }
    },

    // サイズバリエーション - Large
    '.card-nyacat-lg': {
      '@apply p-8': {},
      'min-height': '280px',
      
      '&::after': {
        'font-size': '48px'
      }
    },

    // 箱の開き具合バリエーション - 常に少し見えている
    '.card-nyacat-peek::after': {
      'top': '-10px',
      'opacity': '0.6'
    },

    '.card-nyacat-peek:hover::after': {
      'top': '15px',
      'opacity': '1',
      'transform': 'translateX(-50%) scale(1.1)'
    },

    // 複数猫バージョン - 家族
    '.card-nyacat-family::after': {
      'content': '"🐱🐱🐱"',
      'font-size': '20px',
      'letter-spacing': '-8px'
    },

    '.card-nyacat-family:hover::after': {
      'letter-spacing': '2px',
      'font-size': '24px'
    },

    // NyacatInput エラー状態（ラッパー用）
    '.nyacat-input-error input, .nyacat-input-error select, .nyacat-input-error textarea': {
      'border-color': '#f87171 !important'
    },

    '.nyacat-input-error::before': {
      'content': '"😾"',
      'position': 'absolute',
      'right': '10px',
      'top': '50%',
      'transform': 'translateY(-50%)',
      'font-size': '16px',
      'pointer-events': 'none',
      'z-index': '10'
    },

    // NyacatInput 成功状態（ラッパー用）
    '.nyacat-input-success input, .nyacat-input-success select, .nyacat-input-success textarea': {
      'border-color': '#4ade80 !important'
    },

    '.nyacat-input-success::before': {
      'content': '"😸"',
      'position': 'absolute',
      'right': '10px',
      'top': '50%',
      'transform': 'translateY(-50%)',
      'font-size': '16px',
      'pointer-events': 'none',
      'z-index': '10'
    },

    // NyacatLoading コンポーネント
    '.loading-nyacat': {
      '@apply inline-block relative': {},
      'width': '40px',
      'height': '40px',
      
      '&::before': {
        'content': '"🐱"',
        'position': 'absolute',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%, -50%)',
        'font-size': '24px',
        'animation': 'nyacat-spin 2s linear infinite'
      }
    },

    // 毛づくろいローディング
    '.loading-nyacat-groom': {
      '@apply inline-block relative': {},
      'width': '40px',
      'height': '40px',
      
      '&::before': {
        'content': '"🐱"',
        'position': 'absolute',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%, -50%)',
        'font-size': '24px',
        'animation': 'nyacat-groom 3s ease-in-out infinite'
      }
    },


    // サイズバリエーション
    '.loading-nyacat-sm': {
      'width': '24px',
      'height': '24px',
      
      '&::before': {
        'font-size': '16px'
      }
    },

    '.loading-nyacat-lg': {
      'width': '60px',
      'height': '60px',
      
      '&::before': {
        'font-size': '36px'
      }
    },

    '.loading-nyacat-xl': {
      'width': '80px',
      'height': '80px',
      
      '&::before': {
        'font-size': '48px'
      }
    }
  })

  // 猫アニメーション用ユーティリティ
  addUtilities({
    '.animate-tail-wag': {
      'animation': 'tail-wag 1s ease-in-out infinite'
    },
    '.animate-purr': {
      'animation': 'purr 2s ease-in-out infinite'
    }
  })
}, {
  theme: {
    extend: {
      colors: {
        'nyacat': {
          'pink': '#FFB6C1',
          'salmon': '#FFA07A', 
          'cream': '#FFF8DC',
          'brown': '#D2B48C',
          'gray': '#A9A9A9',
          'black': '#2F2F2F',
          'tuxedo': {
            'base': '#FFFFFF',
            'accent': '#2F2F2F'
          },
          'orange': {
            'base': '#FF8C00',
            'stripe': '#FFA500'
          },
          'calico': {
            'white': '#FFFFFF',
            'orange': '#FF8C00',
            'black': '#2F2F2F'
          }
        }
      },
      spacing: {
        'paw': '0.75rem',
        'whisker': '0.25rem'
      },
      borderRadius: {
        'paw': '1rem',
        'ear': '50% 50% 0 0'
      },
      animation: {
        'paw-bounce': 'paw-bounce 0.3s ease-in-out',
        'paw-print': 'paw-print 0.2s ease-out',
        'tail-wag': 'tail-wag 1s ease-in-out infinite',
        'purr': 'purr 2s ease-in-out infinite',
        'ear-wiggle': 'ear-wiggle 0.8s ease-in-out',
        'ear-wiggle-right': 'ear-wiggle-right 0.8s ease-in-out',
        'tail-wag-input': 'tail-wag-input 1.2s ease-in-out infinite',
        'nyacat-spin': 'nyacat-spin 2s linear infinite',
        'nyacat-groom': 'nyacat-groom 3s ease-in-out infinite'
      },
      keyframes: {
        'paw-bounce': {
          '0%, 100%': { transform: 'scale(1.05)' },
          '50%': { transform: 'scale(1.1) rotate(-2deg)' }
        },
        'paw-print': {
          '0%': { transform: 'scale(0.98)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(0.98)' }
        },
        'tail-wag': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(10deg)' },
          '75%': { transform: 'rotate(-10deg)' }
        },
        'purr': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 }
        },
        'ear-wiggle': {
          '0%': { transform: 'rotate(-10deg) scale(1)' },
          '15%': { transform: 'rotate(-15deg) scale(1.05)' },
          '30%': { transform: 'rotate(-5deg) scale(1.02)' },
          '45%': { transform: 'rotate(-12deg) scale(1.08)' },
          '60%': { transform: 'rotate(-8deg) scale(1.02)' },
          '75%': { transform: 'rotate(-10deg) scale(1.05)' },
          '100%': { transform: 'rotate(-10deg) scale(1)' }
        },
        'ear-wiggle-right': {
          '0%': { transform: 'rotate(10deg) scale(1)' },
          '15%': { transform: 'rotate(15deg) scale(1.05)' },
          '30%': { transform: 'rotate(5deg) scale(1.02)' },
          '45%': { transform: 'rotate(12deg) scale(1.08)' },
          '60%': { transform: 'rotate(8deg) scale(1.02)' },
          '75%': { transform: 'rotate(10deg) scale(1.05)' },
          '100%': { transform: 'rotate(10deg) scale(1)' }
        },
        'tail-wag-input': {
          '0%, 100%': { transform: 'translateY(-50%) rotate(-5deg) scaleY(1)' },
          '25%': { transform: 'translateY(-45%) rotate(10deg) scaleY(1.05)' },
          '50%': { transform: 'translateY(-50%) rotate(-8deg) scaleY(1.02)' },
          '75%': { transform: 'translateY(-55%) rotate(12deg) scaleY(1.08)' }
        },
        'nyacat-spin': {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' }
        },
        'nyacat-groom': {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
          '25%': { transform: 'translate(-50%, -60%) scale(0.9) rotate(-10deg)' },
          '50%': { transform: 'translate(-50%, -40%) scale(1.1) rotate(5deg)' },
          '75%': { transform: 'translate(-50%, -50%) scale(0.95) rotate(-5deg)' }
        }
      }
    }
  }
})