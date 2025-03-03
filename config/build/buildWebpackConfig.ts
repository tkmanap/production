import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildResolvers} from "./buildResolvers";
import {buildLoader} from "./buildLoader";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options
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
            rules: buildLoader(options),
        },
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options): undefined,
    };
}