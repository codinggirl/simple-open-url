test('require should no errors', () => {
    let error = null
    try {
        require('./cli')
    } catch (e) {
        error = e
    }
    expect(error).toBeNull()
})
