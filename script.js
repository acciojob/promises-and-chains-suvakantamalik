//your JS code here. If required.
document.getElementById("ageForm").addEventListener("submit", function(event){
	event.preventDefault();
	const name = document.getElementById("name").value.trim();
	const age = parseInt(document.getElementById("age").value);

	if(!name || isNaN(age)){
		alert("inputs cannot be empty");
		return;
	}

	let ageCheck = new Promise((resolve, reject) => {
		setTimeout(() => {
			if(age > 18){
				resolve(`Welcome, ${name}. You can vote.`);
			}
			else{
				reject(`Oh sorry ${name}. You aren't old enough.`)
			}
		}, 4000);
	});
	ageCheck
		.then(message => {
			alert(message);
		})
		.catch(error => {
			alert(error);
		})
})