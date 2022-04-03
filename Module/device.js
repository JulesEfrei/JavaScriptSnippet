export default function device() {

    return window.navigator.userAgent.includes("Mac OS") ? "Mac" : "Windows"

}