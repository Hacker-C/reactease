# Reactease 

Reactease is a react starter template with Vite, which means "Create react project with ease".(inspired by [vitesse](https://vitesse.netlify.app/))

## Features

- ⚡ Vite, pnpm
- 🔥 React
- ⚓ React Router
- 🎨 Unocss
  - Class Property Mode
  - Attributify Mode
  - Valueless Attributify Mode
- 💪 TypeScript, of course(fully typed)
- 🚀 Using [vite-plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc), faster.
- 🎈 Iconify for icons
  - [Icon sets](https://icon-sets.iconify.design/)
- 😋 ESLint with @antfu/eslint-config, single quotes, no semi, no comma-dangle.
- 📁 File path alias
  - `'~/*'` -> `src/*`


### Three modes of Unocss style

1. Class Property Mode

    ```tsx
    <h2 className='px-2 bg-gray-2 text-2xl text-primary font-bold'>
      Class Property Mode
    </h2>
    ```

2. Attributify Mode

    ```tsx
    <h2 p="x-2" bg="gray-2" text="2xl primary" font="bold">
      Attributify Mode
    </h2>
    ```

3. Valueless Attributify Mode

    ```tsx
    <h2 px-2 bg-gray-2 text-2xl text-primary font-bold>
      Valueless Attributify Mode
    </h2>
    ```

More: [@unocss/preset-attributify](https://www.npmjs.com/package/@unocss/preset-attributify)

## Install

Copy the command below and run it.
```
npx degit hacker-c/reactease my-react-app
```

Then install the deps.
```
cd my-react-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

> **Note**
> Remember to change `terminal.integrated.defaultProfile.windows` to yours in ".vscode/settings.json".

## Usage

### Development

Just run and visit http://localhost:3333
```
pnpm dev
```

### Build

To build the App, run
```
pnpm build
```

### Deploy

You can try [netlify](https://www.netlify.com) or [vercel](https://vercel.com/) or other ways.
