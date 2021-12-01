const csv = require('csv-parser')
const fs = require('fs')
const results = []
type sonarReport = {
	blank: string;
	reading: number;
};

fs.createReadStream('input.csv')
.pipe(csv([
	{ separator: '\n' },
	{ headers: false }
]
))
.on('data', (data) => sonarReport.reading.push(data))
.on('end', () => {
	console.log(sonarReport.reading)
});
