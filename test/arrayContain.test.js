import { expect } from "@jest/globals"
import { arrayContain } from "../main"

test('RmDouble function', () => { 
    
    expect(arrayContain([1, 2, 3, 4], 5)).toBe(false)
    expect(arrayContain([10, 100, 1000], 10)).toBe(true)

 })