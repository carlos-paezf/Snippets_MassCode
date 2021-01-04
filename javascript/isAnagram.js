//Checks if a string is an anagram of another string (case-insensitive, 
//ignores spaces, punctuation and special characters).
//Use String.toLowerCase(), String.prototype.replace() with an appropriate regular 
//expression to remove unnecessary characters, String.prototype.split(''), 
//Array.prototype.sort() and Array.prototype.join('') on both strings to normalize 
//them, then check if their normalized forms are equal.

const isAnagram = (str1, str2) => {
    const normalize = str =>
        str
        .toLowerCase()
        .replace(/[^a-z0-9]/gi, '')
        .split('')
        .sort()
        .join('');
    return normalize(str1) === normalize(str2);
};


isAnagram('iceman', 'cinema'); // true