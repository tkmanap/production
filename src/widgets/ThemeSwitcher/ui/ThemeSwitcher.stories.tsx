import {Meta} from '@storybook/react';
import 'app/styles/index.scss'
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

const meta: Meta = {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
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
