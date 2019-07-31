module.exports = {
  roots: ["<rootDir>/src/components"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.(js|jsx|mjs)$": "<rootDir>/node_modules/babel-jest",
    "\\.(scss|sass|css)$": "identity-obj-proxy"
  },
  testRegex: "/__tests__/",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules"
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupEnzyme.ts"]
};
