const fs = require('fs');

const list = fs.readFileSync('./10-million-password-list-top-1000000.txt').toString();
const lines = list.split('\n');
const outputFile = 'most-common-passwords';
let result = {};
lines.forEach(l => {

    if (l.length >= 4) {
        const line = l.toLowerCase();
        const firstLetter = line[0];
        const secondLetter = line[1];
        const thirdLetter = line[2];
        const fourthLetter = line[3];
        if (result[firstLetter] === undefined) { 
            result[firstLetter] = {};
        }
        if (result[firstLetter][secondLetter] === undefined) { 
            result[firstLetter][secondLetter] = {};
        }
        if (result[firstLetter][secondLetter][thirdLetter] === undefined) { 
            result[firstLetter][secondLetter][thirdLetter] = {};
        }
        if (result[firstLetter][secondLetter][thirdLetter][fourthLetter] === undefined) { 
            result[firstLetter][secondLetter][thirdLetter][fourthLetter] = [];
        }
        result[firstLetter][secondLetter][thirdLetter][fourthLetter].push(line);
    }
});

fs.writeFileSync('../lib/src/'+outputFile+'.json',JSON.stringify(result) );
fs.writeFileSync('./'+outputFile+'.formatted.json',JSON.stringify(result,null,2) );

console.log('DONE')
