let str = "aaaabbbcca";
let count = {};

for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (count[char]) {
        count[char]++;
    } else {
        count[char] = 1;
    }
}

console.log(count);