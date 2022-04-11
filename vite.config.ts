import { defineConfig, normalizePath } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import autoprefixer from 'autoprefixer'
import WindiCSS from 'vite-plugin-windicss'
import viteEslint from 'vite-plugin-eslint'
import viteStylelint from '@amatlash/vite-plugin-stylelint'

const variablePath = normalizePath(path.resolve('./src/variable.scss'))
// https://vitejs.dev/config/
export default defineConfig({
  // root: path.join(__dirname, 'src'),
  plugins: [
    react({
      babel: {
        plugins: [
          // 适配 styled-component
          'babel-plugin-styled-components',
          // 适配 emotion
          '@emotion/babel-plugin'
        ]
      }
    }),
    WindiCSS(),
    viteEslint(),
    viteStylelint({
      exclude: /windicss|node_modules/
    })
  ],
  css: {
    postcss: {
      plugins: [autoprefixer()]
    },
    preprocessorOptions: {
      scss: {
        // additionalData 的内容会在每个 scss 文件的开头自动注入
        additionalData: `@import "${variablePath}";`
      }
    }
  },
  resolve: {
    alias: {
      '@assets': path.join(__dirname, 'src/assets/imgs')
    }
  }
})
