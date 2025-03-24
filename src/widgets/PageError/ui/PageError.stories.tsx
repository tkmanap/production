import type {Meta, StoryObj} from '@storybook/react';

import {Theme} from "app/providers/ThemeProvider";
import {ThemeDecorator} from "shared/config/Decorators/ThemeDecorator";
import {PageError} from "widgets/PageError";

const meta = {
    title: 'widgets/PageError',
    component: PageError,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)]
};