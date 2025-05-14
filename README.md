# Pinterest-style Image Grid with Nuxt3

This project is a Pinterest-style image grid built with Nuxt3, Pinia, Bootstrap, and SCSS. It uses an infinite scroll feature and fetches images from an external API based on user search queries.

## How to Run the Project

- git clone https://github.com/shatergholiMsha/PinApp.git

## Install dependencies

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Run the project locally

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Architectural Decisions

- Nuxt3: Chosen for its powerful features like server-side rendering, routing, and ease of building Vue.js applications.

- Pinia: Used for state management, replacing Vuex for a simpler and more modern.

- Bootstrap & SCSS: Bootstrap provides a responsive layout and standard UI components, while SCSS allows for custom styling and flexibility.

- Infinite Scroll: Implemented using IntersectionObserver to load more images as the user scrolls to the bottom, ensuring a smooth, continuous user experience.

- API Integration: I faced a CORS error when trying to use the external API directly due to browser restrictions. To resolve this, I used a local server to proxy the requests and bypass the issue.