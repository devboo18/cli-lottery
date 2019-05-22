module.exports = {
  name: 'global',
  description: 'Create a new global component',
  run: async toolbox => {
    const { parameters, createComponent } = toolbox

    const name = parameters.first

    await createComponent('src/components/global', name)
  }
}
