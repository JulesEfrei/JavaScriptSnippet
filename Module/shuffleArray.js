import randomBetween from "./randomBetween";
import rmDouble from "./rmDouble";

export default function shuffleArray(arr) {

    const uniqueRandom = (arr, newTab) => {
        const newRandom = arr[randomBetween(arr.length)]
        if(newTab.includes(newRandom)) {
            return uniqueRandom(arr, newTab)
        }
        return newRandom
    }

    const cptArrWithoutDouble = rmDouble(arr).length
    const newArr = [
        ...new Array(cptArrWithoutDouble < arr.length ? cptArrWithoutDouble : arr.length).map(elm => elm)
    ]

    return newArr.reduce((prev, curr) => [...prev, uniqueRandom(arr, prev)], [])

}