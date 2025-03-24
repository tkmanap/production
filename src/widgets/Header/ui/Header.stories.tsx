import type {Meta, StoryObj} from '@storybook/react';

import {Theme} from "app/providers/ThemeProvider";
import {ThemeDecorator} from "shared/config/Decorators/ThemeDecorator";
import {Header} from "widgets/Header";

const meta = {
    title: 'widgets/Header',
    component: Header,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
};