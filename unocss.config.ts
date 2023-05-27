import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetWebFonts,
  presetWind,
  transformerVariantGroup
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
    })
  ],
  transformers: [
    transformerVariantGroup()
  ],
  theme: {
    colors: {
      primary: '#7eebff'
    },
    breakpoints: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px'
    }
  },
  shortcuts: {
    'pos-center': 'relative left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]',
    'btn-primary': 'bg-primary rounded mt-5 text-white py-1 px-4',
    'flex-center': 'flex justify-center items-center'
  },
  rules: [
    [/^min-h-(\d+)px$/, ([, h]) => {
      return {
        'min-height': `calc(100vh - ${h}px)`
      }
    }]
  ]
})
