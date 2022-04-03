export default function letterOccurence(str, letter) {

    return str.toLowerCase().split("").reduce((prev, curr) => curr == letter ? [...prev, curr] : [...prev, 0], []).filter(elm => elm == letter).length

}