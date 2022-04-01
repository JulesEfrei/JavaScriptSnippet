import { expect } from "@jest/globals"
import { countWord } from "../main"

test("CountWord function", () => {
    expect(countWord("Ca dit quoi")).toBe(3)
    expect(countWord("Hello Word")).toBe(2)
    expect(countWord("One upon a time a dev")).toBe(6)
})