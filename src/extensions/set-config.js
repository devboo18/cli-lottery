module.exports = toolbox => {
  const {
    system,
    template,

    print: { success, error }
  } = toolbox

  function install(packages) {
    console.log(typeof packages)

    if (typeof packages == 'object') {
      packages.map(pkg => {
        success(`Installing ${pkg} package...`)
        system.run(`npm install --save ${pkg}`)
      })
      return true
    } else {
      error(`Expected object or array, found ${typeof packages}`)
      return false
    }
  }

  async function create(type, name) {
    if (!name) {
      error('Name must be specified')
      return
    }

    switch (type) {
      case 'redux/action':
        await template.generate({
          template: 'redux/action.js.ejs',
          target: `src/store/actions/${name}Actions.js`,
          props: { name }
        })
        break
      case 'redux/reducer':
        await template.generate({
          template: 'redux/reducer.js.ejs',
          target: `src/store/reducers/${name}Reducer.js`,
          props: { name }
        })
        break
      case 'redux/rootReducer':
        await template.generate({
          template: 'redux/rootReducer.js.ejs',
          target: `src/store/reducers/rootReducer.js`
        })
        break
      case 'routes':
        await template.generate({
          template: 'routes/routes.js.ejs',
          target: `src/routes/index.js`
        })
        break
      case 'http':
        await template.generate({
          template: 'http/http.js.ejs',
          target: `src/http/${name}.js`,
          props: { name }
        })
        break
      case 'http/firebase':
        await template.generate({
          template: 'firebase/firebase.js.ejs',
          target: `src/http/fb.js`
        })
        break

      case 'redux/store':
        await template.generate({
          template: 'redux/store.js.ejs',
          target: `src/store/index.js`
        })
        break
      case 'test':
        await template.generate({
          template: 'tests/test.js.ejs',
          target: `__tests__/${name}.js`,
          props: { name }
        })
        break
      case 'app':
        await template.generate({
          template: 'App.js.ejs',
          target: `src/App.js`
        })
        break

      case 'index':
        await template.generate({
          template: 'index.js.ejs',
          target: `src/index.js`
        })
        break

      default:
        error(`Not setted:${type}/${name}`)
        break
    }

    success(`Generated ${type}.`)
  }

  toolbox.create = create
  toolbox.installPackages = install
}
