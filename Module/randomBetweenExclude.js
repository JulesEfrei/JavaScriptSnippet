export default function randomBetweenExclude(max, min = 0) {

    return Math.floor(Math.random() * (max - (min + 1))) + (min + 1)

}