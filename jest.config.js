module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
