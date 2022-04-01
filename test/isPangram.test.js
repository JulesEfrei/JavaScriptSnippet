import { expect } from "@jest/globals"
import { isPangram } from "../main"

test("isPangram function", () => {
    expect(isPangram("abcdefghijklmnopqrstuvwxyz")).toBe(true)
    expect(isPangram("Hello Word")).toBe(false)
})