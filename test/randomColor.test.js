import { expect } from "@jest/globals"
import { randomColor } from "../main"

test('RandomColor function', () => { 
    
    expect(randomColor()).not.toBe("#")

 })