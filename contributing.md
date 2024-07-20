# Developer Documentation

## Technology Stack

- [Typescript v5](https://www.typescriptlang.org/)
- [NodeJS v20 LTS](https://nodejs.org/)
- [React v18](https://react.dev/) 
- [Webpack v5.92](https://webpack.js.org/)
- [eslint v8](https://eslint.org/)
- [TailwindCSS v3](https://tailwindcss.com/)
- [Electron v30](https://www.electronjs.org/) + [Electron Builder v24](https://www.electron.build/)
- SVG Open Source Icons: [Tabler Icons](https://tablericons.com/)
- UI Library: [Joy UI v5](https://mui.com/joy-ui/getting-started/)
- IDE: [Visual Studio Code](https://code.visualstudio.com/) with extensions:
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
  - [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
- Security: 
  - Encryption: [Web Crypto API - AES-GCM](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/encrypt#aes-gcm)
  - Top 1 million most used password list: [danielmiessler/SecLists](https://github.com/danielmiessler/SecLists/)

## Requirements

- [NodeJS v20 LTS](https://nodejs.org/) needs to be installed
- [Visual Studio Code](https://code.visualstudio.com/) with the extensions: [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint),  [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) and [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)

## Run O-Vault locally

1. Install all required npm dependencies with the command:

```bash
npm run install:all
```

2. Open the root project folder in Visual Studio Code

3. Run in a first terminal the command:

```bash
npm run dev:lib
```

4. Run in a second terminal the command:

```bash
npm run dev:web
```

5. Run the debug configuration "Debug Electron", configured in .vscode/launch.json

## Run the linter

```bash
npm run lint
```

## Run the unit tests

In command line:

```bash
npm test
```

Or from VSCode using the Jest VSCode Extension (right click on a test file and click on "Debug Tests")

## Build the App locally

To generate binaries for windows:

```bash
npm run package:win
```
To generate binaries for mac:

```bash
npm run package:mac
```
To generate binaries for linux:

```bash
npm run package:linux
```
The output folder is ./dist
