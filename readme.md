# lottery CLI

A CLI for lottery - 1.0.0.
This CLI was developed with GlueGun (https://github.com/infinitered/gluegun/tree/master/docs)

## Getting start

```shell
$ create-react-app MyProject
$ cd MyProject
$ npm install cli-lottery
$ lot start
```

The start command will install the following dependencies:

| Dependency           |
| -------------------- |
| Firebase             |
| Redux                |
| Redux-Thunk          |
| React-Toastify       |
| Axios                |
| redux-firestore      |
| react-redux-firebase |
| react-router-dom     |
| styled-components    |
| enzyme               |

it will also create the following structure..

| Path                                 | Description                        |
| ------------------------------------ | ---------------------------------- |
| src/App.js                           | App.js with Redux & Routes         |
| src/index.js                         | Index.js with Redux Store Provider |
| src/routes/index.js                  | Routes from system                 |
| src/http/firebase.js                 | File with firebase settings        |
| src/http/API.js                      | File with Axios API settings       |
| src/store/index.js                   | Store settings                     |
| src/store/actions/exampleAction.js   | Example of redux action            |
| src/store/reducers/exampleReducer.js | Example of redux reducer           |
| src/store/reducers/rootReducer.js    | Reducer that combines all reducers |

## Creating a component

To create a component on your react application, just use this:

```shell
$ lot component MyComponent
```

This command will create a component inside src/components called MyComponent/index.js.
Additionally, it will create a styles.js from Styled Component and a default Enzyme Test;

# License

MIT - see LICENSE
