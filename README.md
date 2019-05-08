Minimal example of preact with react router v4.4.0-beta.x

Steps - 

1. npm i
2. npm run dev

App does not render anything.

Now in package.json - 

change 
"react-router-dom": "4.0.0-beta.6",
to
"react-router-dom": "4.3.1",

run the app. App renders perfectly.
It only works till react-router-dom v4.3.1, post that, only blank screen is rendered.

[Preact]: https://github.com/developit/preact
[preact-compat]: https://github.com/developit/preact-compat
[React Router]: https://github.com/reacttraining/react-router
