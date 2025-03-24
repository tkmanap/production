import {Theme} from "app/providers/ThemeProvider";
import {StyleDecorator} from "shared/config/Decorators/StyleDecorator";
import {ThemeDecorator} from "shared/config/Decorators/ThemeDecorator";
import {RouterDecorator} from "shared/config/Decorators/RouterDecorator";

export const globalDecorators = [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator
]