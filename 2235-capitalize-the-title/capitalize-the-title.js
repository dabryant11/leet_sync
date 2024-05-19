/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    // Split the title into words
    let words = title.split(" ");
    
    // Process each word
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 2) {
            // Capitalize the first letter and make the rest lowercase
            words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
        } else {
            // Make the whole word lowercase
            words[i] = words[i].toLowerCase();
        }
    }
    
    // Join the words back into a single string
    return words.join(" ");
};
