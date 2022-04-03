import { expect } from "@jest/globals"
import { randomBetweenExclude } from "../main"

test("randomBetweenExclude function", () => {
    expect(randomBetweenExclude(10, 0)).toBeGreaterThanOrEqual(1)
    expect(randomBetweenExclude(10, 0)).toBeLessThanOrEqual(9)

    expect(randomBetweenExclude(3, 0)).toBeGreaterThanOrEqual(1)
    expect(randomBetweenExclude(3, 0)).toBeLessThanOrEqual(2)

    expect(randomBetweenExclude(16, 5)).toBeGreaterThanOrEqual(6)
    expect(randomBetweenExclude(16, 5)).toBeLessThanOrEqual(15)

    expect(randomBetweenExclude(100, 13)).toBeGreaterThanOrEqual(14)
    expect(randomBetweenExclude(100, 13)).toBeLessThanOrEqual(99)

    expect(randomBetweenExclude(100)).toBeGreaterThanOrEqual(14)
    expect(randomBetweenExclude(100)).toBeLessThanOrEqual(99)
})