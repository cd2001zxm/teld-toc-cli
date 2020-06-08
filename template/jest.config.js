module.exports = {
  verbose:true,
  // "globals": {
  //   "_reportData_": []
  // },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: [
    'js',
    'vue',
    'json'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  //setupFiles:['<rootDir>/node_modules/teld-component-proxy/lib/teld-ui.mobile.js'],
  "transformIgnorePatterns": [
    "node_modules/(?!(teld-component-proxy)/)"
  ],
 // transformIgnorePatterns: ["<rootDir>/node_modules/(?!teld-component-proxy)"],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue'
  ],
  "setupFiles": ["jest-canvas-mock"],
  //"globalSetup":"<rootDir>/test/unit/script/setup.js",
  //"globalTeardown":"<rootDir>/test/unit/script/teardown.js",
  //  "runner": "jest-electron/runner",
  // "testEnvironment": "jest-electron/environment",
  //"testEnvironment": "<rootDir>/test/unit/script/CustomEnvironment.js",
  "reporters": [
    "default",
    ["<rootDir>/test/unit/script/ddp-reporter.js", {"banana": "yes", "pineapple": "no"}]
  ]
}
