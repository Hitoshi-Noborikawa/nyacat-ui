# 🐱 Neko UI

猫をテーマにした可愛いTailwindCSSコンポーネントライブラリです。

## ✨ 特徴

- 🐾 猫をテーマにした可愛いデザイン
- 🎨 猫らしいカラーパレット
- ⚡ TailwindCSSプラグインとして簡単に導入
- 🎭 猫アニメーション効果
- 📱 レスポンシブ対応

## 📦 インストール

```bash
npm install neko-ui
```

## 🚀 使い方

### 1. TailwindCSS設定ファイルにプラグインを追加

```javascript
// tailwind.config.js
import nekoUI from 'neko-ui'

export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  plugins: [nekoUI],
}
```

### 2. コンポーネントを使用

```html
<!-- NekoButton -->
<button class="btn-neko">クリックしてね 🐾</button>

<!-- アニメーション付き -->
<button class="btn-neko animate-tail-wag">しっぽフリフリ</button>
<button class="btn-neko animate-purr">ゴロゴロ</button>
```

## 🎨 カラーパレット

| 色名 | クラス | カラーコード |
|------|--------|-------------|
| ピンク | `bg-neko-pink` | #FFB6C1 |
| サーモン | `bg-neko-salmon` | #FFA07A |
| クリーム | `bg-neko-cream` | #FFF8DC |
| ブラウン | `bg-neko-brown` | #D2B48C |
| グレー | `bg-neko-gray` | #A9A9A9 |
| ブラック | `bg-neko-black` | #2F2F2F |

## 🧩 コンポーネント

### NekoButton

猫らしい可愛いボタンコンポーネント

```html
<button class="btn-neko">基本のボタン</button>
```

**特徴:**
- ホバー時に猫の手エフェクト
- クリック時に肉球アニメーション
- グラデーション背景

## 🎭 アニメーション

| クラス名 | 効果 |
|----------|------|
| `animate-tail-wag` | しっぽをフリフリ |
| `animate-purr` | ゴロゴロ（透明度変化） |

## 🎯 カスタムユーティリティ

### 角丸

- `rounded-paw` - 肉球風の角丸 (1rem)
- `rounded-ear` - 猫の耳風の角丸

### 間隔

- `p-paw` / `m-paw` - 肉球サイズの余白 (0.75rem)
- `p-whisker` / `m-whisker` - ひげサイズの余白 (0.25rem)

## 🛠️ 開発

```bash
# 依存関係をインストール
npm install

# デモサーバーを起動
npm run dev
```

## 📄 ライセンス

MIT

## 🐾 コントリビューション

プルリクエストや Issues をお待ちしています！猫好きな開発者の皆さん、一緒に可愛いUIライブラリを作りましょう。

---

Made with 🐱 for cat lovers