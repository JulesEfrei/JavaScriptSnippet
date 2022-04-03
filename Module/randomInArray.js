import randomBetweenExclude from "./randomBetweenExclude"

export default function randomInArray(arr) {

    return arr[randomBetweenExclude(arr.length, -1)]

}