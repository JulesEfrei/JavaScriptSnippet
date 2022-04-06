export default function qsa(parent = "document", selector) {

    return [...parent.querySelectorAll(selector)]

}