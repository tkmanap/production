import {StoryContext, StoryFn} from '@storybook/react';
import {BrowserRouter} from 'react-router';

export const RouterDecorator = (Story: StoryFn, context: StoryContext) => {
    return (
        <BrowserRouter>
            {Story(context.args, context)}
        </BrowserRouter>
    );
};
