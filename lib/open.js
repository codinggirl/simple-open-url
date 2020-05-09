/**
 * url open helper
 * @public
 * @access public
 */

const { spawn } = require('child_process')



/**
 * @private
 * @access private
 */
const availableCmds = {
    'aix': 'defaultbrowser',
    'darwin': 'open',
    'freebsd': 'open',
    'linux': 'xdg-open',
    'openbsd': 'open',
    'sunos': 'xdg-open', // maybe should detect the os version for Solaris 11 and later
    'win32': 'start'
}

/**
 * The platform current running this lib
 * @public
 * @access public
 * @returns {string}
 */
const currentPlatform = process.platform

/**
 * This real open command of current platform
 * @public
 * @access public
 * @returns {string}
 */
const platformCmd = availableCmds[currentPlatform] || null

/**
 * wheather or not this lib could open an url on current platform
 * @public
 * @access public
 * @returns {boolean}
 */
const canOpenUrl = platformCmd !== null

/**
 * open a url from shell command
 * @public
 * @access public
 * @param {string} url a url string to open with system default browser
 * @returns {void}
 */
const openUrl = (url) => {
    if (canOpenUrl) {
        const normalizedUrlString = new URL(url).toString()
        spawn(platformCmd, [normalizedUrlString], {
            shell: true
        })
    }
}

module.exports = {
    canOpenUrl,
    currentPlatform,
    openUrl
}
