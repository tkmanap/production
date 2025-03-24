import {StoryFn, StoryContext} from '@storybook/react';
import 'app/styles/index.scss';

export const StyleDecorator = (Story: StoryFn, context: StoryContext) => Story(context.args, context);
