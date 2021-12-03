import * as fs from 'fs';

const data = fs.readFileSync('day2-input.txt', 'utf-8');
const instructionsArray = data.split("\n");

type Commands = {
	depth: number;
	forward: number;
	aim: number;
}


// object for part 1
let path: Commands = {
	depth: 0,
	forward: 0,
	aim: 0
}

// object for part 2
let path_with_aim: Commands = {
	depth:0,
	forward: 0,
	aim: 0
}

for (let i = 0; i < instructionsArray.length; i++) {
	
	let len: number = instructionsArray[i].length
	let command: string[] = instructionsArray[i].split(" ")
	let steps: number = parseInt(command[1])

	// assign value to path object
	if (command[0] == "up") {
		path.depth -= steps;
		path_with_aim.aim -= steps;
	} 
	if (command[0] == "down") {
		path.depth += steps;
		path_with_aim.aim += steps;
	}
	if (command[0] == "forward") {
		path.forward += steps;
		path_with_aim.forward += steps;
		path_with_aim.depth += path_with_aim.aim * steps;
	}
}
// day 2 part 1 answer 1383564
let day2_part1: number = path.depth * path.forward;
console.log(day2_part1)

// day 2 part 2 answer
let day2_part2: number = path_with_aim.forward * path_with_aim.depth;
console.log(day2_part2)
