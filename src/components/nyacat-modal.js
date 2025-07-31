class NyacatModal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.isOpen = false;
    this.animationInProgress = false;
  }

  static get observedAttributes() {
    return ['open', 'variant', 'size'];
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'open') {
      if (newValue !== null && !this.isOpen) {
        this.show();
      } else if (newValue === null && this.isOpen) {
        this.hide();
      }
    } else if (name === 'variant' || name === 'size') {
      this.render();
    }
  }

  get variant() {
    return this.getAttribute('variant') || 'default';
  }

  get size() {
    return this.getAttribute('size') || 'default';
  }

  render() {
    const variant = this.variant;
    const size = this.size;
    
    // 猫の色を決定
    const catColors = {
      'orange': '#ff8c00',
      'tuxedo': 'linear-gradient(45deg, #000 50%, #fff 50%)',
      'gray': '#6b7280',
      'black': '#1f2937',
      'white': '#ffffff',
      'default': '#333'
    };

    const catColor = catColors[variant] || catColors.default;
    const isGradient = catColor.includes('gradient');
    
    // サイズ設定
    const sizes = {
      'sm': { width: '300px', minHeight: '200px', padding: '1.5rem', catSize: '32px' },
      'lg': { width: '700px', minHeight: '400px', padding: '3rem', catSize: '64px' },
      'default': { width: '500px', minHeight: '300px', padding: '2rem', catSize: '48px' }
    };

    const sizeConfig = sizes[size] || sizes.default;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: none;
          position: fixed;
          inset: 0;
          z-index: 1000;
        }

        :host([open]) {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          cursor: pointer;
        }

        .overlay.show {
          opacity: 1;
        }

        .box {
          position: relative;
          max-width: 90vw;
          width: ${sizeConfig.width};
          min-height: ${sizeConfig.minHeight};
          margin: 2rem;
          cursor: default;
          transform: scale(0.8) rotate(-2deg);
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          
          /* 段ボール箱のデザイン */
          background: 
            linear-gradient(90deg, #f5f5f0 0%, #f0f0eb 50%, #f5f5f0 100%), 
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px);
          border: 2px solid #d4d4aa;
          border-radius: 8px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          padding: ${sizeConfig.padding};
        }

        .box::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          width: 1px;
          height: 100%;
          background: rgba(0,0,0,0.1);
          transform: translateX(-50%);
        }

        .box.show {
          transform: scale(1) rotate(0deg);
          opacity: 1;
        }

        .cat {
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translate(-50%, 20px) scale(0.8);
          font-size: ${sizeConfig.catSize};
          opacity: 0;
          z-index: 10;
          pointer-events: none;
          user-select: none;
          transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          
          ${isGradient ? `
            background: ${catColor};
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          ` : `
            color: ${catColor};
          `}
          
          ${variant === 'white' ? 'text-shadow: 2px 2px 4px rgba(0,0,0,0.5);' : ''}
        }

        .cat.show {
          transform: translate(-50%, -5px) scale(1);
          opacity: 1;
        }

        .cat.blink {
          animation: blink 3s infinite;
        }

        @keyframes blink {
          0%, 90%, 100% { opacity: 1; }
          95% { opacity: 0.3; }
        }

        .content {
          position: relative;
          z-index: 5;
          margin-top: 1rem;
        }

        /* ホスト要素が閉じられるときのアニメーション */
        :host(.closing) .overlay {
          opacity: 0;
        }

        :host(.closing) .box {
          transform: scale(0.8) rotate(2deg);
          opacity: 0;
        }

        :host(.closing) .cat {
          transform: translate(-50%, 20px) scale(0.8);
          opacity: 0;
          transition: all 0.4s ease-in;
        }
      </style>

      <div class="overlay" part="overlay"></div>
      <div class="box" part="box">
        <div class="cat" part="cat">🐱</div>
        <div class="content" part="content">
          <slot></slot>
        </div>
      </div>
    `;
  }

  setupEventListeners() {
    const overlay = this.shadowRoot.querySelector('.overlay');
    
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        this.close();
      }
    });

    // ESCキーで閉じる
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }

  show() {
    if (this.animationInProgress || this.isOpen) return;
    
    this.animationInProgress = true;
    this.isOpen = true;
    
    const overlay = this.shadowRoot.querySelector('.overlay');
    const box = this.shadowRoot.querySelector('.box');
    const cat = this.shadowRoot.querySelector('.cat');
    
    // モーダルを表示
    this.setAttribute('open', '');
    
    // アニメーション開始
    requestAnimationFrame(() => {
      overlay.classList.add('show');
      
      setTimeout(() => {
        box.classList.add('show');
      }, 100);
      
      setTimeout(() => {
        cat.classList.add('show');
        
        setTimeout(() => {
          cat.classList.add('blink');
          this.animationInProgress = false;
        }, 600);
      }, 300);
    });

    // カスタムイベントを発火
    this.dispatchEvent(new CustomEvent('nyacat-modal-open', {
      bubbles: true,
      detail: { variant: this.variant, size: this.size }
    }));
  }

  hide() {
    if (this.animationInProgress || !this.isOpen) return;
    
    this.animationInProgress = true;
    this.isOpen = false;
    
    const overlay = this.shadowRoot.querySelector('.overlay');
    const box = this.shadowRoot.querySelector('.box');
    const cat = this.shadowRoot.querySelector('.cat');
    
    // 閉じるクラスを追加
    this.classList.add('closing');
    
    // 猫の瞬きを停止
    cat.classList.remove('blink');
    
    // 猫を隠す
    cat.classList.remove('show');
    
    setTimeout(() => {
      box.classList.remove('show');
    }, 200);
    
    setTimeout(() => {
      overlay.classList.remove('show');
    }, 400);
    
    setTimeout(() => {
      this.removeAttribute('open');
      this.classList.remove('closing');
      box.classList.remove('show');
      cat.classList.remove('show', 'blink');
      this.animationInProgress = false;
    }, 700);

    // カスタムイベントを発火
    this.dispatchEvent(new CustomEvent('nyacat-modal-close', {
      bubbles: true,
      detail: { variant: this.variant, size: this.size }
    }));
  }

  open() {
    this.show();
  }

  close() {
    this.hide();
  }
}

// Web Componentを登録
customElements.define('nyacat-modal', NyacatModal);