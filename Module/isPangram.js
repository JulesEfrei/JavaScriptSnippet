export default function isPangram(sentence) {

    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const arr = alphabet.split('')

    for(var i = 0; i < arr.length; i++) {
        if(arr.findIndex(elm => elm = sentence[i]) == -1) {
            return false
        }
    }

    return true

}