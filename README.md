# React form demo

This is a simple 2-step mobile survey form for a developer test at Mubaloo.

You can view a static version on [GitHub Pages](https://davidxmoody.github.io/react-form-demo/). Note that the form submission has been rigged to always "succeed" even though there is no server.

## Setup

```
git clone https://github.com/davidxmoody/react-form-demo.git
npm i
npm start
# Go to http://localhost:8888
```

## Tech used

- React
- `create-react-app` for building and hot reloading in dev (using Webpack under the hood)
- Sass
- Simple Node.js (v6+) Express backend

## Weaknesses

- The styling is *very plain*, I decided to focus on functionality, animation and usability instead of prettiness
- No real validation, all fields are optional
- Sass compilation is done as a separate step which litters gitignored `.css` files around (could be done with a webpack sass loader instead)
- There is no "back" button to go back to the first stage of the form
- Not tested in any browsers other than Chrome and Chrome for Android
- Keyboard controls aren't great (pressing enter does nothing and you can accidentally tab into fields on the next step and break it)
