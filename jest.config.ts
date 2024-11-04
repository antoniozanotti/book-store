import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  clearMocks: true,
  coverageProvider: "babel",
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*-test.ts?(x)"],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    "^@/ui-(.*)$": ["<rootDir>/src/domain/ui/components/ui-$1"],
    "^@/(.*)$": ["<rootDir>/src/$1"]
  }
};
export default createJestConfig(config);
