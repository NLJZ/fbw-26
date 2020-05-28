exports.sum = (x,y) => x+y;
// exports.prepareString = (str) => {
// 	let newArray = [];
// 	str.forEach(word => {
// 		let fixedWord = word.trim();
// 		newArray.push(fixedWord.charAt(0).toUpperCase() + fixedWord.slice(1).toLowerCase());
// 	});
// 	console.log(newArray.join(" "));
// };

exports.prepareString = (str) => {
	let newArray = str.map(x => {
		let fixedWord = x.trim();
		return fixedWord.charAt(0).toUpperCase() + fixedWord.slice(1).toLowerCase();		
		});
	console.log(newArray.join(" ").replace(/[^a-zA-Z ]/g, ""));
};

// console.log(Array.isArray(str));