import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    webpackFinal: async (config) => {
        if (!config.resolve) config.resolve = { extensions: [], modules: [] };
        config.resolve.modules?.push(path.resolve(__dirname, '..', '..', 'src'));
        config.resolve.extensions?.push('.ts', '.tsx');

        config.module?.rules?.push(buildCssLoader(true));

        config.module.rules = config.module.rules.map((rule) => {
            if (rule && typeof rule !== 'string' && rule.test instanceof RegExp && rule.test.test('.svg')) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });

        config.module.rules.push({
            test: /\.svg$/i,
            use: ['@svgr/webpack'],
        });

        return config;
    },
    framework: '@storybook/react-webpack5',
    docs: { autodocs: true },
};

export default config;
