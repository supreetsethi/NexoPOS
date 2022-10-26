import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import path from 'path';
import fs from 'fs';
import vuePlugin from '@vitejs/plugin-vue';

export default ({ mode }) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};

    return defineConfig({
        base: './',
        server: {
            port: 3331,
            host: '127.0.0.1',
            hmr: {
                protocol: 'wss',
                host: 'localhost',
            },
            https: {
                key: fs.readFileSync( process.env.VITE_LOCAL_KEY ),
                cert: fs.readFileSync( process.env.VITE_LOCAL_CRT ),
            },
        },
        resolve: {
            alias: [
                {
                    find: '&',
                    replacement: path.resolve( __dirname, 'resources' ),
                }, {
                    find: '~',
                    replacement: path.resolve( __dirname, 'resources/ts' ),
                },
            ]
        },
        plugins: [
            vuePlugin({
                template: {
                    transformAssetUrls: {
                        base: null,
                        includeAbsolute: false,
                    },
                },
            }),
            laravel({
                input: [
                    'resources/ts/bootstrap.ts',
                    'resources/ts/app.ts',
                    'resources/ts/auth.ts',
                    'resources/ts/pos.ts',
                    'resources/ts/pos-init.ts',
                    'resources/ts/setup.ts',
                    'resources/ts/update.ts',
                    'resources/ts/dashboard.ts',
                    'resources/ts/cashier.ts',
                    'resources/ts/lang-loader.ts',
    
                    'resources/scss/app.scss',
                    'resources/scss/light.scss',
                    'resources/scss/dark.scss',
                    'resources/scss/grid.scss',
                    'resources/scss/animations.scss',
                    'resources/scss/typography.scss',
                    'resources/scss/fonts.scss',
                ],
                refresh: [ 'resources/views/**', 'resources/ts/**', 'resources/sass/**' ],
            }),
        ],
    });
}