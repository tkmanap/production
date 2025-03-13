import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoader({isDev}: BuildOptions): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
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
    return [
        typescriptLoader,
        cssLoader,
        svgLoader,
        fileLoader,
    ]
}