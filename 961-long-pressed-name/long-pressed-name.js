/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let namePointer = 0;
    let typedPointer = 0;

    while (namePointer < name.length && typedPointer < typed.length) {
        if (name[namePointer] === typed[typedPointer]) {
            // Characters match, advance both pointers
            namePointer++;
            typedPointer++;
        } else {
            // Characters don't match
            if (typedPointer === 0 || typed[typedPointer] !== typed[typedPointer - 1]) {
                // If typed has no previous character or the current character in typed
                // is different from the previous one, then it's not a long press
                return false;
            }
            typedPointer++; // Advance typed pointer to check the next character
        }
    }

    // Check if there are remaining characters in typed
    while (typedPointer < typed.length) {
        if (typed[typedPointer] !== name[namePointer - 1]) {
            return false;
        }
        typedPointer++;
    }

    // Ensure that all characters in name have been processed
    return namePointer === name.length;
};
