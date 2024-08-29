/**
 *  this script generates the country mapping files and index file.
 *  The country mapping files are used to map country codes to their respective likely subtags.
 */

import { Project } from 'ts-morph'
import { Logger } from 'tslog'
import { generateCountryMappings } from './lib/generateCountryMappings'
import { writeCountryFiles } from './lib/writeCountryFiles'
import { createIndexFile } from './lib/createIndexFile'

// Initialize the logger
const logger = new Logger({ name: 'Map Generator' })

/**
 * Main function to generate country mapping files and index file.
 */
async function main() {
    try {
        logger.info('Starting the generation process...')

        // Initialize ts-morph project
        const project = new Project()
        logger.info('ts-morph project initialized.')

        // Generate the country mappings
        const countryMappings = generateCountryMappings()
        logger.info('Country mappings generated.', { countryCount: Object.keys(countryMappings).length })

        // Write the country files
        writeCountryFiles(project, countryMappings)
        logger.info('Country files written.')

        // Create the index file
        createIndexFile(project, countryMappings)
        logger.info('Index file created.')

        // Save the project to write all changes to disk
        await project.save()
        logger.info('Files generated and saved successfully!')
    }
    catch (error) {
        logger.error('An error occurred during the file generation process:', error)
    }
}

// Execute the main function
main()
