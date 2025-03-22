import {Meta} from '@storybook/react';
import 'app/styles/index.scss'
import Sidebar from './Sidebar';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;


// Template

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
