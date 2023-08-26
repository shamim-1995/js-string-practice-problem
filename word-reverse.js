function reverseWords(str) {
    const words = str.split(' ');
    // console.log(words);
    //Output:
    // [ 'I', 'am', 'good', 'a', 'boy' ]
    const result = [];

    for (let i = words.length - 1; i >= 0; i--) {
        const element = words[i];
        result.push(element);
    }
    console.log(result);
    const reversed = result.join(' ');
    return reversed;
}



const myString = 'I am good a boy';

reverseWords(myString);