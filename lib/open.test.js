test('require should no errors', () => {
    let error = null
    try {
        require('./open')
    } catch (e) {
        error = e
    }
    expect(error).toBeNull()
})

test('types', () => {
    const {
        canOpenUrl,
        currentPlatform,
        openUrl
    } = require('./open')

    expect(canOpenUrl).toBeDefined()
    expect(currentPlatform).toBeDefined()
    expect(openUrl).toBeDefined()
    expect(typeof canOpenUrl).toEqual('boolean')
    expect(typeof currentPlatform).toEqual('string')
    expect(typeof openUrl).toEqual('function')
})
