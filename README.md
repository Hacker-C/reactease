# Reactease 

Reactease is a react starter template with Vite, which means "Create react project with ease".(inspired by [vitesse](https://vitesse.netlify.app/))

## Features

- ⚡ Vite, pnpm
- 🔥 React
- ⚓ React Router
- 🎨 [Unocss](https://unocss.dev)
- 🏠 [Valtio](https://valtio.pmnd.rs/), A user-friendly and concise state management using proxy
- 🎈 Iconify for icons（[Icon sets](https://icon-sets.iconify.design))
- 💪 TypeScript, of course
- 🚀 Using [vite-plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc), faster.
- 😋 ESLint with [@antfu/eslint-config]()
- 📁 File path alias (`'~/*'` -> `src/*`)

### About unocss.config.ts

You can use many atomic css features by using the [UnoCSS Packages](https://github.com/unocss/unocss/tree/main/packages)

1. presetAttributify
    ```html
    <h2
      m="x-2 y-1"
      bg="gray-400 hover:gray-200"
      text="2xl primary"
      font="base bold"
    >
      Attributify Mode
    </h2>
    ```

2. presetWind
    Integrated some features of TaildwindCSS and WindiCSS.
    ```html
    <!-- lt-sm means screen less then 640px -->
    <div className='lt-sm:bg-red-200 at-sm:gray-400 sm:bg-blue-200'></div>
    ```

3. transformerVariantGroup
    ```html
    <div class="hover:(bg-gray-400 font-medium) font-(light mono)"/>
    ```

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
