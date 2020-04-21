# UCPE theme

A base theme for a Drupal 8 site using Bootstrap, Webpack, and JS ES6.

## Requirements

To build this site's theme you must have:

1. Node version 11.
2. The ability to run `npm` commands (probably using the console).

## Setup and use

A lot of the look of the site can be configured at
`/admin/appearance/settings/ucpe_theme`, but if you need to update the sass,
you can follow the instructions below:

From within this directory:

- Run `npm install` to install dependencies.
- Run `npm run build` to run the production build.
- Run `npm run build:dev` to run the development build. Do not commit changes
  from development mode!
- Run `npm run start` to watch for changes and build.
- Run `npm run start:dev` to watch for changes and build in development mode.
  In this mode, your local site should automatically refresh when files change.
  **Note: Do not commit changes from development mode! Commit changes from
  `npm run build` instead.**
- Run `npm run prettier` to fix styling errors in js/scss files. This is run
  automatically if you commit files while inside the theme directory.

## Javascript compilation

Javascript is transpiled from ES6 ES5 using Babel, and then minified and
tree-shook by Webpack.

For more information on ES6, see https://dev.to/srebalaji/es6-for-beginners-with-example-c7
