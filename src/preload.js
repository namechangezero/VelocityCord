
const fs = require('fs')

let injectFolder = './inject'

function getInjectFiles() {
    let files = fs.readdirSync(injectFolder)
    let injectFiles = []
    for (let file of files) {
        if (file.endsWith('.js')) {
            injectFiles.push(`${injectFolder}/${file}`)
        }
    }
    return injectFiles
    
}

function injectFiles(files) {
    for (let file of files) {
        let data = fs.readFileSync(file, 'utf8')
        window.eval(data)
    }
}


window.addEventListener('DOMContentLoaded', () => {


    let interval = setInterval(() => {

        if (location.href.includes('channels/@me')){
            
            injectFiles(getInjectFiles())

            clearInterval(interval)
        }

    },100)

})

