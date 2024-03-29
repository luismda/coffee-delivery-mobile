module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@/assets': './src/assets',
            '@/components': './src/components',
            '@/routes': './src/routes',
            '@/screens': './src/screens',
            '@/data': './src/data',
            '@/dtos': './src/dtos',
            '@/state': './src/state',
            '@/theme': './src/theme',
            '@/utils': './src/utils',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
