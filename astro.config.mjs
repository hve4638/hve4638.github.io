// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: { port: 8700, host: '0.0.0.0' },
    site: 'https://hve4638.github.io',
    output: 'static',
});
