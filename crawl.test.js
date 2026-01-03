const { normalizeURL } = require('./crawl.js')
const {test, expect} = require('@jest/globals')

// test('normalizeURL', () => {
//     const input = ''
//     const actual = normalizeURL(input)
//     const expected = ''
//     expect(actual).toEqual(expected)
// })

test('normalizeURL strip protocol', () => {
    const input = 'https://en.wikipedia.org/wiki/Main_Page'
    const actual = normalizeURL(input)
    const expected = 'en.wikipedia.org/wiki/Main_Page'
    expect(actual).toEqual(expected)
})

test('normalizeURL strip slash', () => {
    const input = 'https://en.wikipedia.org/wiki/Main_Page/'
    const actual = normalizeURL(input)
    const expected = 'en.wikipedia.org/wiki/Main_Page'
    expect(actual).toEqual(expected)
})