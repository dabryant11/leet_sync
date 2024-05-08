/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
      const hash = {};

    for (let i = 0; i < word1.length; i++) {
        const letter = word1[i];
        const letter2 = word2[i];

        if (!hash[letter]) {
            hash[letter] = 0;
        }

        if (!hash[letter2]) {
            hash[letter2] = 0;
        }

        hash[letter]++;
        hash[letter2]--;
    }

    return !Object.keys(hash).find((letter) => Math.abs(hash[letter]) > 3)
};