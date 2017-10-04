# React form demo

This is a simple 2-step mobile survey form for a developer test at Mubaloo.

You can view a static version on GitHub Pages (TODO).

## Setup

```
npm i
npm start
# Go to http://localhost:8888
```

## Tech used

- React
- `create-react-app` for building and hot reloading in dev (using Webpack under the hood)
- Sass styles
- Simple Node.js (v6+) Express backend

## Weaknesses

Some things I might do differently next time or might continue with if I had more time to work on it.

- The styling is *very plain*
- No real validation, all fields are optional
- Sass compilation is done as a separate step which litters `.css` files around (could be done with a webpack sass loader instead)
