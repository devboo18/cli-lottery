module.exports = {
  name: 'component',
  description: 'Create a new component',
  run: async toolbox => {
    const { parameters, createComponent, create } = toolbox

    const name = parameters.first
    await create('test', `${name}-test`)
    await createComponent('src/components', name)
  }
}
