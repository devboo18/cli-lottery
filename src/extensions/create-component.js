module.exports = toolbox => {
  const {
    template,
    print: { success, error }
  } = toolbox

  async function createComponent(folder, name) {
    if (!name) {
      error('Name must be specified')
      return
    }

    await template.generate({
      template: 'component.js.ejs',
      target: `${folder}/${name}/index.js`,
      props: { name }
    })

    const styleTemplate = 'styles.js.ejs'

    await template.generate({
      template: styleTemplate,
      target: `${folder}/${name}/styles.js`
    })

    success(`Generated ${folder}/${name}.`)
  }
  toolbox.createComponent = createComponent
}
