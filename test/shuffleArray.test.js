import { expect } from "@jest/globals"
import { shuffleArray } from "../main"

test('RmDouble function', () => { 
    
    expect(shuffleArray([1, 2, 3, 4])).not.toEqual([1, 2, 3, 4])
    expect(shuffleArray([10, 100, 1000])).not.toEqual([10, 100, 1000])

 })