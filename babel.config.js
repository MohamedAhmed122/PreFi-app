module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.jsx',
          '.json',
        ],
        alias: {
          tests: ['./tests/'],
          '@hooks': './src/hooks',
          '@commons': './src/commons',
          '@components': './src/components',
          '@utils': './src/utils',
          '@store': './src/store',
          '@service': './src/service',
          '@styles': './src/styles',
          '@assets': './src/assets',
          '@screen': './src/screen',
          '@redux': './src/redux',
          '@config': './src/config',
          '@types': './src/types',
        },
      },
    ],
  ],
};
