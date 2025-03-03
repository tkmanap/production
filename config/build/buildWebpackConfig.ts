import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildResolvers} from "./buildResolvers";
import {buildLoader} from "./buildLoader";
import {buildPlugins} from "./buildPlugins";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode} = options
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        resolve: buildResolvers(),
        module: {
            rules: buildLoader(),
        },
        plugins: buildPlugins(options)
    };
}