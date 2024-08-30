import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['src/index.ts'],
    splitting: true,
    sourcemap: false,
    format: ['cjs', 'esm'],
    dts: true,
    clean: true,
    minify: true,
})
