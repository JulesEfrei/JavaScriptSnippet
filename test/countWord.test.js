import { expect } from "@jest/globals"
import { countWord } from "../main"

test("CountWord function", () => {
    expect(countWord("Ca dit quoi")).toBe(3)
})