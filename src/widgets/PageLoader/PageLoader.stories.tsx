import {Meta} from '@storybook/react';
import 'app/styles/index.scss'
import PageLoader from "widgets/PageLoader/PageLoader";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta = {
    title: 'widgets/PageLoader',
    component: PageLoader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {to: '/'},
};

export default meta;


export const Normal = {
    args: {},
};

export const Dark = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
};