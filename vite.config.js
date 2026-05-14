import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'about-us': resolve(__dirname, 'about/who-we-are.html'),
        providers: resolve(__dirname, 'about/providers.html'),
        'service-areas': resolve(__dirname, 'about/service-areas.html'),
        'primary-care': resolve(__dirname, 'services/primary-care.html'),
        'wound-care': resolve(__dirname, 'services/wound-care.html'),
        psychiatry: resolve(__dirname, 'services/psychiatry.html'),
        insurances: resolve(__dirname, 'patients/insurances.html'),
        forms: resolve(__dirname, 'patients/forms.html'),
        contact: resolve(__dirname, 'contact.html'),
        terms: resolve(__dirname, 'legal/terms.html'),
        privacy: resolve(__dirname, 'legal/privacy.html'),
      },
    },
  },
})
