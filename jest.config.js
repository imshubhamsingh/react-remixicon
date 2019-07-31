module.exports = {
  roots: ["<rootDir>/src/components"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest"
  },
  testRegex: "/__tests__/",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["<rootDir>/src/setupEnzyme.ts"]
};
