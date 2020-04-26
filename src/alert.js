export default showAlert;

function showAlert() {
	console.log('this is alert!')
}

let aa = ['aa','bb','cc'];
console.log(...aa)

try {
	document.getElementById("welcome").innerHTML = aa;
} catch(e){
	console.log("couldnt find 'root' element")
}

let promise = new Promise( (resolve, reject) => {
  setTimeout( _ => resolve("done"), 500);
});

promise.then( data => {
	console.log(data);
})