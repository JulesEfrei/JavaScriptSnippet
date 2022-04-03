export default function toggleElement(selector) {

    const elm = document.querySelector(selector)

    return elm.style.display == "block" ? "none" : "block"

}