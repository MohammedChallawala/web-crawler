const { sortPages } = require('./report.js')
const { test, expect } = require('@jest/globals')

test('sortPages', () => {
    const input = {
        'https://en.wikipedia.org/wiki/Paracetamol':1,
        'https://en.wikipedia.org/wiki/':3
    }    
    const actual = sortPages(input)
    const expected = [
        ['https://en.wikipedia.org/wiki/', 3],
        ['https://en.wikipedia.org/wiki/Paracetamol', 1]
    ]
    expect(actual).toEqual(expected)
})

test('sortPages 5 pages', () => {
    const input = {
        'https://en.wikipedia.org/wiki/Paracetamol' : 5,
        'https://en.wikipedia.org/wiki/' : 9,
        'https://en.wikipedia.org/wiki/Main_Page' : 10,
        'https://en.wikipedia.org/wiki/Ibuprofen' : 4,
        'https://en.wikipedia.org/wiki/Darth_Vader' : 7
    }    
    const actual = sortPages(input)
    const expected = [
        ['https://en.wikipedia.org/wiki/Main_Page', 10],
        ['https://en.wikipedia.org/wiki/', 9],
        ['https://en.wikipedia.org/wiki/Darth_Vader', 7],
        ['https://en.wikipedia.org/wiki/Paracetamol', 5],
        ['https://en.wikipedia.org/wiki/Ibuprofen', 4],
    ]
    expect(actual).toEqual(expected)
})