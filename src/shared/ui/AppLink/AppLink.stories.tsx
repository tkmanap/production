import type {Meta, StoryObj} from '@storybook/react';
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeDecorator} from "shared/config/Decorators/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
    },
    argTypes: {
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AppLinkLight: Story = {
    args: {
        to: '/',
        children: 'link light',
        theme: AppLinkTheme.PRIMARY,  // Теперь можно передать theme
    },
};

export const AppLinkDark: Story = {
    args: {
        to: '/',
        children: 'link dark',
        theme: AppLinkTheme.PRIMARY,  // Теперь можно передать theme
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};