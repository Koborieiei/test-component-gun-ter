import { act, fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import { vi } from 'vitest';

describe("App Component", () => {
    it("should render react", () => {
        render(<App/>)
        vi.spyOn(global.Math, 'floor').mockReturnValue(0);
        const increaseButton = screen.getByText(/Random Button/)
        act(() => {
            fireEvent.click(increaseButton)
            increaseButton.click()
        })
        screen.debug()
        expect(screen.queryByText(/Random name : Maria Anders/)).toBeInTheDocument()
    })
})
