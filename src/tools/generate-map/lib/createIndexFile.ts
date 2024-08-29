import { Project, VariableDeclarationKind } from 'ts-morph'
import path from 'path'
import * as process from 'node:process'

/**
 * Creates an index file that imports all country mapping files and spreads them into a single object.
 * @param project - The ts-morph project instance.
 * @param countryMappings - The country mappings generated from likelySubtags.
 */
export function createIndexFile(
    project: Project,
    countryMappings: Record<string, [string, string][]>,
): void {
    const indexPath = path.resolve(process.cwd(), 'src/lib/maps/index.ts')
    const indexFile = project.createSourceFile(indexPath, '', { overwrite: true })

    Object.keys(countryMappings).forEach((countryCode) => {
        indexFile.addImportDeclaration({
            namedImports: [countryCode],
            moduleSpecifier: `./${countryCode.toLowerCase()}`,
        })
    })

    indexFile.addVariableStatement({
        declarationKind: VariableDeclarationKind.Const,
        declarations: [
            {
                name: 'localeCountryMap',
                initializer: `{ ${Object.keys(countryMappings)
                    .map(countryCode => `...${countryCode}`)
                    .join(', ')} }`,
            },
        ],
        isExported: true,
    })
}
