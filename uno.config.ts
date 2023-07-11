import {
  defineConfig,
  presetIcons,
  presetWebFonts,
  presetTypography,
  presetUno
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'custom-link':
      'flex items-center hover:text-White-Custom ease-in duration-300 underline-transparent text-Text-Custom',
    'icons-link':
      'hover:text-White-Custom ease-in duration-300 underline-transparent text-Text-Custom'
  },
  theme: {
    colors: {
      Background: '#050505',
      Primary: '#8B8D8F',
      Secondary: '#343434',
      'Secondary-Dark': '#0E0E0E',
      'Text-Custom': '#BBBBBB',
      'White-Custom': '#FAFAFA'
    },
    animation: {
      'pulse-slow': 'pulse 6s infinite cubic-bezier(0.4, 0, 0.6, 1)',
      'border-width': 'border-width 3s infinite alternate'
    },
    keyframes: {
      'border-width': {
        from: { width: '10px', opacity: '0' },
        to: { width: '100px', opacity: '1' }
      }
    }
  },
  presets: [
    presetUno(),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Inter'
      }
    }),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      },
      cdn: 'https://esm.sh/'
    })
  ]
})
