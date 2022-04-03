export default function rmElmInArray(arr, element) {

    return arr.reduce((prev, curr) => curr == element ? prev: [...prev, curr], [])

}