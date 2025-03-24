import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildCssLoader(isDev: boolean) {
    return {
        devtool: false,
        test: /\.(sa|sc|c)ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: /\.module\.scss$/
                    },
                    sourceMap: false
                }
            },
            "sass-loader",
        ],
    };
}