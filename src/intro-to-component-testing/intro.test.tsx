
import { describe, expect, it } from 'vitest';
import {render, screen} from '@testing-library/react';
import App from '../App';

describe("App Component", () => {
    it("should render react",() =>{
        render(<App />)
        screen.getAllByText(/React/)
    })
})