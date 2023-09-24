
const fs = require('fs')

let pluginsFolder = './plugins'

function getPlugins(){
    let files = fs.readdirSync(pluginsFolder)
    let plugins = []
    for (let file of files) {
        if (fs.readdirSync(`${pluginsFolder}/${file}`).includes('plugin.js')) {
            plugins.push(`${pluginsFolder}/${file}/plugin.js`)
        }

    }
    return plugins

}

function loadPlugins(plugins){
    for (let plugin of plugins) {
        let data = fs.readFileSync(plugin, 'utf8')
        window.eval(data)
    }
}

loadPlugins(getPlugins())

