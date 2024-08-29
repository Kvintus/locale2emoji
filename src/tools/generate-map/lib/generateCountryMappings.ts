import cldr from 'cldr-core/supplemental/likelySubtags.json'

const likelySubtags: Record<string, string> = cldr.supplemental.likelySubtags

/**
 * Generates an array of key-value pairs based on the likelySubtags data.
 * @returns Array of key-value pairs grouped by country.
 */
export function generateCountryMappings(): Record<string, [string, string][]> {
    const countryMappings: Record<string, [string, string][]> = {}

    Object.keys(likelySubtags).forEach((key: string) => {
        if (key.startsWith('und-') || /-[A-Z]{2}$/g.test(key)) {
            return
        }

        const locale = likelySubtags[key]
        const split = locale.toUpperCase().split(/-|_/)

        if (split.length < 2) {
            return
        }

        const code = split.pop()
        if (!code || code === 'ZZ' || !/^[A-Z]{2}$/.test(code)) {
            return
        }

        // Group key-value pairs by country code
        if (!countryMappings[code]) {
            countryMappings[code] = []
        }

        const formattedKey = key.includes('-') ? `'${key}'` : key
        countryMappings[code].push([formattedKey, code]) // Use the country code as the value
    })

    return countryMappings
}
