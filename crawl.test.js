const { normalizeURL, getURLsfromHTML } = require('./crawl.js')
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

test('normalizeURL strip capitals', () => {
    const input = 'https://en.WIKIPEDIA.org/wiki/Main_Page/'
    const actual = normalizeURL(input)
    const expected = 'en.wikipedia.org/wiki/Main_Page'
    expect(actual).toEqual(expected)
})

test('normalizeURL strip http', () => {
    const input = 'http://en.WIKIPEDIA.org/wiki/Main_Page/'
    const actual = normalizeURL(input)
    const expected = 'en.wikipedia.org/wiki/Main_Page'
    expect(actual).toEqual(expected)
})

test('getURLsfromHTML absolute URLs', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href = "https://en.wikipedia.org/wiki/Paracetamol">
            The paracetamol blog
            </a>
        </body>
    </html>    
`
    const inputBaseURL = "https://en.wikipedia.org/wiki/Paracetamol"
    const actual = getURLsfromHTML(inputHTMLBody, inputBaseURL)
    const expected = ["https://en.wikipedia.org/wiki/Paracetamol"]
    expect(actual).toEqual(expected)
})

test('getURLsfromHTML relative URLs', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href = "/Paracetamol">
            The paracetamol blog
            </a>
        </body>
    </html>    
`
    const inputBaseURL = "https://en.wikipedia.org/wiki"
    const actual = getURLsfromHTML(inputHTMLBody, inputBaseURL)
    const expected = ["https://en.wikipedia.org/wiki/Paracetamol"]
    expect(actual).toEqual(expected)
})

test('getURLsfromHTML multiple relative URLs', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href = "/Paracetamol">
            The paracetamol blog
            </a>
            <a href = "/Ibuprofen">
            The paracetamol blog
            </a>
        </body>
    </html>    
`
    const inputBaseURL = "https://en.wikipedia.org/wiki"
    const actual = getURLsfromHTML(inputHTMLBody, inputBaseURL)
    const expected = ["https://en.wikipedia.org/wiki/Paracetamol", "https://en.wikipedia.org/wiki/Ibuprofen"]
    expect(actual).toEqual(expected)
})

test('getURLsfromHTML invalid URLs', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href = "invalid">
            The paracetamol blog
            </a>
        </body>
    </html>    
`
    const inputBaseURL = "https://en.wikipedia.org/wiki"
    const actual = getURLsfromHTML(inputHTMLBody, inputBaseURL)
    const expected = []
    expect(actual).toEqual(expected)
})