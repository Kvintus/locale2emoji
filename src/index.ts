import { Locale, localeCountryMap } from './lib/maps'

export const getFlagEmoji = (locale: string): string => {
    const split = locale.toUpperCase().split(/[-_]/)
    const lang = split.shift() ?? ''
    let code = split.pop()

    if (!/^[A-Z]{2}$/.test(code ?? '')) {
        code = localeCountryMap[lang.toLowerCase() as Locale]
    }

    if (!code) {
        return ''
    }

    const a = String.fromCodePoint(code.codePointAt(0)! - 0x41 + 0x1F1E6)
    const b = String.fromCodePoint(code.codePointAt(1)! - 0x41 + 0x1F1E6)
    return a + b
}
