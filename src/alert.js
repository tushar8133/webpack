export default showAlert;

function showAlert() {
	console.log('this is alert!')
}

let aa = ['aa','bb','cc'];
console.log(...aa)


let promise = new Promise( (resolve, reject) => {
  setTimeout( _ => resolve("done"), 2000);
});

promise.then( data => {
	console.log(data);
})