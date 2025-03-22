import {Meta} from '@storybook/react';
import 'app/styles/index.scss'
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";

const meta: Meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;


export const Light = {
    args: {
    },
};


export const Dark = {
    args: {
    },
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};
