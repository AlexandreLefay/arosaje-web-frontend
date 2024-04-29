# React Template

Project create from quentinvdr's template for React school projects.

## Installation and Start

- Clone the project
- Navigate to the project directory
- Add .env file in the root directory (see .env.example)
- Run these commands

```bash
# 📦 Install dependencies
npm install
pnpm install
yarn install

# ▶️ Run development server
npm run dev
pnpm run dev
yarn dev
```

## Project Architecture

This project follows a specific structure for organization and ease of navigation:

- 📁 `public`: This directory contains all static files like favicon, manifest, images, etc.
- 📁 `src`: This is the main directory that contains the project source code. It includes:
  - 📁 `api`: This directory contains all the requests (fetch).
  - 📁 `components`: This directory contains all the React components (business logic). Each component has its own directory with the following structure:
    - 📄 `{ComponentName}.jsx`: The main component file.
    - 📄 `{ComponentName}.module.scss`: The component's style file, scoped to the component.
  - 📁 `global`: This directory contains components used in multiple pages, such as headers & footers. Each global component has its own directory with the following structure:
    - 📄 `{ComponentName}.jsx`: The main component file.
    - 📄 `{ComponentName}.module.scss`: The component's style file, scoped to the component.
  - 📁 `pages`: This directory contains React pages. The business logic is in the components.
  - 📁 `routes`: This directory contains the routes (react-router).
  - 📁 `stores`: This directory contains the store keys (react-query).
  - 📁 `styles`: This directory contains global styles (variables, theme, etc.).
  - 📁 `translations`: This directory contains translations (i18n).
  - 📁 `utils`: This directory contains utilities (reusable functions, etc.).
  - 📄 `main.jsx`: This is the main project file and the entry point of the project.
- 📄 `package.json`: This is the project configuration file.

## Librairies

### Technology stack :

- Library/Framework JS : [React](https://reactjs.org/)
- Langage : [JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript)
- Package Manager : [pnpm](https://pnpm.io/)
- Builder : [Vite](https://vitejs.dev/)
- Linter/Code formatter : [EsLint](https://eslint.org/) / [Prettier](https://prettier.io/)

#### Librairie Majeur :

Internalization :

- [i18next](https://www.i18next.com/)
- [React-i18next](https://react.i18next.com/)

Data management :

- [React-Query](https://tanstack.com/query/v4/docs/react/overview) → Async data fetching and caching (Cache, Promise state management, etc)
- [Axios](https://axios-http.com/fr/docs/intro) → HTTP client based on Promise to communicate with the Back-end part

Routing :

- [React-router-dom](https://reactrouter.com/web/guides/quick-start) → Library used to manage routing and navigation between the pages of the application

CSS :

- [Material UI](https://mui.com/) → UI Library components
- [Sass](https://sass-lang.com/) → CSS preprocessor that adds features to CSS. It allows, among other things, to better structure and simplify the code, to avoid repetitions, etc

Icons :

- [Material Icons](https://mui.com/components/material-icons/) → Ready-to-use icon library
