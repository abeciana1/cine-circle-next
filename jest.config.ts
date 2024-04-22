import type {Config} from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/*.config.(js|ts|jsx|tsx)$",
    "/coverage/",
    "/dist/",
    "/public/",
  ],
  collectCoverageFrom: [
    "**/__tests__/**/*.{js,jsx,ts,tsx}"
  ],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js|jsx)"
  ],
};

export default config;