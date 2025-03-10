import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoader({isDev}: BuildOptions): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.(sa|sc|c)ss$/i,
        use: [
            isDev
                ? 'style-loader'
                : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
        ],
    }
    console.log("CSS Loader Config:", JSON.stringify(cssLoader, null, 2));
    return [
        typescriptLoader,
        cssLoader,
    ]
}