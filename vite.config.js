import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/scss/app.scss', 'resources/js/app.js'],
            refresh: true,
        }),
    ],

    resolve: {
        // Che cos'è un alias?
        // Quando io chiamo qualcosa da qualche parte, in realtà io posso riferirmi a qualcos'altro
        alias: {
            //When I say "~resources" I mean "/resources/"
            '~resources': '/resources/',
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        },
    },
});
