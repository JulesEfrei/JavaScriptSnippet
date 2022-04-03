import { expect } from "@jest/globals"
import { randomInArray } from "../main"

test('randomInArray function', () => { 
    
    expect(randomInArray([1, 2, 3])).not.toBe(undefined)

 })