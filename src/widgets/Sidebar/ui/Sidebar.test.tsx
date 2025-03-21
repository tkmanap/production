import {fireEvent, screen} from "@testing-library/react";
import {Sidebar} from "widgets/Sidebar/index";
import {renderWithTranslation} from "shared/lib/tests/renderWithTranslation";

describe('Sidebar', () => {
    test('', () => {
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('test toggle', () => {
        renderWithTranslation(<Sidebar/>)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })

})