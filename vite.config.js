import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    server: {
        host: '0.0.0.0', // 👈 expose to all network interfaces
        port: 5173,
        hmr: {
            host: 'localhost', // 👈 or your real host (e.g., 127.0.0.1 or your PC IP)
        },
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react()
    ],
});
