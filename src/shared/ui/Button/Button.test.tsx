import {Button, ThemeButton} from "shared/ui/Button/Button";
import {render, screen} from "@testing-library/react";

describe('classNames', () => {
    test('with only first param', () => {
        render(<Button>test</Button>)
        expect(screen.getByText('test')).toBeInTheDocument()
    })

    test('with only first param', () => {
        render(<Button theme={ThemeButton.CLEAR}>test</Button>)
        expect(screen.getByText('test')).toHaveClass('clear')
        screen.debug()
    })
});