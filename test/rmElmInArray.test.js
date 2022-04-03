import { expect } from "@jest/globals"
import { rmElmInArray } from "../main"

test('RmDouble function', () => { 
    
    expect(rmElmInArray([1, 2, 3, 4], 4)).toEqual([1, 2, 3])
    expect(rmElmInArray([10, 100, 1000, 10], 10)).toEqual([100, 1000])

 })