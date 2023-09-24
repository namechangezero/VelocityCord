
const fs = require('fs')

let themesFolder = './themes'
let configFile = './inject/themesManager.json'

let config = JSON.parse(fs.readFileSync(configFile, 'utf8'))

function getThemes(){
    let files = fs.readdirSync(themesFolder)
    let themes = []
    for (let file of files) {
        if (fs.readdirSync(`${themesFolder}/${file}`).includes('theme.css')) {
            themes.push(`${themesFolder}/${file}/theme.css`)
        }

    }
    return themes

}

function loadThemes(themes){
    for (let theme of themes) {
        if (!config.dontLoad.includes(theme)) {
            let data = fs.readFileSync(theme, 'utf8')
            
            let style = document.createElement('style')
            style.innerHTML = data
            document.head.appendChild(style)

        }
    }
}

loadThemes(getThemes())

