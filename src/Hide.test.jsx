import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Hide } from "./App";



describe("show button hide and show",()=>{
    test("render with initial test",()=>{
        render(<Hide/>)
        const button =screen.getByText("Click")
        fireEvent.click(button)
        expect(screen.getByText("Greetings to lord")).toBeInTheDocument()
    })
})