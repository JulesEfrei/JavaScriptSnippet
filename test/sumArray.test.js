import { expect } from "@jest/globals"
import { sumArray } from "../main"

test('RmDouble function', () => { 
    
    expect(sumArray([1, 2, 3, 4])).toBe(10)
    expect(sumArray([10, 100, 1000])).toBe(1110)

 })