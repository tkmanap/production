import type {Meta, StoryObj} from '@storybook/react';

import {Theme} from "app/providers/ThemeProvider";
import {ThemeDecorator} from "shared/config/Decorators/ThemeDecorator";
import {Modal} from "shared/ui/Modal/Modal";

const meta = {
    title: 'ui/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalLight: Story = {
    args: {
        isOpen: true,
        children: 'text'
    },
};

export const ModalDark: Story = {
    args: {
        isOpen: true,
        children: 'text'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};