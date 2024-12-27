module.exports = {
  preset: "ts-jest",
  setupFilesAfterEnv: [
    "@testing-library/jest-dom",
    "<rootDir>/src/setupTests.ts",
  ],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|svg)$": "identity-obj-proxy",
  },
};
