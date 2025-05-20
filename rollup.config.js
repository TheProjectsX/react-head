import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const packageJson = require("./package.json");

export default [
    {
        input: "src/index.js",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
                exports: "named",
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
                exports: "named",
            },
        ],
        plugins: [peerDepsExternal(), resolve(), commonjs(), terser()],
        external: ["react", "react-dom"],
    },
];
