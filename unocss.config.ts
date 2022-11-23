import { defineConfig, presetAttributify, presetUno } from 'unocss'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno()
  ],
  transformers: [
    transformerAttributifyJsx()
  ],
  theme: {
    colors: {
      primary: '#149eca'
    }
  }
})
