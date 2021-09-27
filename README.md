# Server Side Rendering with React and Express
## _Partly Server-side Render with React_

Server-side rendering (SSR) renders a SPA (single-page application) on the server and subsequently sends it across to the client. The client then interprets the pages and displays them on the frontend, after which control of the application is taken over by the framework.

An important performance booster contributed by SSR is the quick initial loading of the application. You've probably noticed that spinning the local development server through any framework's CLI takes a long time to render the application for the first time. SSR sends down a fully loaded app from the server itself so the computing power of the server compensates for the processing power used by the client. As servers are considerably powerful, the bundles of HTML pages are sent across very quickly. Along with gaining speed, your application becomes visible to crawl bots for search engine optimization.

We have two applications
- api-server - _Uses json-server to expose data to the application (cors is enabled)_
- ssr-app - _Uses create-react-app and express for Server Side Rendering_

## To Run the applications

## - api-server
    Follow the steps given in json_server.txt file

## - ssr-app
    1. Open the terminal on application path
    2. Execute 'npm install'
    3. Execute 'npm run dev' to start the express server
    4. Navigate to localhost:4000, to check the output
    
## - If you wnt to run ssr-app (client side)
    1. Open the terminal on application path
    2. Execute 'npm install'
    3. Execute 'npm run react-start'
    4. Chrome Browser will automatically open on localhost:3000