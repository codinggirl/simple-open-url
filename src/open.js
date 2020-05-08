const { execFile } = require('child_process')

function _getCommand() {
    const commands = {
        'aix': 'defaultbrowser',
        'android': null,
        'darwin': 'open',
        'freebsd': 'open',
        'linux': 'xdg-open',
        'openbsd': 'open',
        'sunos': 'xdg-open', // maybe should detect the os version for Solaris 11 and later
        'win32': 'start'
    }
    return commands[process.platform] || null
}

function open(url) {
    let command = _getCommand()
    if (!command) {
        console.error(`Your platform ${platform} is not supported, please use other package instead`)
        return
    }

    if(process.platform === 'win32') {
        execFile('cmd', [ '/s', '/c', command, url ])
    } else {
        execFile(command, [ url ])
    }
    
}

module.exports = open
