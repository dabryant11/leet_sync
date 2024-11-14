/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let uniqueEmails = new Set();

    for (let email of emails) {
        let [local, domain] = email.split("@");
        
        // Process the local part
        if (local.includes("+")) {
            local = local.slice(0, local.indexOf("+"));
        }
        local = local.replaceAll(".", ""); // Remove all dots

        // Reconstruct the filtered email and add to the set
        uniqueEmails.add(`${local}@${domain}`);
    }

    // The size of the set gives the number of unique emails
    return uniqueEmails.size;
};
