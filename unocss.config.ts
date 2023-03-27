import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetWebFonts,
  transformerVariantGroup,
  presetWind
} from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetWind(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        times: ['Times']
      }
    }),
  ],
  theme: {
    colors: {
      primary: '#7eebff'
    }
  },
  transformers: [
    transformerVariantGroup()
  ],
  shortcuts: {
    'pos-center': 'relative left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]',
    'btn-primary': 'bg-primary rounded mt-5 text-white py-1 px-4',
    'flex-center': 'flex justify-center items-center'
  }
})
