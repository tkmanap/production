import {Meta} from '@storybook/react';
import 'app/styles/index.scss'
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta: Meta = {
    title: 'ui/AppLink',
    component: AppLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {to: '/'},
};

export default meta;

export const Primary = {
    args: {
        children: 'link',
        theme: AppLinkTheme.PRIMARY
    },
};


export const Secondary = {
    args: {
        children: 'link',
        theme: AppLinkTheme.SECONDARY
    },
};

export const PrimaryDark = {
    args: {
        children: 'link',
        theme: AppLinkTheme.PRIMARY
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};


export const SecondaryDark = {
    args: {
        children: 'link',
        theme: AppLinkTheme.SECONDARY
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};
