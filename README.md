# 🐱 Nyacat UI v1.0

A delightful cat-themed UI component library built **exclusively for TailwindCSS v4**. Features adorable cat animations, cardboard box modals, and pawsome interactions that will make your users purr with joy!

✨ **Native TailwindCSS v4 support** - Built using `@theme`, `color-mix()`, and modern CSS features!

[![npm version](https://badge.fury.io/js/nyacat-ui.svg)](https://badge.fury.io/js/nyacat-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TailwindCSS v4](https://img.shields.io/badge/TailwindCSS-v4.0+-blue.svg)](https://tailwindcss.com/)

## ✨ Features

- 🐾 **Cat-themed Components**: Buttons, cards, inputs, loading animations, and modals
- 📦 **Cardboard Box Modals**: Cats peek out from boxes with delightful animations
- 🎨 **Multiple Cat Breeds**: Orange tabby, tuxedo, gray, calico, black, and white cats
- ⚡ **Framework Agnostic**: Works with React, Vue, Angular, Rails 8, and vanilla JavaScript
- 🚫 **No JavaScript Required**: Most components work with CSS only (buttons, cards, inputs, loading)
- 🎭 **Web Components**: Interactive modals with modern Web Components (minimal JS needed)
- 🎯 **TailwindCSS v4 Native**: Built with `@theme`, CSS variables, and `color-mix()`
- 📱 **Responsive**: Mobile-friendly designs optimized for modern browsers
- 🌟 **Modern CSS**: Uses cutting-edge CSS features like `color-mix()` and CSS custom properties
- 💫 **Performance**: Lightweight and optimized for TailwindCSS v4's new architecture
- 🚀 **Rails 8 Ready**: Perfect for Rails 8 applications with TailwindCSS v4

## 🚀 Quick Start

### Installation

```bash
npm install nyacat-ui
```

### TailwindCSS v4 Setup

**Option 1: CSS-only import (Recommended for stability)**

Import the CSS directly in your main CSS file:

```css
@import "tailwindcss";
@import "nyacat-ui/src/v4-native.css";
```

**Option 2: Plugin integration**

For advanced customization, use the v4-compatible plugin:

```javascript
// tailwind.config.js
import nyacatV4Plugin from 'nyacat-ui/src/v4-plugin.js'

export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  plugins: [nyacatV4Plugin],
}
```

Then import in your CSS:

```css
@import "tailwindcss";
```

> **Note**: The v4 plugin uses direct CSS property values instead of `@apply` for maximum compatibility with TailwindCSS v4's architecture.

### Web Components (Recommended)

For framework-agnostic usage, include the Web Components:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/nyacat-ui@latest/dist/web-components.js"></script>
```

## 📖 Components

### 🐾 NyacatButton
Cat-themed buttons with paw prints, tails, and breed variations.

```html
<!-- Basic button -->
<button class="btn-nyacat">Click me!</button>

<!-- Cat breeds -->
<button class="btn-nyacat btn-nyacat-orange">Orange Tabby</button>
<button class="btn-nyacat btn-nyacat-tuxedo">Tuxedo Cat</button>
<button class="btn-nyacat btn-nyacat-gray">Gray Cat</button>

<!-- With cat parts -->
<button class="btn-nyacat btn-nyacat-tail">Button with tail</button>
<button class="btn-nyacat btn-nyacat-paws">Button with paws</button>

<!-- Animations -->
<button class="btn-nyacat animate-tail-wag">Wagging tail</button>
<button class="btn-nyacat animate-purr">Purring button</button>
```

### 📦 NyacatCard
Cardboard boxes where cats peek out on hover.

```html
<!-- Basic card -->
<div class="card-nyacat">
  <h3>Cat in a Box</h3>
  <p>Hover to see the cat!</p>
</div>

<!-- Cat breeds -->
<div class="card-nyacat card-nyacat-orange">Orange cat card</div>
<div class="card-nyacat card-nyacat-calico">Calico cat card</div>

<!-- Sizes -->
<div class="card-nyacat card-nyacat-sm">Small box</div>
<div class="card-nyacat card-nyacat-lg">Large box</div>

<!-- Special variants -->
<div class="card-nyacat card-nyacat-peek">Always peeking</div>
<div class="card-nyacat card-nyacat-family">Cat family</div>
```

### 📝 NyacatInput
Input fields with cat ears and tails that appear on focus.

```html
<div class="nyacat-input-wrapper">
  <input type="text" placeholder="Focus to see cat ears!">
  <div class="nyacat-ears"></div>
  <div class="nyacat-tail"></div>
</div>

<!-- With states -->
<div class="nyacat-input-wrapper nyacat-input-error">
  <input type="email" placeholder="Invalid email">
  <div class="nyacat-ears"></div>
  <div class="nyacat-tail"></div>
</div>

<div class="nyacat-input-wrapper nyacat-input-success">
  <input type="email" placeholder="Valid email" value="cat@example.com">
  <div class="nyacat-ears"></div>
  <div class="nyacat-tail"></div>
</div>
```

### ⏳ NyacatLoading
Animated loading indicators with spinning and grooming cats.

```html
<!-- Spinning cat -->
<div class="loading-nyacat"></div>

<!-- Grooming cat -->
<div class="loading-nyacat-groom"></div>

<!-- Sizes -->
<div class="loading-nyacat loading-nyacat-sm"></div>
<div class="loading-nyacat loading-nyacat-lg"></div>
<div class="loading-nyacat loading-nyacat-xl"></div>

<!-- In buttons -->
<button class="btn-nyacat" disabled>
  <div class="loading-nyacat-sm"></div>
  <span>Loading...</span>
</button>
```

### 📦 NyacatModal - インタラクティブな段ボール箱モーダル

#### 💡 JavaScript が必要です
モーダルは本質的にインタラクティブなコンポーネントのため、少量のJavaScriptが必要です。

#### Web Components版（推奨）

**利点:**
- **フレームワーク非依存**: React、Vue、Rails、Angular等で同じコードが動作
- **カプセル化**: Shadow DOMでスタイルが隔離され、競合しない  
- **宣言的**: HTML属性でオプションを指定
- **標準技術**: ブラウザネイティブなWeb標準

```html
<!-- ボタンで開く -->
<button onclick="document.getElementById('catModal').open()">
  モーダルを開く
</button>

<!-- モーダル定義 -->
<nyacat-modal id="catModal" variant="orange" size="lg">
  <h3>猫のモーダル</h3>
  <p>段ボール箱から猫が飛び出します！</p>
  <button onclick="this.closest('nyacat-modal').close()">閉じる</button>
</nyacat-modal>

<!-- JavaScript制御 -->
<script>
  // プログラムで開く/閉じる
  document.getElementById('catModal').open();
  document.getElementById('catModal').close();
  
  // イベントリスナー
  document.getElementById('catModal').addEventListener('nyacat-modal-open', (e) => {
    console.log('Modal opened!', e.detail);
  });
</script>
```

#### Rails + Stimulus版

```javascript
// app/javascript/controllers/nyacat_modal_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["modal"]

  open() {
    this.modalTarget.open()
  }

  close() {
    this.modalTarget.close()
  }
}
```

```erb
<div data-controller="nyacat-modal">
  <button data-action="click->nyacat-modal#open" class="btn-nyacat">
    モーダルを開く
  </button>
  
  <nyacat-modal data-nyacat-modal-target="modal" variant="orange">
    <h3>Rails + Stimulus</h3>
    <p>StimulusでnyacatモーダルをRailsらしく制御！</p>
    <button data-action="click->nyacat-modal#close" class="btn-nyacat">
      閉じる
    </button>
  </nyacat-modal>
</div>
```

#### React版

```jsx
import { useRef } from 'react';

function App() {
  const modalRef = useRef(null);

  const openModal = () => modalRef.current?.open();
  const closeModal = () => modalRef.current?.close();

  return (
    <>
      <button className="btn-nyacat" onClick={openModal}>
        Open Cat Modal
      </button>
      
      <nyacat-modal ref={modalRef} variant="tuxedo" size="lg">
        <h3>React + Nyacat UI</h3>
        <p>ReactでもWeb Componentsは使えます！</p>
        <button className="btn-nyacat" onClick={closeModal}>
          Close
        </button>
      </nyacat-modal>
    </>
  );
}
```

#### Vue版

```vue
<template>
  <div>
    <button class="btn-nyacat" @click="openModal">Open Cat Modal</button>
    
    <nyacat-modal ref="catModal" variant="gray" size="sm">
      <h3>Vue + Nyacat UI</h3>
      <p>VueでもWeb Componentsが使えます！</p>
      <button class="btn-nyacat" @click="closeModal">Close</button>
    </nyacat-modal>
  </div>
</template>

<script>
export default {
  methods: {
    openModal() {
      this.$refs.catModal.open();
    },
    closeModal() {
      this.$refs.catModal.close();
    }
  }
}
</script>
```

#### 属性（Attributes）

- `variant`: `orange`, `tuxedo`, `gray`, `black`, `white` (default: none)
- `size`: `sm`, `lg` (default: medium)  
- `open`: 初期状態で開いている場合に指定

#### メソッド（Methods）

- `.open()`: 猫アニメーション付きでモーダルを表示
- `.close()`: 猫が隠れるアニメーション付きでモーダルを閉じる

#### イベント（Events）

- `nyacat-modal-open`: モーダルが開いた時に発火
- `nyacat-modal-close`: モーダルが閉じた時に発火

## 🎨 Cat Breeds

Nyacat UI supports multiple cat breed variations:

- **Orange Tabby** (`-orange`): Warm orange colors
- **Tuxedo** (`-tuxedo`): Black and white formal cats
- **Gray** (`-gray`): Sophisticated gray cats
- **Calico** (`-calico`): Tri-color cats with orange, black, and white
- **Black** (`-black`): Sleek black cats
- **White** (`-white`): Pure white cats with shadows for visibility

## 🌟 Framework Integration

### Rails 8 + TailwindCSS v4

Perfect for Rails 8 applications! 

**Method 1: CSS-only (Recommended)**

Add to your `app/assets/stylesheets/application.css`:

```css
@import "tailwindcss";
@import "nyacat-ui/src/v4-native.css";
```

**Method 2: With plugin**

Update your `config/tailwind.config.js`:

```javascript
import nyacatV4Plugin from 'nyacat-ui/src/v4-plugin.js'

export default {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  plugins: [nyacatV4Plugin],
}
```

And ensure your PostCSS config uses the v4 plugin:

```javascript
// postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

Then use in your ERB templates:

```erb
<button class="btn-nyacat btn-nyacat-orange">
  Purr-fect Rails Button! 🐱
</button>

<div class="nyacat-input-wrapper">
  <%= text_field_tag :search, nil, placeholder: "Focus for cat ears!" %>
  <div class="nyacat-ears"></div>
  <div class="nyacat-tail"></div>
</div>
```

### React
```jsx
// Import CSS: @import "nyacat-ui";

function App() {
  const handleOpenModal = () => {
    document.getElementById('catModal').open();
  };

  return (
    <div>
      <button className="btn-nyacat" onClick={handleOpenModal}>
        Open Cat Modal
      </button>
      
      <nyacat-modal id="catModal" variant="orange">
        <h3>React + Nyacat UI</h3>
        <p>Cats work great with React!</p>
      </nyacat-modal>
    </div>
  );
}
```

### Vue.js
```vue
<template>
  <div>
    <button class="btn-nyacat" @click="openModal">Open Cat Modal</button>
    
    <nyacat-modal ref="catModal" variant="tuxedo">
      <h3>Vue + Nyacat UI</h3>
      <p>Cats love Vue too!</p>
    </nyacat-modal>
  </div>
</template>

<script>
import 'nyacat-ui/dist/web-components.js';

export default {
  methods: {
    openModal() {
      this.$refs.catModal.open();
    }
  }
}
</script>
```

### Rails
```erb
<%# 基本のコンポーネント（JavaScript不要） %>
<button class="btn-nyacat btn-nyacat-orange">
  Purr-fect Rails Button! 🐱
</button>

<div class="nyacat-input-wrapper">
  <%= text_field_tag :search, nil, placeholder: "Focus for cat ears!" %>
  <div class="nyacat-ears"></div>
  <div class="nyacat-tail"></div>
</div>

<div class="card-nyacat card-nyacat-tuxedo">
  <h3>Rails Card</h3>
  <p>Hover to see the cat!</p>
</div>

<%# モーダル使用時は Web Components が必要 %>
<%= javascript_include_tag "https://cdn.jsdelivr.net/npm/nyacat-ui@latest/dist/web-components.js", type: "module" %>
```

## 🎭 Custom Styling

All components support TailwindCSS classes and can be customized:

```html
<!-- Custom styled button -->
<button class="btn-nyacat bg-purple-500 hover:bg-purple-600 text-white">
  Purple Cat Button
</button>

<!-- Custom card -->
<div class="card-nyacat border-4 border-pink-300 shadow-2xl">
  <h3 class="text-pink-600">Custom Cat Card</h3>
</div>
```

## 🎨 Color Palette

Nyacat UI includes a custom color palette:

```css
/* Available TailwindCSS colors */
.text-nyacat-pink     /* #FFB6C1 */
.text-nyacat-salmon   /* #FFA07A */
.text-nyacat-cream    /* #FFF8DC */
.text-nyacat-brown    /* #D2B48C */
.text-nyacat-gray     /* #A9A9A9 */
.text-nyacat-black    /* #2F2F2F */

.bg-nyacat-pink       /* Backgrounds */
.border-nyacat-cream  /* Borders */
.rounded-paw        /* Cat paw border radius */
```

## 🛠️ Development

### Local Development

```bash
# Clone the repository
git clone https://github.com/Hitoshi-Noborikawa/nyacat-ui.git
cd nyacat-ui

# Install dependencies
npm install

# Start development server with demo
npm run dev
# This will open http://localhost:3000 with interactive demos

# Build for production
npm run build
```

### TailwindCSS v4 Compatibility

This library has been optimized for TailwindCSS v4:

- ✅ **No `@apply` in plugins** - Uses direct CSS property values for maximum compatibility
- ✅ **Native v4 features** - Leverages `@theme`, `color-mix()`, and CSS custom properties
- ✅ **PostCSS v4 support** - Compatible with `@tailwindcss/postcss`
- ✅ **Rails 8 ready** - Works seamlessly with Rails 8's esbuild + TailwindCSS v4 setup

### File Structure

- `src/index.js` - Main plugin (v3 compatible)
- `src/v4-plugin.js` - TailwindCSS v4 optimized plugin
- `src/v4-native.css` - Pure CSS version (no plugin required)
- `src/index.css` - Legacy CSS with `@apply` (v3 only)
- `dist/web-components.js` - Framework-agnostic Web Components

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.
