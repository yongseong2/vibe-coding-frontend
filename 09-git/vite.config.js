import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // json-server가 db.json에 저장할 때마다 페이지가 새로고침되지 않게 감시에서 뺀다
    watch: { ignored: ['**/db.json'] },
  },
})
