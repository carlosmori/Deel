# Carlos Mori - Deel Challenge
## Run Project

```bash
cd deel

npm install
npm run dev
# or
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/countries/[slug]](http://localhost:3000/api/hello). 

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Main Features

The project is build using CLEAN design pattern.

The api calls are performed using two custom hooks.

The api calls are debounced to reduce the amount of api calls made, this is a good practice in search features.

The project layout was developed using atomic css, [Tailwinds CSS](https://https://tailwindcss.com/).

### Missing Features
I couldnt deploy the project, I can do it using vercel I need more time.

No unit testing was added , I can do it with more time.

The API is not the best, wanted to focus on the frontend part.
