import { Locale, localeCountryMap } from './lib/maps'

export const getFlagEmoji = (locale: string): string => {
    const split = locale.toUpperCase().split(/[-_]/);
    const lang = split.shift() ?? '';   // language prefix
    let code = split.pop();     // Country or Sublanguage suffix

    // if code is NOT == Flag (2 chars), means it's a sublanguage, need a lookup
    if (!/^[A-Z]{2}$/.test(code ?? '')) {
        let lookupLocale = locale.replace('_', '-');

        code = localeCountryMap[lookupLocale as Locale];
        if(!code) {
            lookupLocale = lang.toLowerCase();
            code = localeCountryMap[lookupLocale as Locale];
        }
    }

    if (!code) {
        return '';
    }

    const a = String.fromCodePoint(code.codePointAt(0)! - 0x41 + 0x1F1E6);
    const b = String.fromCodePoint(code.codePointAt(1)! - 0x41 + 0x1F1E6);
    return a + b;
}
