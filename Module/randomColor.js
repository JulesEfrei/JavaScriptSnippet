import randomBetween from "./randomBetween";

export default function randomColor() {

    return ("#" + randomBetween(16777215).toString(16))

}