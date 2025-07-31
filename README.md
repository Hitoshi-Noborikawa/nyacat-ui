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
- 🎭 **Web Components**: Modern, reusable components with Shadow DOM
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

Import Nyacat UI in your main CSS file (e.g., `app/assets/stylesheets/application.css` for Rails):

```css
@import "nyacat-ui";
```

Or using PostCSS import:

```css
@import url('nyacat-ui');
```

**That's it!** No configuration needed - Nyacat UI uses TailwindCSS v4's native `@theme` and modern CSS features.

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

### 📦 NyacatModal (Web Components)
Framework-agnostic modal where cats pop out of cardboard boxes.

```html
<!-- Basic usage -->
<nyacat-modal id="myModal">
  <h3>Hello from the cat!</h3>
  <p>This cat is in a cardboard box modal.</p>
  <button onclick="this.closest('nyacat-modal').close()">Close</button>
</nyacat-modal>

<!-- With variants and sizes -->
<nyacat-modal variant="orange" size="lg">
  <h3>Big Orange Cat Modal</h3>
  <p>A large modal with an orange tabby cat.</p>
</nyacat-modal>

<!-- JavaScript control -->
<script>
  // Open modal
  document.getElementById('myModal').open();
  
  // Close modal
  document.getElementById('myModal').close();
  
  // Event listeners
  document.getElementById('myModal').addEventListener('nyacat-modal-open', (e) => {
    console.log('Modal opened!', e.detail);
  });
</script>
```

#### NyacatModal Attributes

- `variant`: `orange`, `tuxedo`, `gray`, `black`, `white` (default: none)
- `size`: `sm`, `lg` (default: medium)
- `open`: Present to show modal, absent to hide

#### NyacatModal Methods

- `.open()`: Show the modal with cat animation
- `.close()`: Hide the modal with cat hiding animation

#### NyacatModal Events

- `nyacat-modal-open`: Fired when modal opens
- `nyacat-modal-close`: Fired when modal closes

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

Perfect for Rails 8 applications! Add to your `app/assets/stylesheets/application.css`:

```css
@import "tailwindcss";
@import "nyacat-ui";
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
<%# app/views/layouts/application.html.erb %>
<%= javascript_include_tag "https://cdn.jsdelivr.net/npm/nyacat-ui@latest/dist/web-components.js", type: "module" %>

<%# In your views %>
<button class="btn-nyacat" onclick="document.getElementById('railsModal').open()">
  Open Cat Modal
</button>

<nyacat-modal id="railsModal" variant="calico">
  <h3>Rails + Nyacat UI</h3>
  <p>Cats work purr-fectly with Rails!</p>
  <button onclick="this.closest('nyacat-modal').close()">Close</button>
</nyacat-modal>
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

```bash
# Clone the repository
git clone https://github.com/Hitoshi-Noborikawa/nyacat-ui.git
cd nyacat-ui

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.
