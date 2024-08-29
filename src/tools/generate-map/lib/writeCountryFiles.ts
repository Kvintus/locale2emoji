import { Project, VariableDeclarationKind } from 'ts-morph'
import * as path from 'node:path'
import * as fs from 'node:fs'
import * as process from 'node:process'

/**
 * Writes the generated country mapping variables to individual files.
 * @param project - The ts-morph project instance.
 * @param countryMappings - The country mappings generated from likelySubtags.
 */
export function writeCountryFiles(
    project: Project,
    countryMappings: Record<string, [string, string][]>,
): void {
    const outputDir = path.resolve(process.cwd(), 'src/lib/maps')
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir)
    }

    Object.keys(countryMappings).forEach((countryCode) => {
        const filePath = path.resolve(outputDir, `${countryCode.toLowerCase()}.ts`)
        const sourceFile = project.createSourceFile(filePath, '', { overwrite: true })

        sourceFile.addVariableStatement({
            declarationKind: VariableDeclarationKind.Const,
            declarations: [
                {
                    name: countryCode, // Use uppercase country code as variable name
                    initializer: JSON.stringify(
                        Object.fromEntries(countryMappings[countryCode]),
                        null,
                        2,
                    ),
                },
            ],
            isExported: true,
        })
    })
}
