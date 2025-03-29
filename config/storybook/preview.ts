import type {Preview} from '@storybook/react'
import {globalDecorators} from "../../src/shared/config/Decorators";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: globalDecorators
};

export default preview;