// add whatever parameters you deem necessary
function constructNote(message, letters) {
    const lettersFreq = {};
    const messageFreq = {};

    // count frequency of letters
    for (let char of letters) {
        lettersFreq[char] = ++lettersFreq[char] || 1;
    }

    // count frequency of message
    for (let char of message) {
        messageFreq[char] = ++messageFreq[char] || 1;
    }

    // compare frequencies
    for(let char in messageFreq) {
        if (!lettersFreq[char]) {
            return false;
        }
        if (messageFreq[char] > lettersFreq[char]) {
            return false;
        }
    }

    return true;

}
