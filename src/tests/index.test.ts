import { getFlagEmoji } from '../index'

describe('getFlagEmoji', function () {
    const tests: Record<string, string> = {
        'de': '🇩🇪',
        'de-DE': '🇩🇪',
        'de_DE': '🇩🇪',
        'de-CH': '🇨🇭',
        'en': '🇺🇸',
        'EN': '🇺🇸',
        'en-GB': '🇬🇧',
        'en-US': '🇺🇸',
        'EN-US': '🇺🇸',
        'EN-us': '🇺🇸',
        'en-us': '🇺🇸',
        'pt': '🇧🇷',
        'sk_Latin_SK': '🇸🇰',
        'eo': '',
    }

    Object.keys(tests).forEach(function (from) {
        const expectedEmoji = tests[from]

        it(`${from} -> ${expectedEmoji}`, function () {
            expect(getFlagEmoji(from)).toEqual(expectedEmoji)
        })
    })

    it('should return an empty string for invalid input', function () {
        expect(getFlagEmoji('potato')).toEqual('')
    })
})
