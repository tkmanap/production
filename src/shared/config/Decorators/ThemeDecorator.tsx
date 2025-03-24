import {StoryContext, StoryFn} from "@storybook/react";
import {Theme} from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme) =>
    (Story: StoryFn, context: StoryContext) => (
        <div className={`app ${theme}`}>
            {Story(context.args, context)}
        </div>
    )