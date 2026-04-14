// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    fonts: [{
        provider: fontProviders.local(),
        name: "Switzer",
        cssVariable: "--font-switzer",
        options: {
            variants: [{
                src: ['./src/assets/fonts/Switzer-Variable.woff'],
                weight: '100 900',
                style: 'normal'
            }]
        }
    }]


});
