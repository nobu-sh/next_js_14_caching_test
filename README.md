## What is this project?
I found an error with Router Cache. This app works fine initially: Server Component's RSC Payload stays cached on browser for the first five minutes (dynamic page).
However, after 5 minutes, when first invalidation happens, it just never gets cached again and keeps fetching on every single navigation.
If I refresh the page, the Router Cache becomes fine again until the next invalidation.

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

6. If I refresh, it works again...
