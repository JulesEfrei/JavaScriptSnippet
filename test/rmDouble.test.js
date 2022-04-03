import { expect } from "@jest/globals"
import { rmDouble } from "../main"

test('RmDouble function', () => { 
    
    expect(rmDouble([1, 1, 2, 3])).toEqual([1, 2, 3])

 })