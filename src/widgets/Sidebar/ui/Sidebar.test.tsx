import {screen} from "@testing-library/react";
import {Sidebar} from "widgets/Sidebar/index";
import {renderWithTranslation} from "shared/lib/tests/renderWithTranslation";

describe('Sidebar', () => {
    test('', () => {
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
})