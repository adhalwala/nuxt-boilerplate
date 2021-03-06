# nuxt-boilerplate

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

### Storybook is developed for Vue. Nuxt have few specific features which are not supported by Storybook out of the box. Hence nuxt-storybook is used which is available with all the possible configuration to work with Nuxt.

```bash
# serve Storybook with hot reload at localhost:3003
$ npx nuxt storybook

# or using yarn with hot reload at localhost:3003
$ yarn nuxt storybook
```

Make sure to override the deployment commands as below to deploy stories on static host(e.g. Vercel) and replace deployment directory from "dist" to "storybook-static".
```bash
# generate static stories to deploy
$ npx nuxt storybook build

#  or using yarn
$ yarn nuxt storybook build
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org), [nuxt-storybook docs](https://storybook.nuxtjs.org) and [Storybook docs](https://storybook.js.org).
