## How to Run This Project
```
# start the node server first (which provides an example api endpoint of https://localhost:8001
node server.js

# start the next.js web server
npm install
npm run build
npm run start
```

## How to Reproduce the Error

1. First if you go to http://localhost:3000, you will see the two values (`from client: some value` and `from server: some value`)

2. If you navigate between the `hello` page and the `home` page, you can see the Router Cache works perfectly, only caching the server component render.

3. Now switch tab and do other things for 5 minutes (invalidation time for dynamic route)

4. Come back and again navigate between `hello` page and `home` page.

5. Now both values change every time you navigate... Is this an intended behavior???
