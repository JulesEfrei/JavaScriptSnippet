export default function rmDouble(arr) {

    return [... new Set(arr)]

    // return arr.reduce((prev, curr) => (prev.includes(curr) ? prev : [...prev, curr]), [])

}