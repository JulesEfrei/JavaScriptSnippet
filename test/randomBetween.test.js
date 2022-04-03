import { expect } from "@jest/globals"
import { randomBetween } from "../main"

test("randomBetween function", () => {
    expect(randomBetween(10, 0)).toBeGreaterThanOrEqual(0)
    expect(randomBetween(10, 0)).toBeLessThanOrEqual(10)

    expect(randomBetween(3, 2)).toBeGreaterThanOrEqual(2)
    expect(randomBetween(3, 2)).toBeLessThanOrEqual(3)

    expect(randomBetween(16, 5)).toBeGreaterThanOrEqual(5)
    expect(randomBetween(16, 5)).toBeLessThanOrEqual(16)

    expect(randomBetween(100, 13)).toBeGreaterThanOrEqual(13)
    expect(randomBetween(100, 13)).toBeLessThanOrEqual(100)

    expect(randomBetween(100)).toBeGreaterThanOrEqual(0)
    expect(randomBetween(100)).toBeLessThanOrEqual(100)
})