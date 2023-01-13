# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- [React](https://reactjs.org/)
- [React-bootstrap](https://react-bootstrap.github.io/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Bootstrap](https://getbootstrap.com/)
- [Bootstrap cheatsheet](https://bootstrap-cheatsheet.themeselection.com/)
- [CRUD Json-server](https://medium.com/weekly-webtips/use-react-with-json-server-and-create-simple-crud-app-b2bf58cd4558)

## Videos and training courses that where usefull to this project

- [How To Make Website Using HTML & CSS | Full Responsive Multi Page Website Design Step by Step](https://youtu.be/oYRda7UtuhA)
- [React JS Crash Course | Task Tracker](https://youtu.be/w7ejDZ8SWv8)
- [6 State Mistakes Every Junior React Developer Makes](https://youtu.be/Fhu5cu864ag)
- [All useEffect Mistakes Every Junior React Developer Makes](https://youtu.be/QQYeipc_cik)
- [Learn React useReducer Hook with Examples](https://youtu.be/RZPAQV7JvNU)
- [Learn useMemo and React Memo for Faster Apps](https://youtu.be/6-BfMpTT2PE)
- [BEST Ways to Handle and Validate React Forms without a Library](https://youtu.be/tIdNeoHniEY)
- [React + Bootstrap 5 - let'st build a real page](https://youtu.be/l2131Rok8XU)

## Compile and run

1. Clone this project
2. `npm install` in the root directory
3. `start npm "run server";start npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Bootstrap

```
npm i [--save] react-bootstrap bootstrap react-icons
```

### activate Bootstrap

```
// React bootstrap configuration
import "react-bootstrap/dist/react-bootstrap.min";
import "bootstrap/dist/css/bootstrap.min.css";
```

### Examples

#### React component

```
import Container from "react-bootstrap/Container";
```

#### React Icon

```
import { FaBeer } from 'react-icons/fa';

class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}
```

## Awesome Font

Non sono necessari, sono inclusi in bootstrap-icons

- (Tutorial)[https://youtu.be/oHmz42qRfho]
- (Awesome fonts with react )[https://fontawesome.com/v5/docs/web/use-with/react]

```
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome
npm install --save @fortawesome/free-brands-svg-icons
```

```javascript
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

...

<FontAwesomeIcon icon={faFacebook} /> */}

...
<FontAwesomeIcon icon={solid("user-secret")} />
<FontAwesomeIcon icon={solid("bars")} />
<FontAwesomeIcon icon={solid("xmark")} />
<FontAwesomeIcon icon={brands("twitter")} />

```

## (JSON Server)[https://www.npmjs.com/package/json-server]

- Install: "npm i json-server"
- Add npm command to package.json: "server": "json-server --watch db.json --port 5000",
- Run json-server: "npm run server"
- Run app: "npm start"

https://medium.com/weekly-webtips/use-react-with-json-server-and-create-simple-crud-app-b2bf58cd4558

## Naming conventions

- (Airbnb React/JSX Style Guide)[https://github.com/airbnb/javascript/tree/master/react]

## Restaurant template

- (Restaurant Menu)[https://github.com/RafaelEchart/React_RestaurantMenu]

## Destructuring javascript object

- https://dmitripavlutin.com/javascript-object-destructuring/

## Javascript array

- https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/

## Images

Taken from [Lorem Pisum](https://picsum.photos/)

- 160: homeBackgroundImage
- 249: reactInfoBackgroundImage
- 42 : happyBarCustomerBackgroundImage
- 304: happyBarKitchenBackgroundImage
- 239: aboutBackgroundImage

## How to center a button in CSS?

CSS is mainly used for providing the best style to the HTML web page. Using CSS, We can specify the arrangement of elements on the page.

There are various methods of aligning the button at the center of the web page. We can align the buttons horizontally as well as vertically. We can center the button by using the following methods:

    text-align: center - By setting the value of text-align property of parent div tag to the center.
    margin: auto - By setting the value of margin property to auto.
    display: flex - By setting the value of display property to flex and the value of justify-content property to center.
    display: grid - By setting the value of display property to the grid.

## Arrow funcions return value

[Why doesn't my arrow function return a value?](https://stackoverflow.com/questions/45754957/why-doesnt-my-arrow-function-return-a-value)

When you use the function body version of an arrow function (with {}), there is no implied return. You have to specify it. When you use the concise body (no {}), the result of the body expression is implicitly returned by the function.

So you would write that either with an explicit return:

const f = arg => { return arg.toUpperCase(); };
// Explicit return ^^^^^^

or with a concise body:

const f = arg => arg.toUpperCase();

Examples:

Show code snippet

Slightly tangential, but speaking of {}: If you want the concise arrow's body expression to be an object initializer, put it in ():

const f = arg => ({prop: arg.toUpperCase()});

## [Spread Operator](https://www.geeksforgeeks.org/javascript-spread-operator/)

Spread operator allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 values are expected. It allows us the privilege to obtain a list of parameters from an array.

## [10 JavaScript Concepts You Should Learn to Master React](https://dev.to/alterclass/10-javascript-concepts-you-should-learn-to-master-react-6o8)

Knowledge of JavaScript / ES6+ is important if you want to build React applications. Indeed, ES6+ brings a lot of cool stuff to JavaScript that makes writing React components much easier and cleaner.
