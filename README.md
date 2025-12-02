<div align="center">

# ⚛️ React Web Component Template

### A modern, lightweight template for building React components as Web Components

[![React](https://img.shields.io/badge/React-19.2-61dafb?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

</div>

---

## ✨ Features

- ⚡ **Lightning Fast** — Powered by Vite for instant HMR and blazing build times
- 🎨 **Modern Styling** — TailwindCSS v4 with shadcn/ui components
- 🧩 **Web Components** — Build React components that work anywhere with `r2wc`
- 🔄 **State Management** — Jotai for atomic, flexible state management
- 🎭 **Animations** — Framer Motion for smooth, professional animations
- 🎯 **Type Safe** — Full TypeScript support with strict type checking
- 🎨 **Icons** — Beautiful Lucide icons pre-configured
- 🛠️ **Developer Experience** — Biome for lightning-fast linting and formatting
- 🤖 **AI Ready** — Includes AI SDK React integration

---

## 📦 Tech Stack

| Technology | Purpose |
|------------|---------|
| [React 19](https://react.dev/) | UI library with latest features |
| [Vite](https://vitejs.dev/) | Build tool and dev server |
| [TypeScript](https://www.typescriptlang.org/) | Type safety and better DX |
| [TailwindCSS v4](https://tailwindcss.com/) | Utility-first CSS framework |
| [shadcn/ui](https://ui.shadcn.com/) | Beautifully designed components |
| [Jotai](https://jotai.org/) | Primitive and flexible state management |
| [Lucide React](https://lucide.dev/) | Beautiful & consistent icons |
| [Framer Motion](https://www.framer.com/motion/) | Production-ready animations |
| [Biome](https://biomejs.dev/) | Fast linter and formatter |
| [r2wc](https://github.com/bitovi/react-to-web-component) | React to Web Component converter |

---

## 🚀 Getting Started

### Prerequisites

This project uses [mise](https://mise.jdx.dev/) for runtime management. The required tools are defined in `mise.toml`:

- **Bun** (latest) — Fast JavaScript runtime & package manager

### Quick Start

1. **Install mise** (if you haven't already):
   ```bash
   # Windows (PowerShell)
   irm https://mise.jdx.dev/install.ps1 | iex
   
   # Or use other installation methods from https://mise.jdx.dev/getting-started.html
   ```

2. **Clone and setup**:
   ```bash
   # Clone the repository
   git clone <your-repo-url>
   cd web-component
   
   # Install runtime (Bun)
   mise install
   
   # Install dependencies
   bun install
   ```

3. **Start development server**:
   ```bash
   bun run dev
   ```
   
   Open [http://localhost:5173](http://localhost:5173) to see your app! 🎉

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `bun run dev` | Start development server with HMR |
| `bun run build` | Build for production |
| `bun run preview` | Preview production build locally |
| `bun run lint` | Lint code with Biome |
| `bun run format` | Format code with Biome |
| `bun run check` | Run both linting and formatting |
| `bun run ci` | CI-friendly check and format |

---

## 🏗️ Project Structure

```
web-component/
├── src/
│   ├── components/      # React components
│   │   └── ui/         # shadcn/ui components
│   ├── lib/            # Utilities and helpers
│   ├── assets/         # Static assets
│   ├── App.tsx         # Main App component
│   ├── main.tsx        # Entry point (Web Component registration)
│   └── index.css       # Global styles & Tailwind imports
├── mise.toml           # Runtime version management
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
├── biome.json          # Biome linter/formatter config
└── package.json        # Dependencies and scripts
```

---

## 🎨 Adding shadcn/ui Components

This template is pre-configured with shadcn/ui. Add new components using:

```bash
# Example: Add a Card component
bunx shadcn@latest add card

# Add multiple components
bunx shadcn@latest add button card dialog
```

All components will be added to `src/components/ui/` with full TypeScript support.

---

## 🧩 Using as Web Components

Components are automatically converted to Web Components using `r2wc`:

```typescript
// src/main.tsx
import r2wc from '@r2wc/react-to-web-component';
import App from './App';

const WebApp = r2wc(App, {
  props: {
    title: 'string',
    // Define your props here
  },
});

customElements.define('my-web-component', WebApp);
```

Then use in any HTML:

```html
<my-web-component title="Hello World"></my-web-component>
```

---

## 🎯 State Management with Jotai

Jotai provides a minimal and flexible state management solution:

```typescript
import { atom, useAtom } from 'jotai';

// Create an atom
const countAtom = atom(0);

// Use in components
function Counter() {
  const [count, setCount] = useAtom(countAtom);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```

---

## 🔧 Configuration

### Environment Management

This project uses **mise** for managing tool versions. See `mise.toml`:

```toml
[tools]
bun = "latest"
```

To use specific versions:
```bash
mise use bun@1.0.0
```

### TypeScript

TypeScript is configured with strict mode for maximum type safety. See `tsconfig.json` for details.

### Biome

Biome is configured to provide fast, opinionated linting and formatting. It's much faster than ESLint + Prettier.

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

**Copyright © 2025 Jhoan Vergara Arocutipa**

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

## 🌟 Show your support

Give a ⭐️ if this project helped you!

---

<div align="center">

**Built with ❤️ using React, Vite, and modern web technologies**

[Report Bug](../../issues) · [Request Feature](../../issues)

</div>
