## Gatsby / Netlify CMS Starter

This is a simple starter inspired by Netlify's [Gatsby + Netlify CMS Starter](https://github.com/netlify-templates/gatsby-starter-netlify-cms). Instead of a blog-style site, this starter is focused on an artist's portfolio. The only modelling provided is a "Category" with the ability to upload media. The rest is up to you!

## Features

- Gatsby
- Netlify for CMS
- Styled Components
- React Helmet
- Gatsby Image (coming soon)

## Setup

1. Clone this repo
2. Install dependencies with `yarn install`
3. Run `gatsby develop` to see your site at http://localhost:8000
4. Update the admin config

```
backend:
  name: github
  repo: your-name/your-repo
```

5. Push the repo up to Github
6. Create a site on Netlify (https://app.netlify.com/start)
7. Follow steps to use Github as an oAuth provider (https://www.netlify.com/docs/authentication-providers/#using-an-authentication-provider)
