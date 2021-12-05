import * as fs from 'fs';

const input = fs.readFileSync('day3-input.txt', 'utf-8');
const data = input.replace(/(\r\n|\n|\r)/gm,"")
let gamma: string = "";
let epsilon: string = "";

let columnSum: number[] = [0,0,0,0,0,0,0,0,0,0,0,0];

let width: number = 12;
let length: number = data.length

for (let i = 0; i < width; i++) {
    for (let j = i; j < length; j+= width) {
        columnSum[i] += parseInt(data[j])
    }
}

for (let k = 0; k < columnSum.length; k++) {
    if (columnSum[k] > 500) {
        gamma += "1"
        epsilon += "0"
    } else {
        epsilon += "1"
        gamma += "0"
    }
} 
// answer
let power: number = parseInt(gamma, 2) * parseInt(epsilon, 2)
console.log(power)


// Part 2
const inputArray = data.split("\n");
const oxygen: string[] = inputArray.filter(reading => reading == gamma)
console.log(oxygen)