import {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';

import {Button, ButtonProps, ThemeButton} from './Button';

import 'app/styles/index.scss'

const meta: Meta<ButtonProps> = {
    title: 'ui/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        onClick: {action: 'clicked'},
        theme: {
            control: 'select',
            options: [ThemeButton.CLEAR, ThemeButton.OUTLINE],
        },
    },
    args: {onClick: fn()},
};

export default meta;

type Story = StoryObj<ButtonProps>;

// Template

export const Clear: Story = {
    args: {
        children: 'Clear Button',
        theme: ThemeButton.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: 'Outline Button',
        theme: ThemeButton.OUTLINE,
    },
};
