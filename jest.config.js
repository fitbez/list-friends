module.exports = {
  transform: {
    "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  testPathIgnorePatterns: ["/node_modules/"],
  collectCoverage: true,
  coverageReporters: ["json", "lcov", "text", "clover"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.js"],
};
