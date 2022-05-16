const { getDefaultConfig } = require('@expo/metro-config')

const config = getDefaultConfig(__dirname, {
  // Initialize in exotic mode.
  // If you want to preserve `react-native` resolver main field, and omit cjs support, then leave this undefined
  // and skip setting the `EXPO_USE_EXOTIC` environment variable.
  mode: 'exotic',
})

module.exports = config
