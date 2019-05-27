## Gatsby / Netlify CMS Starter

This simple starter is inspired by Netlify's [Gatsby + Netlify CMS Starter](https://github.com/netlify-templates/gatsby-starter-netlify-cms). Instead of a blog-style site, this starter is focused on an artist's portfolio. The only modelling provided is a "Work" with the ability to upload media. The rest is up to you!

## Features

- Gatsby
- Netlify for CMS
- Styled Components
- React Flexbox Grid
- React Helmet
- Gatsby Image (coming soon)

## Setup

1. Clone this repo
2. Install dependencies with `yarn install`
3. Update the `siteMetadata` section of `gatsby-config.js`
4. Run `gatsby develop` to see your site at http://localhost:8000
5. Play around, make some changes!

## Deploying the site

1. Create a new Github repo
2. Update the admin config in `static/admin/config.yml` with your Github username and newly created repo name.

```
backend:
  name: github
  repo: your-name/your-repo
```

3. Push up your local site to your new repo on Github
4. Create a site on Netlify (https://app.netlify.com/start)
5. Follow steps to use Github as an oAuth provider (https://www.netlify.com/docs/authentication-providers/#using-an-authentication-provider)
