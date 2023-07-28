import { act, fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe("App Component", () => {
    it("should render react", () => {
        render(<App/>)
        jest.spyOn(Math, 'random').mockReturnValue(0);
        const increaseButton = screen.getByText(/Random Button/)
        act(() => {
            fireEvent.click(increaseButton)
            increaseButton.click()
        })
        screen.debug()
        expect(screen.getByText(/Random name : Maria Anders/)).toBeInTheDocument()
    })
})
