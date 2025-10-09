import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
        name: 'host-app',
        remotes: {
            // cambiar por la url del proyecto que se hosteará
            remote_app: "http://localhost:5001/assets/remoteEntry.js",
        },
        shared: ['vue']
    })
  ],
})
