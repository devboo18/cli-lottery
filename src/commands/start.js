module.exports = {
  name: 'start',
  description: 'Start the initial structure',
  run: async toolbox => {
    const {
      installPackages,
      create,
      print: { success, error }
    } = toolbox

    const packages = installPackages([
      'react-redux',
      'firebase',
      'axios',
      'redux-thunk',
      'react-redux-firebase',
      'react-router-dom',
      'redux-firestore',
      'redux',
      'styled-components',
      'react-toastify',
      '--dev enzyme'
    ])

    if (packages) {
      await create('app', 'app')
      await create('index', 'index')
      await create('redux/store', 'rootReducer')
      await create('redux/rootReducer', 'rootReducer')
      await create('redux/action', 'example')
      await create('routes', 'routes')
      await create('http', 'API')
      await create('http/firebase', 'firebase')
    } else {
      error('No dependencies installed')
    }
  }
}
