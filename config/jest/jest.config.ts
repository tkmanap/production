import type {Config} from 'jest';
import path from 'path';

const config: Config = {
    clearMocks: true,
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    moduleDirectories: ['node_modules'],
    modulePaths: ['<rootDir>/src'],
    testMatch: ['<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)'],
    rootDir: path.resolve(__dirname, '../../'),
    setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    transformIgnorePatterns: ['/node_modules/'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
        '^.+\\.(css|sass|scss)$': '<rootDir>/config/jest/__mocks__/styleMock.js',
    },
};

export default config;
