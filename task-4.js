const findLongestWord = (str) => {
    const words = str.split(' ');
    return words.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
};
const input = "I am learning Programming to become a programmer";
console.log(findLongestWord(input));
