// $ node day-1-sonar-sweep.js day-1-input.txt
const fs = require('fs');
const file = (process.argv[2] && process.argv[2].length) > 0 ? process.argv[2] : 'day-1-input.txt';
let count = 0;
fs.readFile(file, 'utf-8', (err, data) => {
	const depths = [];
	if(err) throw err;
	if(data && data.length > 0) {
		data.split('\n').forEach(d => {
			depths.push(parseInt(d));
		});
	}
	depths.forEach((d, i) => {
		if(i > 0 && d > depths[i-1]) {
			count++;
		} 
	});
	console.log('count', count);
});

