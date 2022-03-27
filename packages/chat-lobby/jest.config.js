module.exports = {
  displayName: 'chat-lobby',
  preset: '../../jest.preset.js',
  transform: {
    '^.+.vue$': 'vue3-jest',
    '.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory: '../../coverage/packages/chat-lobby',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': {
      tsconfig: 'packages/chat-lobby/tsconfig.spec.json',
      babelConfig: 'packages/chat-lobby/babel.config.js',
    },
    'vue-jest': {
      tsConfig: 'packages/chat-lobby/tsconfig.spec.json',
      babelConfig: 'packages/chat-lobby/babel.config.js',
    },
  },
};
