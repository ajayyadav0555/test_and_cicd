import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { Counter } from './App'


describe("counter component", () => {
    test("render with initial test", () => {
        render(<Counter initialState={6} />)
        expect(screen.getByText("6")).toBeInTheDocument()
    })


    test("check button is increament when click", () => {
        render(<Counter initialState={0} />)
        const button = screen.getByText("Increment");
        fireEvent.click(button);
        expect(screen.getByText("1")).toBeInTheDocument()
    })


    test("button decreament the value", () => {
        render(<Counter initialState={10} />)
        const button = screen.getByText("Decrement")
        fireEvent.click(button);
        expect(screen.getByText("9")).toBeInTheDocument()
    })

    test("reset fuctiality", () => {
        render(<Counter initialState={8} />)
        const button = screen.getByText("Restart")
        fireEvent.click(button)
        expect(screen.getByText("0")).toBeInTheDocument();
    })


    test("check signChange", () => {
        render(<Counter initialState={5} />)
        const button = screen.getByText("Sign Change")
        fireEvent.click(button)
        expect(screen.getByText("-5")).toBeInTheDocument()
    })


    // test("check api", async () => {
    //     const mockData = [
    //         { id: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit" },
    //         { id: 2, title: "qui est esse" },
    //         { id: 3, title: "ea molestias quasi exercitationem repellat qui ipsa sit aut" },
    //     ];
    //     vi.spyOn(globalThis, "fetch").mockResolvedValueOnce({
    //         json: () => Promise.resolve(mockData),
    //     });


    //     render(<Counter initialState={8} />)

    //     await waitFor(() => {
    //         expect(screen.getByText(/sunt aut facere repellat provident occaecati excepturi optio/)).toBeInTheDocument();
    //         expect(screen.getByText("qui est esse")).toBeInTheDocument();
    //         expect(screen.getByText("ea molestias quasi exercitationem repellat qui ipsa sit aut")).toBeInTheDocument();
    //     })
    // })

    // test("show loading whilw calling appi",()=>{
    //     vi.spyOn(globalThis,"fetch").mockResolvedValueOnce({
    //         json:()=>Promise(resolve=>setTimeout(() => {
    //             resolve()
    //         }, 1000))
    //     })

    //     render(<Counter initialState={7}/>)
    //     expect(screen.getByText(/loading/i)).toBeInTheDocument()
    // })
})