'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    // console.log(s);
    let pm = s.substring(s.length-2);
    let t = s.substring(0, s.length-2).split(":");
    // console.log({pm, t});
    if(pm === "PM") {
        t[0] = parseInt(t[0]);
        if(t[0]<12)
            t[0] +=12; 
    }
    // console.log(`${t[0]}`.padStart(2, '0'));
    // console.log();
    return t[0] +':'+ t[1] + ':' + t[2];

}
process.env.OUTPUT_PATH = "./o.txt";
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
