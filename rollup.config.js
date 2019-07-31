import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";

import pkg from "./package.json";

export default [
  {
    input: "src/index.ts",
    external: Object.keys(pkg.peerDependencies),
    plugins: [
      typescript({
        typescript: require("typescript")
      }),
      postcss({
        extensions: [".css"]
      }),
      resolve()
    ],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
      {
        file: "example/src/reactComponentLib/index.js",
        format: "es",
        banner: "/* eslint-disable */"
      }
    ]
  }
];
