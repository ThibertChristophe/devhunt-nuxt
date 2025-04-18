// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      'vue/max-attributes-per-line': 'off',

      'vue/first-attribute-linebreak': ['error', {
        singleline: 'ignore', // Ignore la règle pour les lignes simples
        multiline: 'ignore' // Force le passage à la ligne pour les attributs multilignes
      }],
      // Ou désactiver complètement la règle :
      // 'vue/max-attributes-per-line': 'off',
    }
  }
)
