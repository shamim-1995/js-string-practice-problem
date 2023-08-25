const lyrics = 'I am md shamim sikdar.My dream is a future web developer.';
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('');
// console.log(lyrics);
// console.log(parts);
// console.log(sentences);
// console.log(chars);
const partial = lyrics.slice(7,10);
console.log(partial);

const partial2 = lyrics.substring(7,10);
console.log(partial2);
const lines =['I am md shamim sikdar',
'My dream is a future web',
'developer.'];

const newSong  = lines.join(': ');
console.log(newSong);





