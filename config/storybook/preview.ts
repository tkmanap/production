import type {Preview} from '@storybook/react'
import {Theme} from "../../src/app/providers/ThemeProvider";
import {StyleDecorator} from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import {ThemeDecorator} from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {RouterDecorator} from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.DARK),
        RouterDecorator
    ]
};
export default preview;