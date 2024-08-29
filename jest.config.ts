// jest.config.ts
import { createDefaultPreset, type JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
    // [...]
    transform: {
        ...createDefaultPreset().transform,
        // [...]
    },
}

export default jestConfig
