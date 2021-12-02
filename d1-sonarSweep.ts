const csv = require('csv-parser')
const fs = require('fs')
let input:number[] = []
let counter = 0;

fs.createReadStream('input.csv')
.pipe(csv(
	 ['reading']
))
	.on('data', (row) => {
	input.push(parseInt(row['reading']))
})
.on('end', () => {
	for(let i = 1; i < input.length; i++) {
		if (input[i] > input[i - 1]) {
			counter++;
		}
	}
	console.log(counter)
});
//  if you’re not worried about TypeScript errors, you can pass in the -T or --transpileOnly flag. 
//This flag tells ts-node to transpile down to JavaScript without checking for any TypeScript errors.