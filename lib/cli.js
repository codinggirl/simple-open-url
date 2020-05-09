#!/usr/bin/env node
const { currentPlatform, canOpenUrl, openUrl } = require('./open')

if (!canOpenUrl) {
    console.warn(`This simple-open-url package does not support your platform: ${currentPlatform}, please use another npm package.`)
    process.exit(-1)
}

const urlStringList = process.argv.slice(2)
urlStringList.map(urlString => {
    openUrl(urlString)
})
