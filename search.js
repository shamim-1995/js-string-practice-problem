const lyrics = 'I am md shamim sikdar.My dream is a future web developer.';


const searchString = 'Shamim';

// const doesExist = lyrics.includes('shamims');
// const doesExist = lyrics.includes('Shamim');
// const doesExist = lyrics.includes(searchString);

const lyricsLowerCase = lyrics.toLowerCase();
// const doesExist = lyrics.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);
const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());

// console.log(doesExist);
// console.log(doesExistOneLine);
//-------------------------------
//indexOf

// console.log(lyrics.indexOf('web'));

console.log(lyrics.indexOf('webs'));
console.log(lyrics.indexOf('am'));
//

if(lyrics.indexOf('sikdar') !== -1){
console.log('exist inside the string');
}
else{
    console.log('cannot find it');
}


//starts with..........

console.log(lyrics.startsWith('I'));

//Ends with...

const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';

fileName.endsWith('.pdf');