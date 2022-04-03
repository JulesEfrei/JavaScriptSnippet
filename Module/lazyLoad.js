export default function lazyLoad() {

    const img = document.querySelectorAll(".lazy")

    img.forEach(elm => elm.setAttribute("loading", "lazy"))

}