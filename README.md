# WhiteHoodHacker's Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/435dc3cb-ac8a-4133-ba93-4c810b7fb939/deploy-status)](https://app.netlify.com/sites/whitehoodhacker/deploys)

[https://whitehoodhacker.net](https://whitehoodhacker.net)

This website uses GatsbyJS, a static site generator based on the ReactJS framework. I chose GatsbyJS because it offered the flexibility of React without sacrificing speed and SEO.

I developed this website entirely from scratch, although most of the blog post generation was taken from [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog). Posts are generated from markdown and MDX files located in the `contents/posts` directory.

This website also uses Bootstrap 5.0, mainly for the grid system and a few visual components. Most of the visual styles are custom made (including the fancy animations). These styles can be found in `main.css`.

## Quick Start

Make sure all dependences are installed:

```
npm install
```

To start development, run:

```
gatsby develop
```

To build the site and serve it, run:

```
gatsby build && gatsby serve
```

The built static site will be generated in the `public` folder.
