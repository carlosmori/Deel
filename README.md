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

########################################
## PART 2
### 1- What is the difference between Component and PureComponent? give an example where it might break my app.
The difference between those two is that you can increase the app performance if you use a PureComponent because they do a shallow comparison on state and props and you can avoid re rendering them.Every component re renders if its parent re render, so it could increase a lot the app performance if you have many childs as pure components.
I can’t remember using pure components since I moved immediately to the hooks implementation but I would imagine an app might break if you use a pure component and one property of an object changes in that component. Shallow comparisons check only for primitive and reference values.
### 2- Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
Context is a way to persist data globally, allowing components to communicate between each other. Context tackles on problem known as prop drill.
     ShouldComponentUpdate is a lifecycle that determines whether a component should re render comparing its previous state with the incoming new state.
     Due to the fact that its been almost two years since I use hooks I don’t remember specific use cases of this. 
### 3-  Describe 3 ways to pass information from a component to its PARENT.

Via callbacks, with Redux and with Context.
### 4- Give 2 ways to prevent components from re-rendering.
useMemo and useCallback are two react hooks proposed by React to increase app performance by reducing the amount of times a component re renders. 
Both of them work by memoizing a function or a result and will cache that value and avoid re rendering the component unless any of their dependencies changes.
### 5- What is a fragment and why do we need it? Give an example where it might break my app.
React components require you to return an element per component, there are several use cases where and wrapper div is  unnecessary and Fragments allow you to bypass this rule. 
How?
You can return the content of the component without the need of creating an extra DOM node.
For example if you have a flex box  layout a wrapper div might break the layout.
### 6- Give 3 examples of the HOC pattern.

the HOC pattern is basically a way to reutilize logic among a React app. It was previously known as renderProps, then you had the HOCs and now custom hooks. These 3 follow the same pattern. So I think examples of any of these would be the same.
I borrowed from a Spain frontend architect 2 custom hooks that I find really useful to abstract and reuse logic among the app, check the challenge for useAsync and useFetchAndLoad

6.1- useAsync allows me to call apis based on a dependency array, so it came really useful I this search feature. If the api call ended I can return a success function and when the component is destroyed (meaning the api call ended) I have a return function for that moment as well. These can be used among an entire web app.
6.2- useFetchAndLoad allows me to have a loading flag on an api call meanwhile I wait for the response and I can abort it if the component gets destroyed, this comes really useful to increase app performance.
6.3- withHeader might be a HOC that comes handy for a CRM for example if there was a certain header to be reused among views. 
### 7- What's the difference in handling exceptions in promises, callbacks and async...await.

Im not sure about this one. 
Promises and Async await are the same, just syntactic sugar. 

Promises come with a reject parameter, at the end of the statement you can append a .catch() that would get those errors. You can also wrap everything in a try catch and if something fails it will automatically go to the catch block. 
You can programmatically trigger an error using Throw reserved keyword.

I guess the difference between promises and async await is that in promises you could use .catch() and in async await you should wrap it with a try catch.
### 8- How many arguments does setState take and why is it async.

setState can take up to two arguments, the value that’s going to be updated and a callback function for the moment when that value gets updated. If you check my challenge , I used two setStates in the same scope, setState is async because is an expensive operation. React batches several setStates together so you can have a better performance.
### 9- List the steps needed to migrate a Class to Function Component.

Remove constructor and places those variables in state. Remove render method. Remove all this keywords. Use the provided hooks by react, change the this.setState for the useState() hooks. Refactor lifecycles methods using useEffect.
### 10- List a few ways styles can be used with components

There are several, among them: 
- use inline styling style {{color: red}}
- you can have a custom css style sheet perfile
- you can have a css preprocessor like sass with its custom style sheets
- my preferred way of styling components is with atomic css like tailwinds or tachyons.
### 11- How to render an HTML string coming from the server.

You can use the property dangerouslySetInnerHTML. Which is dangerous because you are vulnerable to XSS attacks.