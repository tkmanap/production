import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildCssLoader} from "./loaders/buildCssLoader";

export function buildLoader({isDev}: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'assets/resource'
    }

    const cssLoader = buildCssLoader(isDev)

    const babelLoader = {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env',],
                plugins: [
                    [
                        "i18next-extract",
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true
                        }
                    ]
                ]
            }
        }
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    return [
        svgLoader,
        fileLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
    ]
}