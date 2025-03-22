import {Meta} from '@storybook/react';
import 'app/styles/index.scss'
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {MainPage} from "pages/MainPage";

const meta: Meta = {
    title: 'pages/MainPage',
    component: MainPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;


export const Light = {
    args: {},
};


export const Dark = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};
