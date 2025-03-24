# Fylo

## Project Setup

```sh
npm init -y
npm install -D tailwindcss
npx tailwindcss init
```

Use the following for Tailwinds 4.x or later.  Tailwind CSS 4.x no longer uses the `tailwind.config.js` file.

```sh
npm init -y
npm install -D tailwindcss @tailwindcss/cli
npx @tailwindcss/cli -i ./src/input.css -o ./src/css/style.css --watch
```