import {Meta} from '@storybook/react';
import {fn} from '@storybook/test';
import 'app/styles/index.scss'
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Header} from "widgets/Header";

const meta: Meta = {
    title: 'widgets/Header',
    component: Header,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        onClick: {action: 'clicked'},
        theme: {
            control: 'select',
        },
    },
    args: {onClick: fn()},
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
