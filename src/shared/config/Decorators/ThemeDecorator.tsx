import {StoryContext, StoryFn} from "@storybook/react";
import {Theme, ThemeProvider} from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme) =>
    (Story: StoryFn, context: StoryContext) => (
        <ThemeProvider>
            <div className={`app ${theme}`}>
                {Story(context.args, context)}
            </div>
        </ThemeProvider>
    )