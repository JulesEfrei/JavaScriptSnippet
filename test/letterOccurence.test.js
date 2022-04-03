import { expect } from "@jest/globals"
import { letterOccurence } from "../main"

test('letterOccurence function', () => { 
    
    expect(letterOccurence("Hello Word", "l")).toBe(2)
    expect(letterOccurence("aaaaa ca dit quoi ?", "a")).toBe(6)

 })