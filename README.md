# Fungi Finders

```bash
git repo [https://github.com/marwen-mrabti/fungi-finders]
live demo [https://fungi-finders.pages.dev]
```

## 🚀 Features

- **React 19** - The latest version of React with improved performance and new features
- **Vite 6** - Lightning fast build tooling
- **TypeScript** - Type safety and enhanced developer experience
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible UI components
- **React Compiler** - Experimental React compiler for improved performance
- **Lucide Icons** - Beautiful, consistent icon set
- **Code Quality**
  - ESLint with React-specific rules
  - Prettier for consistent code formatting
  - TypeScript strict mode enabled

## 📦 Prerequisites

- Node.js 18.x or higher
- pnpm 8.x or higher (recommended)

## 🛠️ Getting Started

1. Clone the repository:

```bash
git clone []
cd react-ts-starter
```

2. Install dependencies:

```bash
bun install
```

3. Start the development server:

```bash
bun dev
```

4. Build for production:

```bash
bun run build
bun run preview
```

## 📁 Project Structure

```
react-ts-starter/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
├── .prettierrc
├── eslint.config.js
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## 🔧 Available Scripts

- `bun dev` - Start development server
- `bun run build` - Build for production
- `bun run lint` - Run ESLint
- `bun run preview` - Preview production build

## 🎨 Customization

### Tailwind CSS

Tailwind configuration can be modified in `styles/index.css`

### shadcn/ui Components

Components can be added using the shadcn-ui CLI:

```bash
npx shadcn-ui@latest add [component-name]
```

## 🗺️ Roadmap

- [ ] Add Tanstack Router for type-safe routing
- [ ] Integrate Tanstack Query for data fetching
- [ ] Add unit testing setup
- [ ] Add E2E testing setup

## 📄 License

MIT

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request
