import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === 'lib') {
    return {
      plugins: [react(), dts({ tsconfigPath: './tsconfig.app.json' })],
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'DocumentationTemplate',
          formats: ['es'],
          fileName: 'index'
        },
        rollupOptions: {
          external: ['react', 'react-dom', 'react-router-dom'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
              'react-router-dom': 'ReactRouterDOM'
            }
          }
        },
        cssCodeSplit: false
      }
    }
  }

  return {
    plugins: [react()],
    define: {
      global: 'globalThis',
    },
    resolve: {
      alias: {
        buffer: 'buffer',
      },
    },
    optimizeDeps: {
      include: ['buffer'],
    },
  }
})
