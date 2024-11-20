const { withTamagui } = require('@tamagui/next-plugin')

module.exports = withTamagui({
  config: './src/tamagui.config.ts',
  components: ['tamagui'],
  excludeReactNativeWebExports: ['Switch', 'ProgressBar', 'Picker', 'Modal'],
  useReactNativeWebLite: true,
  disableExtraction: process.env.NODE_ENV === 'development',
})