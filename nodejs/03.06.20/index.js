const fs = require("fs");

let writer = fs
.createWriteStream("newBigTest.txt", {flags:"wx+"})
.on("error", (er)=>{
	console.log(er);
})
.on("open", (fileData)=>{
	console.log('file is open');
	console.log(`fileData : ${fileData}`)
})
;

writer.write("hi this is a new file done by Nodejs");
let newWriter = fs.createWriteStream("newText.txt", {flags: "w"});
newWriter.on('pipe', ()=> {
	console.log('cool something is piped in')
});

let reader = fs.createReadStream("newText.txt")
.pipe(newWriter)